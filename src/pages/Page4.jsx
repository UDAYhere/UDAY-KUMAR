import '../pagesCss/page4.css'

const Page4 = () => {
  const skills = [
    { name: 'C++', percentage: 85 },
    { name: 'Java', percentage: 65 },
    { name: 'JavaScript', percentage: 85 },
    { name: 'DSA', percentage: 75 },
    { name: 'Git', percentage: 85 },
    { name: 'CSS', percentage: 90 },
    { name: 'React', percentage: 75 },
    { name: 'SQL Database', percentage: 85 },
    { name: 'MongoDB', percentage: 75 },
    { name: 'React Native', percentage: 65 },
    { name: 'Node.js', percentage: 70 },
    { name: 'Express.js', percentage: 70 },
    { name: 'GSAP/Locomotive/Lenis', percentage: 70 },
    { name: 'Docker', percentage: 70 },
    { name: 'n8n', percentage: 65 }
  ];

  return (
    <>
    <div className="page4-main">
        <div className="title">
          <div className="marquee-content">
            <span><b> ⏺ </b>THINGS I'M GOOD AT</span>
            <span><b> ⏺ </b>Things I'm Good At</span>
            <span><b> ⏺ </b>things i'm good at</span>
            <span><b> ⏺ </b>THINGS I'M GOOD AT</span>
            <span><b> ⏺ </b>Things I'm Good At</span>
            <span><b> ⏺ </b>things i'm good at</span>
            <span><b> ⏺ </b>THINGS I'M GOOD AT</span>
            <span><b> ⏺ </b>Things I'm Good At</span>
            <span><b> ⏺ </b>things i'm good at</span>
          </div>
          <div className="marquee-content">
            <span><b> ⏺ </b>THINGS I'M GOOD AT</span>
            <span><b> ⏺ </b>Things I'm Good At</span>
            <span><b> ⏺ </b>things i'm good at</span>
            <span><b> ⏺ </b>THINGS I'M GOOD AT</span>
            <span><b> ⏺ </b>Things I'm Good At</span>
            <span><b> ⏺ </b>things i'm good at</span>
            <span><b> ⏺ </b>THINGS I'M GOOD AT</span>
            <span><b> ⏺ </b>Things I'm Good At</span>
            <span><b> ⏺ </b>things i'm good at</span>
          </div>
        </div>

        <div className="page4-content">
            <div className="page4-box1">
                <h1>MY <b>SKILLS</b> AND</h1>
                <h1>SPECIALIZATIONS</h1>
                 <i id="gap">"Computer programming is not just my profession, it's my </i>
                <i>passion. Striving to do my best on every project, I always</i>
                <i>try to go one step beyond, and expand my knowledge."</i>
            </div>
            
            <div className="page4-box2">
              {skills.slice(0, 8).map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="page4-box3">
              {skills.slice(8).map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
    </div>
    </>
  )
}

export default Page4
