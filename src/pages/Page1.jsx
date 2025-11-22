import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../pagesCss/page1.css'

const Page1 = () => {

  const imgRef = useRef(null);
  const lefth1 = useRef(null);
  const lefth2 = useRef(null);
  const videoRef = useRef(null);
  
  useEffect(() => {
    // Slow down video playback
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      lefth1.current,
      { x: -200, opacity: 0, scale: 0.8 },
      { x: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'back.out(1.2)' },
      0.3
    )
    .fromTo(
      lefth2.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 },
      0.6
    )
    .fromTo(
      imgRef.current,
      { scale: 1.6, opacity: 0, x: 150 },
      { scale: 1, opacity: 1, x: 0, duration: 1, ease: 'power2.out' },
      0.5
    );
  }, []);

  return (
   <>
   <div className="page1-main">
    <video ref={videoRef} autoPlay loop muted playsInline className="video-background">
      <source src="/bg.mp4" type="video/mp4" />
    </video>
    {/* <div className="signature">
      Uday Kumar
    </div> */}
    <div className="box1">
        <b ref={lefth1}>hello</b>
        <h1 ref={lefth2}>- I'm Uday Kumar <br /> <br />
          "A developer who brings your imagination to life" <br /> <br />
          &nbsp;<i>&nbsp;&nbsp;I'm a programmer &nbsp;&nbsp;</i>&nbsp;<u>I write code</u></h1>

    </div>

    <div className="box2">
        <img ref={imgRef} src="/1.png" alt="myimage" />
    </div>
   </div>
   </>
  )
}

export default Page1
