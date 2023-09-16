import React from 'react'
import './intro.css';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';
const Intro = () => {
  return (
    
    <section id="intro">
      <div className="selfIntro">
        <span className="hello">Hello,</span><br />
        <span className="introText">I'm <span className="introName">Pranjal Sharma</span> <br />Website Designer</span>
        <p className="introPara">Recent graduate with a degree in Computer Science and Engineering, eager to apply classroom learning to real-world scenarios.<br />
          Enthusiastic about embracing challenges, collaborating with peers, and contributing to the success of a forward-looking organization.</p>
        <Link><button className="btn"><img src={btnImg} alt="button" className="btnImg"/>Hire Me</button></Link>
      </div>
      
    
    </section>
    

   
  );
}

export default Intro
