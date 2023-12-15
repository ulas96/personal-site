// App.js

import { BrowserRouter} from 'react-router-dom';
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Skills from "./Skills.jsx";
import Banner from "./Banner.jsx";
import "./style.css";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Banner></Banner>
                <About></About>
                <Skills></Skills>
                <Projects></Projects>
            </BrowserRouter>
        </>

    );
};

export default App;