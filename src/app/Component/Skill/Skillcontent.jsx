import React from 'react';
import Image from 'next/image';

const Skillcontent = () => {
    return (
        <div className='w-full ml-auto mr-auto absolute top-32 lg:top-52' >
        <div className='container mx-auto px-5 lg:px-10'>
            <div className='flex flex-col-reverse  md:flex-row  lg:gap-60 flex-1 '>
               
                <div className='flex flex-col flex-1'>
                    {/* <div className="text-[#fff] mb-4 text-center lg:text-left">
                        <h1></h1>
                    </div> */}

                    <div className='text-white text-xl font-[600] lg:text-3xl lg:leading-tight relative'>
                        <h2>SKILLS </h2>
                  
                    </div>
                    <div className='text-white text-sm text-left lg:leading-9 lg:text-base mt-2 lg:mt-5 '>
                        <p>Explore techniques for optimizing React performance, including memoization and lazy loading.</p>
                    </div>
                    <div className='text-white text-sm text-left lg:leading-9 lg:text-base mt-2 lg:mt-5 '>
                        <p>State Management ,Styling and Design,Performance Optimization</p>
                    </div>
                  
                    <div className='text-white text-sm text-left lg:leading-9 lg:text-base mt-2 lg:mt-2 '>
                        <p>Develop soft skills such as effective communication, problem-solving, and collaboration, which are essential for working in a team environment and interacting with clients and stakeholders.</p>
                    </div>
                
                </div>

                <div className='lg:flex flex-col flex-1 text-center inline-block mb-10 lg:mb-0'>
                    <Image
                        src={"/Intro/Logo/about.png"}
                        alt='intro'
                        width={450}
                        height={206}
                        className='w-[150px] lg:w-[360px] h-[auto] relative left-16 lg:left-0'
                    />
                </div>

            </div>
        </div>


    </div>
    );
}

export default Skillcontent;
