import * as React from "react";
import { Window } from "../subcomponents/window";
import html from '../../assets/ui/icons/html5_icon.png';
import css from '../../assets/ui/icons/css_icon.png';
import js from '../../assets/ui/icons/js_icon.png';
import react from '../../assets/ui/icons/react_icon.png';
import python from '../../assets/ui/icons/python_icon.png';

export const About = () => {
    return (
        <Window 
        title="about"
        content={
            <MyContent />
        }/>
    );
}


const MyContent = () => {
    return (
        <div className="content">
           <div id="aboutText">
                <h1>Julian Gonzalez</h1>
                <h2>Web Developer</h2>

                <div id="aboutIcons">
                    <img src={html} alt="html icon" className="aboutImageIcons"></img>
                    <img src={css} alt="css icon" className="aboutImageIcons"></img>
                    <img src={js} alt="javascript icon" className="aboutImageIcons"></img>
                    <img src={react} alt="react icon" className="aboutImageIcons"></img>
                    <img src={python} alt="python icon" className="aboutImageIcons"></img>
                </div>

                <p>Hello, welcome to my portfolio website.
                    It was inspired by <a target='_blank' 
                    href="https://vivek9patel.github.io/">vivek patel </a> 
                    whose portfolio I found through reddit. I decided to make
                    a similar website for my portfolio but using an Operating System
                    I really loved. This site was made using React funtional components
                    and Redux as well as Material UI and a couple other tools.
                </p>
                <br/>
                <p>As for me, I have an Associates Degree in Web Development from Fresno 
                    City College and plan on pursing a bachelors in Computer Science. Right now
                    I am focusing on improving my Frontend skills and soon I will be working on my
                    backend skills. Technology I am currently familiar with include, Javscript, CSS,
                     HTML, React, Redux, Typescript, and Python. I also know basic Postgres SQL.
                </p>
                <br/>
                <p>
                    Personally, I am an avid Gamer and Car enthusiast. Some of my favorite games 
                    include Morrowind, Fable, Skyrim, Fallout 3, Dark Souls and The Witcher 3.
                    As you can see I am a big RPG fan and have had so much fun replaying these games
                    especially since you can mod most of them via <a target='_blank'
                    href="https://www.nexusmods.com/">Nexus Mods </a>. When it comes to cars although
                    I am a fan of JDM cars I do have a love affiar for BMW's. My first car was a 92 325i
                     in which I learned how to drive stick in and also learned how to do all of its repairs
                     on by myself.
                </p>
                <br/>
                <span>
                    Please feel free to contact me @ JulianGonz@live.com
                </span>
            </div>
        </div>
    );
}