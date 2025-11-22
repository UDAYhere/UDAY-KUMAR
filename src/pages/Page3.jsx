import '../pagesCss/page3.css'


const Page3 = () => {
  return (
    <>
    <div className="page3-main">
        <div className="title">
          <div className="marquee-content">
            <span><b> ⏺ </b>PROJECTS</span>
            <span><b> ⏺ </b>Projects</span>
            <span><b> ⏺ </b>projects</span>
            <span><b> ⏺ </b>PROJECTS</span>
            <span><b> ⏺ </b>Projects</span>
            <span><b> ⏺ </b>projects</span>
            <span><b> ⏺ </b>PROJECTS</span>
            <span><b> ⏺ </b>Projects</span>
            <span><b> ⏺ </b>projects</span>
          </div>
          <div className="marquee-content">
            <span><b> ⏺ </b>PROJECTS</span>
            <span><b> ⏺ </b>Projects</span>
            <span><b> ⏺ </b>projects</span>
            <span><b> ⏺ </b>PROJECTS</span>
            <span><b> ⏺ </b>Projects</span>
            <span><b> ⏺ </b>projects</span>
            <span><b> ⏺ </b>PROJECTS</span>
            <span><b> ⏺ </b>Projects</span>
            <span><b> ⏺ </b>projects</span>
          </div>
        </div>
        <div className="project-card-main">
            <div className="project-card">

                <div className="box1">
                    <div className="box1text">
                        <h2>- Steganography Web App</h2>
                        <h3>Steganography + Cryptography</h3>
                        <h4>Combination of both for message hiding via passowrd or without</h4>
                    </div>
                    <a href="https://github.com/UDAYhere/steg-app" target="_blank" rel="noopener noreferrer" className="image">
                        <img src="steg.png" alt="" />
                    </a>
                </div>
                <div className="box2">
                    <div className="box1text">
                        <h2>- E learning website</h2>
                        <h3>Your's Adhayapaka</h3>
                        <h4>Implementing the react concepts and building my own e-learning platform</h4>
                    </div>
                    <a href="https://github.com/UDAYhere/Your-s-Adhayapaka" target="_blank" rel="noopener noreferrer" className="image">
                        <img src="ya1.png" alt="" />
                    </a>
                </div>
                </div> 
        </div>

        <div className="project-card-main1">
            <div className="project-card">

                <div className="box3">
                    <div className="box1text">
                        <h2>- Data Analytics</h2>
                        <h3>OLA Data Analysis</h3>
                        <h4>Analyzing the raw data using tools like Python, MySQL and PowerBI </h4>
                    </div>
                    <a href="https://github.com/UDAYhere/OLA-Data-Analytics" target="_blank" rel="noopener noreferrer" className="image">
                        <img src="ola.png" alt="" />
                    </a>
                </div>
                <div className="box4">
                    <div className="box1text">
                        <h2>- Console Based AI Assistant</h2>
                        <h3>CODE-KARE</h3>
                        <h4>Coding buddy to help me with my codes and projects</h4>
                    </div>
                    <a href="https://github.com/UDAYhere/CODE-kare" target="_blank" rel="noopener noreferrer" className="image">
                        <img src="ai.png" alt="" />
                    </a>
                    
                </div>
                <div className="box5">
                    <a href="https://github.com/UDAYhere" target="_blank" rel="noopener noreferrer" className="more">
                       View all projects <span id='moreArrow'> ↗</span>
                    </a>
                </div>
                </div> 
        </div>
       
        
    </div>
    </>
  )
}

export default Page3