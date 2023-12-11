import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";

const Banner = () => {
    return (
        <>
            <div id="banner" className="banner">
                <Navbar></Navbar>
                <Home></Home>
            </div>
        </>
    );
};

export default Banner;