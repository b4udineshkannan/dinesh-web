import React from 'react';
import Image from 'next/image';
import "./contact.css"

const Contactcontent = () => {
    return (
        <>
        
        <div className='flex flex-wrap -mx-4'>
                    <div className='w-full items-center md:w-2/4 w-[100%] md:h-[100vh] flex-auto px-4 ver-cen'>
                    <Image
                            src={"/Intro/Logo/Location.png"}
                            alt='intro'
                            width={450}
                            height={206}
                            className='max-w-sm DCimg relative rotating'
                        />
                   
                       
                    </div>
                    <div className='w-full md:w-2/4 md:h-[100vh] flex-auto ver-cen'>
                        <div className="text-white conadd-inner-dev">
                    <div className="mb-4">
                            <h2 className='font-h2-lg'>CONTACT</h2>
                        </div>

                      
                        <div className='mt-4'>
                            <h2 className='Subtitle'>Address</h2>
                            <div className='mt-2 lg:mt-3 '>
                            <p>3/28 Silattur POST, Aranthangi TALUK, <br />
                            Pudukkottai DISTRICT , Tamil Nadu - 614622
                            </p>
                        </div>
                        </div>
                   
                        <div className='relative  mt-4'>
                            <h2 className='Subtitle'>Phone</h2>
                            <div className='mt-2 lg:mt-3 '>
                            <p><a className='underline hover:text-[#ffb92c]' href="tel:+91 9487658225">+91 9487658225</a></p>
                        </div>
                        </div>
                    
                        <div className='mt-4 '>
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
                            <div><h2 className='Subtitle'>Email</h2></div>
                            </div>
                            <div className='mt-2 lg:mt-3'>
                            <p><a className='underline hover:text-[#ffb92c]' href="mailto:b4udineshkannan@gmail.com">b4udineshkannan@gmail.com</a></p>
                        </div>
                        </div>
<div className='mt-5 lg:mt-7 flex gap-3'>
    <a href="https://www.linkedin.com/in/r-dinesh-kannan-9a262b140/" target='_blank'>
                        <Image
                                src={"/Intro/Logo/linked-in.svg"}
                                width={25}
                                height={25}
                                alt='html'
                                className='lg:w-[25px] w-[25px] h-auto'
                            />
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=919487658225&amp;text=Hi!  Dinesh Kannan for job Enquiry" target='_blank'>
                        <Image
                                src={"/Intro/Logo/whatsapp.svg"}
                                width={25}
                                height={25}
                                alt='html'
                                className='lg:w-[25px] w-[25px] h-auto'
                            />
                            </a>
                           
                            </div>
                        </div>
                    </div>


                </div>
     
        </>
    );
}

export default Contactcontent;
