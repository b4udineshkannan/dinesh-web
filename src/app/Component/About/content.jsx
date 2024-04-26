"use client"

import Image from "next/image";

const Content = () => {





    return (
        <div className='w-full ml-auto mr-auto absolute top-32 lg:top-52' >
            <div className='container mx-auto px-5 lg:px-10'>
                <div className='md:flex  md:flex-row  lg:gap-60 flex-1 '>
                    <div className='lg:flex flex-col flex-1 text-center inline-block mb-10 lg:mb-0'>
                        <Image
                            src={"/Intro/Logo/skills.png"}
                            alt='intro'
                            width={450}
                            height={206}
                            className='w-[150px] lg:w-[340px] h-[auto] relative left-16 lg:left-0'
                        />
                    </div>
                    <div className='flex flex-col flex-1'>
                        <div className="text-[#fff] text-xl font-[600] mb-4 text-center lg:text-left cl">
                            <h1>ABOUT ME</h1>
                        </div>

                        <div className='text-white text-xl font-[500] lg:text-3xl lg:leading-tight relative'>
                            <h2>Front-end Developer <br />based in Tamilnadu, India
                               </h2>
                      
                        </div>
                        <div className='text-white text-sm text-left lg:leading-9 lg:text-base mt-2 lg:mt-5 '>
                            <p>Hii, my name is Sundar, and Im a Frontend Developer. My 
                                passion is to create and develop a clean UI/UX.</p>
                        </div>
                        <div className='text-white text-sm text-left lg:leading-9 lg:text-base mt-2 lg:mt-5 '>
                            <p>My main stack currently is React/Next.js in combination with Tailwind CSS </p>
                        </div>
                    
                    </div>


                </div>
            </div>


        </div>
    );
}

export default Content;
