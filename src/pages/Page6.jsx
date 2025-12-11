import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../pagesCss/page6.css'

gsap.registerPlugin(ScrollTrigger);

const Page6 = () => {
  const leftSideRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    // Animate left side
    gsap.fromTo(leftSideRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: leftSideRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Animate form
    gsap.fromTo(formRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:uday92689@gmail.com?subject=${subject}&body=${body}`;
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      <div className="page6-main">
        
        <div className="contact-container">
          
          {/* Left Side - Message */}
          <div className="left-side" ref={leftSideRef}>
            <div className="contact-message">
              <h1>Let's <span id='color'>create</span></h1>
              <h1>something</h1>
              <h1 id='color'>extraordinary</h1>
              <h1>together<span className="green-dot">.</span></h1>
              
              <p className="impact-text">Let's make an impact</p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="right-side" ref={formRef}>
            <div className="contact-form-container">
              <h2>Get In Touch</h2>
              <p>Ready to start a project or just want to chat? Send me a message!</p>
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">
                  Send Message
                  <span className="arrow">↗</span>
                </button>
              </form>
              
              <div className="contact-info">
                <p>Or reach me directly at:</p>
                <a href="mailto:uday92689@gmail.com" className="email-link">
                  uday92689@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        

      </div>
      <div className="footer">
          <p>created by uday with ❤️&🍵</p>
        </div>
    </>
  )
}

export default Page6