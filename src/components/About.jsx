import "./style.css";
import {EducationTimeline, ExperienceTimeline} from "./Timeline.jsx";
import { education, experience } from "/Users/ulas/Documents/GitHub/personal-site/src/constants/index.js";
const About = () => {

    return (
        <>
            <div className="about" id="about">
                <div className="about-header">

                </div>

                <div className="about-text">
                    <div className="education">
                        <div className="header">
                            Education
                        </div>
                        <EducationTimeline events={education}/>
                    </div>

                    <div className="experience">
                        <div className="header">
                            Experience
                        </div>
                        <ExperienceTimeline events={experience}/>
                    </div>

                </div>
            </div>
        </>
    );
};

export default About;