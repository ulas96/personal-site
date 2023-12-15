import {skills} from '../constants/index.js';

const Skills = () => {
    return (
        <>
            <div id="skills">
                <div className="header" id="skills-header">
                    Skills
                </div>
                <div className="skills-container">
                    {skills.map((skill, index) => (
                        <div className="skill" key={`skill-${index}`}>
                            <div className="skill-div">
                                <div className="skill-icon">
                                    <img src={skill.icon} className="skill-icon-img"/>
                                </div>
                                <div className="skill-name">
                                    {skill.name}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Skills;