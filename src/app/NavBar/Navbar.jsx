import Style from "./navbar.css"

export default function Navbar(){

    return(
            <div className="navContainer">
                <section className = "navSection">
                    <a hrefe ="/" id = "PageTitle">Visual Detector</a>
                    <a href="/">Home</a>
                    <a href="/Research">Research</a>
                    <a href = "/Collaborators">Collaborators</a>
                    <a href = "/Timeline">Time Line</a>
                </section>
            </div>
    );}