import React from 'react';
import Contactcontent from './Contactcontent';

const Contact = () => {
    return (
        <div className='relative' id='contact'>
        <video
            className="object-cover h-[100vh] w-[100%] "
            autoPlay
            muted
            loop
            preload="metadata"
        >
            <source
                src="/Intro/webvideo3.mp4"
                type="video/mp4"
            />
        </video>
        <div className='absolute top-0 bottom-0 w-[100%] h-[100vh] bg-[#00000083]'></div>
        <Contactcontent/>
    </div>
    );
}

export default Contact;
