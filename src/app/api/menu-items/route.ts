import { MenuItem } from "@/app/models/MenuItem";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import { isAdmin } from "../auth/[...nextauth]/route";

// Ensure the MONGODB_URI is set from the .env file
const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/dummydb"; // Fallback to a dummy local DB for testing

// Function to connect to MongoDB (or mock DB for development)
async function connectDB() {
  if (mongoURI === "mongodb://localhost:27017/dummydb") {
    console.log("Mock DB connection active");
  } else {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");
  }
}

// Mock Data in case there is no real DB setup
let mockMenuItems: any[] = []; // Array to hold mock data

// Mock model for MenuItem if no real DB is used
const mockMenuItemModel = {
  create: async (data: any) => {
    const newItem = { _id: Date.now().toString(), ...data }; // Create an item with mock _id
    mockMenuItems.push(newItem);
    return newItem;
  },
  findByIdAndUpdate: async (filter: any, data: any, options: any) => {
    const index = mockMenuItems.findIndex((item) => item._id === filter._id);
    if (index !== -1) {
      mockMenuItems[index] = { ...mockMenuItems[index], ...data };
      return mockMenuItems[index];
    }
    return null;
  },
  find: async () => {
    return mockMenuItems;
  },
  deleteOne: async (filter: any) => {
    const index = mockMenuItems.findIndex((item) => item._id === filter._id);
    if (index !== -1) {
      mockMenuItems.splice(index, 1);
      return { deletedCount: 1 };
    }
    return { deletedCount: 0 };
  },
};

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    if (await isAdmin()) {
      const data = await req.json();
      const menuItem = mongoURI === "mongodb://localhost:27017/dummydb"
        ? await mockMenuItemModel.create(data)
        : await MenuItem.create(data);

      return NextResponse.json(menuItem);
    }
    return NextResponse.json({});
  } catch (err: any) {
    return NextResponse.json(err);
  }
}

export async function PUT(req: NextRequest) {
  try {
    await connectDB();

    if (await isAdmin()) {
      const { _id, ...data } = await req.json();
      const updatedMenuItem = mongoURI === "mongodb://localhost:27017/dummydb"
        ? await mockMenuItemModel.findByIdAndUpdate({ _id }, data, { new: true })
        : await MenuItem.findByIdAndUpdate({ _id }, data, { new: true });

      return NextResponse.json(updatedMenuItem);
    }
    return NextResponse.json({});
  } catch (err: any) {
    return NextResponse.json(err);
  }
}

export async function GET() {
  await connectDB();

  const menuItems = mongoURI === "mongodb://localhost:27017/dummydb"
    ? await mockMenuItemModel.find()
    : await MenuItem.find();

  return NextResponse.json(menuItems);
}

export async function DELETE(req: NextRequest) {
  try {
    await connectDB();

    if (await isAdmin()) {
      const url = new URL(req.url);
      const _id = url.searchParams.get("_id");
      const deleteResult = mongoURI === "mongodb://localhost:27017/dummydb"
        ? await mockMenuItemModel.deleteOne({ _id })
        : await MenuItem.deleteOne({ _id });

      return NextResponse.json(deleteResult);
    }
    return NextResponse.json(true);
  } catch (err) {
    return NextResponse.json(err);
  }
}
