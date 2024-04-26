import CustomComponent from "@/app/CustomComponent";

import Navbar from "./Navbar/Navbar";
import Scroll from "./scroll/Scroll";


export default function Home() {


  return (
  <>
  <div className="main-wrapper">
   <video  className="bg-video fixed top-0 bottom-0 object-cover h-[100vh] w-[100%] "
                    autoPlay
                    muted
                    playsInline
                    loop
                    preload="auto"
                >
                    <source
                        src="/Intro/new-comp.mp4"
                        type="video/mp4"
                    />
                    <source
                        src="/Intro/webm.webm"
                        type="video/webm"
                    />
                </video>
                <div className="absolute top-0 left-0 right-0 bg-[#00000083]">

                <div className="container mx-auto">
  <Scroll/>
  <Navbar />
 <CustomComponent/>
  </div>
  </div>
  </div>
  </>
  );
}
