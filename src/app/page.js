import Navbar from "./NavBar/navBar";
import homepage from "./homepage.css"; 

export default function Home() {
  return (
    <>
      <div className="container">
        <h1>Welcome!</h1>
        <main>
          <h2>About us</h2>
            <div class = "box">
              <h3>Visual Detector is a device that is capable of detecting microbes through the use of computer vision and deep learning</h3>
            </div>
        </main>
      </div>
    </>
  )
}
