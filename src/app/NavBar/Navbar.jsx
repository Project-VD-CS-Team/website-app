import Style from "./navbar.css"

export default function Navbar(){

    return(
            <div className="navContainer">
                <h1>Visual Detector</h1>
                <section className = "navSection">
                    <a href="/">Home</a>
                    <a href="/Research">Research</a>
                    <a href = "/Collaborators">Collaborators</a>
                    <a href = "/Timeline">Time Line</a>
                </section>
            </div>
    );}