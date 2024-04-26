import React from 'react';
import ProjectContent from './ProjectContent';

const Projects = () => {
    return (
        <div className='relative' id='Projects'>
        <video
            className="object-cover h-[100vh] w-[100%] "
            autoPlay
            muted
            loop
            preload="metadata"
        >
            <source
                src="/Intro/webvideo2.mp4"
                type="video/mp4"
            />
        </video>
        <div className='absolute top-0 bottom-0 w-[100%] h-[100vh] bg-[#00000083]'></div>
      <ProjectContent/>
    </div>

    );
}

export default Projects;
