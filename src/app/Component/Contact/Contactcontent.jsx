import React from 'react';
import Image from 'next/image';
import "./contact.css"

const Contactcontent = () => {
    return (
        <div className='w-full ml-auto mr-auto absolute top-32 lg:top-52' >
            <div className='container mx-auto px-5 lg:px-10'>
                <div className='md:flex  md:flex-row  lg:gap-60 flex-1 '>
                    <div className='lg:flex flex-col flex-1 text-center inline-block mb-10 lg:mb-0'>
                        <Image
                            src={"/Intro/Logo/Location.png"}
                            alt='intro'
                            width={450}
                            height={206}
                            className='w-[150px] lg:w-[440px] h-[auto] relative left-16 lg:left-0 rotating'
                        />
                    </div>
                    <div className='flex flex-col flex-1'>
                        <div className="text-[#fff] text-xl font-[600] mb-4 text-center lg:text-left">
                            <h1>CONTACT</h1>
                        </div>

                        <div className='text-white text-xl font-[400] lg:text-xl lg:leading-tight relative mb-2'>
                            <h2 className='font-[600]'>Address</h2>
                            <div className='text-white text-sm text-left lg:leading-9 lg:text-base mt-2 lg:mt-3 '>
                            <p>3/28 Silattur POST, Aranthangi TALUK, <br />
                            Pudukkottai DISTRICT , Tamil Nadu - 614622
                            </p>
                        </div>
                        </div>
                        <div className='text-white text-xl font-[400] lg:text-xl lg:leading-tight relative  mb-2'>
                            <h2 className='font-[600]'>Phone</h2>
                            <div className='text-white text-sm text-left lg:leading-9 lg:text-base mt-2 lg:mt-3 '>
                            <p>+91 9655608252</p>
                        </div>
                        </div>
                        <div className='text-white text-xl font-[400] lg:text-xl lg:leading-tight relative  mb-2 '>
                            <div className='flex items-center gap-2'>
                            <div>
                            <Image 
                           src={"/Intro/Logo/email.png"} 
                           alt='email' 
                           width={50}
                           height={50}
                           className='w-[25px] h-[25px] inline-block'
                           />
                            </div>
                            <div><h2 className='font-[600]'>Email</h2></div>
                            </div>
                            <div className='text-white text-sm text-left lg:leading-9 lg:text-base mt-2 lg:mt-3 '>
                            <p>sundarsk823@gmail.com</p>
                        </div>
                        </div>
                    
                    </div>


                </div>
            </div>


        </div>
    );
}

export default Contactcontent;
