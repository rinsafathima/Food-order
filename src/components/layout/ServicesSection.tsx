'use client';
import { DietFoodIcon } from '@/icons/DietFoodIcon';
import { PizzaIcon } from '@/icons/PizzaIcon';
import { ScooterIcon } from '@/icons/ScooterIcon';
import { SectionProps } from '@/types/SectionProps';
import { motion } from "framer-motion";

const ServicesSection = ({ className }: SectionProps) => {
  return (
    <section className={`bg-black text-dark ${className} mt-100 mb-100`}>
      <div className='container py-12'>
        <div className="max-w-4xl text-center mx-auto mb-10">
          <h1 className="font-nanum font-bold text-3xl md:text-4xl lg:text-5xl text-gray-100 mb-4 mt-8">
            WHAT WE <span className="text-primary">DO?💭</span>
          </h1>
          <p className='font-nanum text-xl md:text-2xl text-gray-100'>
            From swift and reliable delivery to a diverse selection of healthy food options and authentic original recipes,
            we&apos;ve crafted a seamless experience for your pizza cravings.
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {/** Service Card */}
          {[
            {
              icon: <DietFoodIcon className={'w-16'} />,
              title: "Healthy Food",
              description: "Savor the goodness of guilt-free indulgence with our Healthy Food options, crafted to bring you a perfect blend of nutritious ingredients without compromising on flavor."
            },
            {
              icon: <ScooterIcon className={'w-16'} />,
              title: "Fast Delivery",
              description: "Experience the unbeatable convenience of Fast Delivery as we bring the piping hot perfection of our pizzas straight to your doorstep."
            },
            {
              icon: <PizzaIcon className={'w-16'} />,
              title: "Original Recipes",
              description: "Delight your taste buds with the authenticity of our Original Recipe pizzas, where every slice is a celebration of timeless flavors and culinary expertise."
            }
          ].map((service, index) => (
            <div key={index} className='flex flex-col items-center gap-3 text-center p-6'>
              <div className="flex items-center justify-center mb-5">
                <motion.span
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 225, transition: { duration: 1, ease: 'easeInOut' } }}
                  className='w-[100px] h-[100px] border border-dark/20 flex justify-center items-center hover:bg-light relative'
                >
                  {/* Placeholder for hover effect */}
                </motion.span>
                <span className='absolute'>{service.icon}</span>
              </div>
              <h3 className='font-nanum font-semibold uppercase mb-4 text-gray-100'>{service.title}</h3>
              <div className='font-nanum text-gray-100 text-center'>
                {service.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

