import React from 'react';
import './skills.css';
import psit from '../../assets/Psit.png';
import kv from '../../assets/Kv.png';

const Skills = () => {
  return (
    <section id="skills">
        <h1 classname="skillTilte">EDUCATION</h1><br />
        <div className="skillBars">
            <div className="skillBar">
                <img src={psit} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Bachelor of technology- Computer Science</h2>
                    <p>Pranveer Singh Institute of Technology</p>
                    <p>2019-2023</p><br />
                    <p>CGPA: 8.64</p>
                </div>

            </div>
            <div className="skillBar">
                <img src={kv} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Intermediate</h2>
                    <p>Kendriya Vidyalaya No.2 Hindan Ghaziabad</p>
                    <p>2018-2019</p><br />
                    <p>Percentage : 69.50</p>
                </div>

            </div>
            <div className="skillBar">
                <img src={kv} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>High School</h2>
                    <p>Kendriya Vidyalaya AFS Naliya</p>
                    <p>2016-2017</p><br />
                    <p>CGPA : 9.6</p>
                </div>

            </div>
        </div>
    </section>
  );
}

export default Skills
