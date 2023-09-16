import React from 'react';
import './work.css';
import py from '../../assets/python.png';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import boot from '../../assets/boot.png';
import js from '../../assets/js.png';
import react from '../../assets/react.png';
import sql from '../../assets/sql.png';
import java from '../../assets/java.png';
import dsa from '../../assets/dsa.png';
import opp from '../../assets/opps.jpeg';
import ps from '../../assets/ps.png';
import git from '../../assets/git.png';
import dbms from '../../assets/dbms.png';

const Work = () => {
  return (
    <section id="work">
      <h2 className="workTitle">Skills</h2>
      <div className="works">
        <h2>Technical Skills-</h2>
        <div className="workBoxes">
          <div className="workBox">
            <div className="workText">
              <img src={py} alt="logo" className="workImg" />
              <h3 className="workContent">Python</h3>
            </div>
          </div>
          <div className="workBox">
            <div className="workText">
              <img src={html} alt="logo" className="workImg" />
              <h3 className="workContent">HTML</h3>
            </div>
          </div>
          <div className="workBox">
            <div className="workText">
              <img src={css} alt="Logo" className="workImg" />
              <h3 className="workContent">CSS</h3>
            </div>
          </div>
          <div className="workBox">
            <div className="workText">
              <img src={boot} alt="Logo" className="workImg" />
              <h3 className="workContent">Bootstrap</h3>
            </div>
          </div>
          <div className="workBox">
            <div className="workText">
              <img src={js} alt="Logo" className="workImg" />
              <h3 className="workContent">Javascript</h3>
            </div>
          </div>
          <div className="workBox">
            <div className="workText">
              <img src={react} alt="Logo" className="workImg" />
              <h3 className="workContent">React</h3>
            </div>
          </div>
          <div className="workBox">
            <div className="workText">
              <img src={sql} alt="Logo" className="workImg" />
              <h3 className="workContent">SQL</h3>
            </div>
          </div>
          <div className="workBox">
            <div className="workText">
              <img src={java} alt="Logo" className="workImg" />
              <h3 className="workContent">Java</h3>
            </div>
          </div>
          <div className="workBox">
            <div className="workText">
              <img src={dsa} alt="Logo" className="workImg" />
              <h3 className="workContent">Data Structure and Algorithms</h3>
            </div>
          </div>
          <div className="workBox">
            <div className="workText">
              <img src={opp} alt="Logo" className="workImg" />
              <h3 className="workContent">Object Oriented Programming</h3>
            </div>
          </div>
          <div className="workBox">
            <div className="workText">
              <img src={ps} alt="Logo" className="workImg" />
              <h3 className="workContent">Problem Solving</h3>
            </div>
          </div>
          <div className="workBox">
            <div className="workText">
              <img src={git} alt="Logo" className="workImg" />
              <h3 className="workContent">Git and Github</h3>
            </div>
          </div>
          <div className="workBox">
            <div className="workText">
              <img src={dbms} alt="Logo" className="workImg" />
              <h3 className="workContent">Database Management System</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
