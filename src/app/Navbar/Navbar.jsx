"use client"
import Link from 'next/link';
import "./Nav.css"
import Image from 'next/image';
import { gsap } from 'gsap';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';



const Navbar = () => {

    const router = useRouter();

    useEffect(() => {
        gsap.fromTo("#page2", {
            duration: 1,
            display: 'block',
            rotationY: 90,
            transformOrigin: "left center"
        }, {
            rotationY: 0,
            transformOrigin: "left center"
        });
    }, [router]);

    const [open, setOpen] = useState(false);


      const scroll = () =>{
    const hs3Element = document.querySelector('#Home');
    hs3Element.scrollIntoView({ behavior: 'smooth' });
   }


    return (
        <>
            <nav className='left-0 z-[999] w-full text-center ml-auto mr-auto fixed top-[30px]' >
                <div className='container mx-auto px-5 lg:px-10'>
                    <div className=" rounded-[20px] bgcl overflow-hidden">
                        <div className='flex justify-between py-2 lg:py-3 px-5 lg:px-10 z-[999] relative rounded-[20px]'>
                            <div id='page2'>
                                <Link href="#Home" onClick={scroll}>
                                    <div className='flex'>
                                        <Image
                                            src={"/Intro/Logo/logo3m.png"}
                                            alt={"Logo"}
                                            width={50}
                                            height={50}
                                            className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]"
                                            priority
                                        />
                                        <div className='hidden ml-2 lg:flex text-center justify-center items-center text-white text-2xl font-[700]'>
                                            <h1 className=''>Develop</h1>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className='lg:hidden flex items-center'>
                                <button onClick={() => { setOpen(!open) }}>
                                    <Image
                                        src={"/Intro/Logo/navs.png"}
                                        alt="nav"
                                        width={60}
                                        height={60}
                                        className='w-[30px] h-[auto]'
                                    />
                                </button>
                            </div>

                            <div className='hidden lg:flex items-center'>
                                <ul className='lg:flex lg:gap-10 text-[#fff] font-[500]'>

                                    <li>
                                        <Link 
                                        href="#About" 
                                        onClick={scroll}
                                        >About</Link>
                                    </li>
                                    <li>
                                        <Link href="#Skill">Skill</Link>
                                    </li>
                                    <li>
                                        <Link href="#Projects">Projects</Link>
                                    </li>
                                    <li>
                                        <Link href="#contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className={`hide ${open ? "show" : ""}`}>

                        </div>
                    </div>
                </div>
                <div className='fixed bottom-10 right-5 flex'>
                   {/* <div className='text-white '>
                    <h1>CV</h1>
                    </div> */}
                   <div>
                   <a href="/cv/Dinesh_new_2023 Resume.pdf" download>
                    <Image 
                    src={"/Intro/Logo/cv.png"} 
                    alt='cv' 
                    width={100} 
                    height={100} 
                    className='w-[50px] h-[auto] rounded-[100%] bg-[#000] rounded-full cbounce'
                    />
                    </a>
                    </div>
                </div>
            </nav>
        
        </>
    );
}

export default Navbar;
