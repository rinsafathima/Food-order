import { ClockIcon } from '@/icons/ClockIcon';
import { FaceBookIcon } from '@/icons/FaceBookIcon';
import { InstaIcon } from '@/icons/InstaIcon';
import { LocationIcon } from '@/icons/LocationIcon';
import { PhoneIcon } from '@/icons/PhoneIcon';
import { TwitterIcon } from '@/icons/TwitterIcon';
import { SectionProps } from '@/types/SectionProps';
import { Button } from '@nextui-org/react';
import Link from 'next/link';

const BusinessInfo = ({ className }: SectionProps) => {
  return (
    <section 
      className={`${className} mt-24 mb-24 py-12`} 
      style={{
        backgroundImage: 'radial-gradient(circle, #D91A20 1px, transparent 1px)', // Dot pattern
        backgroundSize: '30px 30px', // Adjust size for larger space between dots
        backgroundColor: 'white',  // Set background color
        minHeight: '500px',        // Increase the height of the section
        padding: '50px 0',         // Add more vertical padding for content spacing
      }}
    >
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-4'>
        {/* Info Boxes */}
        <div className='col-span-2 py-8'>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-8'>
            {/* Box 1 */}
            <div 
              className='flex flex-col items-center justify-center bg-gray-800 p-6 rounded-lg shadow-md mx-4 my-2 
                         transform hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out'
            >
              <PhoneIcon className={'w-10 fill-primary mb-2'} />
              <p className='font-nanum text-lg font-semibold'>(12) 345 678 910</p>
              <p className='text-gray-400 font-nanum'>Call us now!</p>
            </div>
            {/* Box 2 */}
            <div 
              className='flex flex-col items-center justify-center bg-gray-800 p-6 rounded-lg shadow-md mx-4 my-2 
                         transform hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out'
            >
              <LocationIcon className={'w-10 stroke-primary mb-2'} />
              <p className='font-nanum text-lg font-semibold'>132, My Street</p>
              <p className='text-gray-400 font-nanum'>Kingston</p>
            </div>
            {/* Box 3 */}
            <div 
              className='flex flex-col items-center justify-center bg-gray-800 p-6 rounded-lg shadow-md mx-4 my-2 
                         transform hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out'
            >
              <ClockIcon className={'w-10 stroke-primary mb-2'} />
              <p className='font-nanum text-lg font-semibold'>Open Monday-Friday</p>
              <p className='text-gray-400 font-nanum'>8:00am - 9:00pm</p>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className='bg-gray-800 text-center flex justify-center items-center flex-col p-4 rounded-lg shadow-md mx-2 my-1'>
          <Button 
            as={Link} 
            href='https://twitter.com' 
            className='bg-transparent transform hover:scale-110 transition duration-300 ease-in-out' 
            startContent={<TwitterIcon className={'w-8 fill-white'} />} 
          />
          <Button 
            as={Link} 
            href='https://facebook.com' 
            className='bg-transparent transform hover:scale-110 transition duration-300 ease-in-out' 
            startContent={<FaceBookIcon className={'w-8 fill-white'} />} 
          />
          <Button 
            as={Link} 
            href='https://instagram.com' 
            className='bg-transparent transform hover:scale-110 transition duration-300 ease-in-out' 
            startContent={<InstaIcon className={'w-8 stroke-white'} />} 
          />
        </div>
      </div>
    </section>
  );
};

export default BusinessInfo;



