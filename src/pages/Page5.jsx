import React from 'react'
import '../pagesCss/page5.css'

const Page5 = () => {
  return (
    <>
    <div className="page5-main">
     
        <h1 className="page5-title">My <b>Journey</b></h1>

        <div className="job">

          <div className="time">Current</div>
          
          <div className="subject">
            <img src="/handr.png" alt="" /> <b> H&R Block </b>
            <p>Assosiate Software Engineer</p>
            <div className="content">
              <p> <img src="a.png" alt="" />Joined H&R Block in 2026</p>
              <p> <img src="a.png" alt="" />Contribution in growth of Organization and as a Developer </p>
              <p> <img src="a.png" alt="" />Building things that stand out's</p>
            </div>
          </div>
          {/* <div className="content">Assosiate Software Engineer</div> */}
          
        </div>
        
        <div className="education">
          <div className="time">2 years</div>
          
          <div className="subject">
            <img src="/lpu2.jpg" id='lpu' alt="" /> <b>  </b>
            <p>Master of Computer Apllications (MCA)</p>
            <div className="content">
              <p> <img src="a.png" alt="" />Joined LPU for my Master's in session 2024-2026</p>
              <p> <img src="a.png" alt="" />Participated in Hackathon's events and Coding Competition's </p>
              <p> <img src="a.png" alt="" />Explored fields like: Software Engineering, Data Analysis, Cyber Security</p>
            </div>
            
          </div>
        </div>
        
        <div className="education"><div className="time">3years</div>
          
          <div className="subject">
            <img src="/MLU-DAV.png" alt="" id='mlu' /> <b>Mohan Lal Uppal DAV college<b id='gndu'>(GNDU)</b> </b>
            <p>Bachelor of Computer Applications (BCA)</p>
            <div className="content">
              <p> <img src="a.png" alt="" />Started my BCA journey in 2021, where my interest in computer science took shape</p>
              <p> <img src="a.png" alt="" />I learned about computer fundamentals, networking, and operating systems </p>
              <p> <img src="a.png" alt="" />Building the foundation for my technical career</p>
            </div>
          </div></div>
      

    </div>
    </>
  )
}

export default Page5