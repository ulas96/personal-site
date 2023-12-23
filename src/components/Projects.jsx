import { projects} from "../constants/index.js";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Projects = () => {
    return (
        <div className="projects" id="projects">
            <div className="header">Projects</div>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <Card key={index} className="project-card" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title className="project-title">{project.name}</Card.Title>
                            <Card.Text className="project-description">
                                {project.description}
                            </Card.Text>

                            <div className="project-button-container">
                                <Button className="project-button" variant="primary" href={project.url}>Go to Project</Button>
                            </div>

                        </Card.Body>
                    </Card>
                ))}
            </div>

        </div>
    );
};

export default Projects;