import "./style.css";
import Timeline from "./Timeline.jsx";
import {education as events} from "/Users/ulas/Documents/GitHub/personal-site/src/constants/index.js";
const About = () => {

    return (
        <>
            <div className="about" id="about">
                <div className="about-header">

                </div>

                <div className="about-text">
                    <div className="education">
                        <div className="education-header">
                            Education
                        </div>
                        <Timeline events={events}/>
                    </div>

                    <div className="experience">

                    </div>

                </div>
            </div>
        </>
    );
};

export default About;