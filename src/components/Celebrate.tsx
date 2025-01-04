import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import celebrateImage from '../../public/images/celebrate.jpg'

const Celebrate: React.FC = () => {
	return (
    <div className="max-w-screen-2xl w-full flex p-4 lg:flex-col md:p-8 lg:p-20 xl:pb-32">
      <div className='flex flex-col md:flex-row gap-16 bg-purple-300 w-full p-10 md:p-16 rounded-3xl'>
        <div className="flex-1 flex md:justify-start justify-center">
          <Image
            src={celebrateImage}
            alt="cake"
            className='rounded-tr-3xl rounded-bl-3xl w-[320px] md:w-[450px]'
          />
        </div>
        <div className="flex flex-col flex-1 gap-10 justify-center ">
          <h2 className="font-[family-name:var(--font-marck-script)] text-3xl lg:text-5xl text-purple-900">
            Make every celebration memorable with joy!
          </h2>
          
          <div className='flex flex-col gap-2'>
            <p>Make every celebration more enjoyable.</p>
            <p>Make it more memorable with a smile.</p>
            <p>Make it much happier with a Asuncion&apos;s Purplehub.</p>
          </div>
          
          <Link href="/contact" className='w-fit'>
            <button className="py-2 px-4 bg-purple-950 hover:bg-purple-800 text-white rounded">
              ORDER NOW
            </button>
          </Link>
        </div>
      </div>
    </div>
	);
};

export default Celebrate;
