
import Image from 'next/image'
import React from 'react'

const loading = () => {
  return (
    <>
   <div className='loaderCss'>
   <Image  src={"/public/Intro/yalantis-interactive-404.gif"}
                            alt='intro'
                            width={450}
                            height={206}
                            className='h-screen DCimg'/>
    <h2>loading</h2></div>
    </>
  )
}

export default loading


