import React from 'react';
import './project.css';

const Project = () => {
  return (
    <section id="project">
        <h1 className="projectTilte">PROJECTS</h1><br />
        <div className="projectBars">
            <div className="projectBar">
                
                <div className="projectBarText">
                    <h2>Billing Software System</h2>
                    <h3>Technologies Used: Python, Tkinter</h3><br />
                    <p>The is a Project a computerized billing system the aim is to reduce the manual work where it calculate the total , bill receipt will generate at the time of purchase of the products, search the old bills.</p>
                    
                </div>

            </div>
            <div className="projectBar">
                
                <div className="projectBarText">
                    <h2>Spotify Clone</h2>
                    <h3>Technologies Used: Html Css, JavaScript</h3><br />
                    <p>This music player will have all the features found in a typical music player. You will be able to add, play, pause and seek songs that have been added.</p>
                    
                </div>

            </div>
            <div className="projectBar">
                
                <div className="projectBarText">
                    <h2>Internway</h2>
                    <h3>Technologies Used: MERN</h3><br />
                    <p>Platform connecting students with internships and aiding enterprises in finding interns. Improved recruitment and skill acquisition.</p>
                    
                </div>

            </div>
        </div>
    </section>
  )
}

export default Project
