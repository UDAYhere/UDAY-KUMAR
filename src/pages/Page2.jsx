import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../pagesCss/page2.css'

const Page2 = () => {
  const objectRef = useRef(null);
  const cardRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const animateObject = () => {
      gsap.to(objectRef.current, {
        borderRadius: `${gsap.utils.random(50, 80)}% ${gsap.utils.random(60, 100)}% ${gsap.utils.random(50, 90)}% ${gsap.utils.random(60, 100)}%`,
        duration: gsap.utils.random(1, 1),
        ease: 'sine.inOut',
        onComplete: animateObject
      });
    };

    animateObject();

  
   
  }, []);

  return (
    <>
      <div className="page2-main">
        <div className="object" ref={objectRef}></div>
        <div className="overly"></div>

        <div className="page2-content">

          {/* Profile Card */}
          <div className="profile-card">
            <div className="profile-image">
              <img src="/3.jpg" alt="Uday Kumar" />
            </div>
            <div className="profile-info">
              <h3>Uday Kumar</h3>
              <p>Associate Software Engineer</p>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/-uday-kumar" target="_blank" rel="noopener noreferrer">
                  <span>LI</span>
                </a>
                <a href="https://www.instagram.com/uday.here_" target="_blank" rel="noopener noreferrer">
                  <span>IN</span>
                </a>
                <a href="https://github.com/UDAYhere" target="_blank" rel="noopener noreferrer">
                  <span>GH</span>
                </a>
                
              </div>
              <div className="social-icons a">
                <a href="https://leetcode.com/u/6Zxr5eWm77/" target="_blank" rel="noopener noreferrer">
                  <span>LE</span>
                </a>
                <a href="https://www.hackerrank.com/profile/uday92689" target="_blank" rel="noopener noreferrer">
                  <span>HR</span>
                </a>
                {/* <a href="https://github.com/UDAYhere" target="_blank" rel="noopener noreferrer">
                  <span></span>
                </a> */}
                
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="main-content">
            <div className="intro-title" >
              <h1>I'm <span className="name-highlight">Uday Kumar</span></h1>
              <h1>a <span className="role-badge">Full-Stack Developer</span></h1>
              <h1>from <span className="location-badge">Punjab IN</span></h1>
            </div>

            <div className="experience-text">
              <p>"Always learning, Always Building"</p>
            </div>

            <div className="description" ref={descRef}>
              <p>Associate Software Engineer at H&R Block specializing in full-stack development, problem-solving, and building scalable applications.</p>
            </div>

            <a href="/cv_uday_kumar.pdf" download className="cta-button" >
              My Resume
              <span className="arrow">↗</span>
            </a>
          </div>

        </div>
      </div>
    </>
  )
}

export default Page2
