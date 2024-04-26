import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

const Myself = () => {
    return (
        <div className='w-full ml-auto mr-auto absolute top-36 lg:top-52 ' >
            <div className='container mx-auto px-5 lg:px-10'>
                <div className='flex flex-col-reverse md:flex-row gap-10 lg:gap-60 flex-1 '>
                    <div className='flex flex-col flex-1'>
                        <div className='text-white text-3xl font-[600] lg:text-5xl lg:leading-tight relative'>
                            <h1>Front-End React <br /> Developer</h1>
                            <div>
                                <Image
                                    src={"/Intro/Logo/hand.png"}
                                    alt='Hand'
                                    width={60}
                                    height={60}
                                    className='lg:w-[50px] w-[30px] h-[auto] absolute lg:bottom-2 lg:left-[16rem] bottom-1 left-[10rem]'
                                />

                            </div>
                        </div>
                        <div className='text-white text-lg text-left lg:leading-9 lg:text-xl mt-2 lg:mt-5 '>
                            <p>Hi, I am Sundar. A passionate Front-end React
                                <br /> Developer based in Tamilnadu, India</p>
                        </div>
                        
                        <div className='mt-5 lg:mt-7 flex gap-5'>
                            <Image
                                src={"/Intro/Logo/html.svg"}
                                width={160}
                                height={60}
                                alt='html'
                                className='w-[70px] lg:w-[100px] h-[auto] '
                            />
                            <Image
                                src={"/Intro/Logo/react.svg"}
                                alt='react'
                                width={160}
                                height={60}
                                className='w-[70px] lg:w-[100px] h-[auto]  '
                            />
                             <Image
                                src={"/Intro/Logo/tailwind.svg"}
                                alt='react'
                                width={160}
                                height={60}
                                className='w-[70px] lg:w-[100px] h-[auto] '
                            />
                        </div>
                    </div>

                    <div className='lg:flex flex-col flex-1 text-center inline-block'>
                        <Image
                            src={"/Intro/Logo/introimg4.png"}
                            alt='intro'
                            width={450}
                            height={206}
                            className='w-[150px] lg:w-[340px] h-[auto] relative left-16 lg:left-0'
                        />
                    </div>
                </div>
            </div>
            {/* <div className='hidden md:block p-6 relative top-20 '>
                <Marquee
                pauseOnHover
                className='cursor-pointer ' 
                >
                <h2 className='text-white font-[700] text-lg'>
                    <span className='text-2xl ml-3'>CAREER OBJECTIVE :</span> An organized smart working individual who can work 
                    underpressure seeking an entry level position to begin my career and
                    to expand my learning and knowledge and to grow my skills.
                </h2>
                </Marquee>
            </div> */}
            
        </div>
    );
}

export default Myself;
