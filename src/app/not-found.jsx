import Image from "next/image"

const notfound = () => {
    return (
     <>
     <div className='notfoundCss'>
       
   <Image  src={"/Intro/yalantis-interactive-404.gif"}
                            alt='intro'
                            width={450}
                            height={206}
                            className='h-screen w-full'/>
    </div>
     </>
    )
  }
  
  export default notfound