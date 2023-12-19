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
                        <Card.Img variant="top" src={project.image} />
                        <Card.Body>
                            <Card.Title>{project.name}</Card.Title>
                            <Card.Text>
                                {project.description}
                            </Card.Text>
                            <Button className="project-button" variant="primary" href={project.url}>Go to Project</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>

        </div>
    );
};

export default Projects;