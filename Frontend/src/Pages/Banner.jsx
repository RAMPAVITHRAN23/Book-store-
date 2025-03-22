import React from 'react';
import banner from "./../assets/banner.png"

const Banner = () => {
    return (
        <div className='flex flex-col items-center justify-between px-6 py-8 md:flex-row'>
            {/* Left side */}
            <div className='max-w-lg'>
                <h2 className="text-xl font-semibold sm:text-xl md:text-2xl lg:text-3xl font-Open text-[#0D0842]">
                    New Releases This Week Are
                </h2>
                <p className='mt-2 mb-10 text-sm text-gray-700 md:text-base'>
                    It's time to update your reading list with some of the latest
                    and greatest releases in the literary world.
                    From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone.
                </p>
                <div className="mt-4">
                    <button className="px-4 py-2 text-black rounded bg-[#FFCE1A] text-center hover:bg-[#0D0842] hover:text-white 
                transition duration-300 cursor-pointer">
                        Subscribe
                    </button>
                </div>
            </div>
            {/* Right side */}
            <div className='max-w-lg gap-4 py-6'>
                <img src={banner} alt="Book Cover" className="w-full h-auto rounded-lg" />
            </div>
        </div>
    );
};

export default Banner;
