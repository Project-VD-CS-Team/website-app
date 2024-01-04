import homepage from "./homepage.css"; 

export default function Home() {
  return (
    <>
      <div className="container">
        <h1>About us </h1>
        <main>
          <section id = "projectStatement">
              <h2 className = "sectionHeader">Purpose</h2>
              <article id = "statementHeader">
                <h3>Visual Detector is a device that is capable of detecting microbes through the use of computer vision and deep learning</h3>
                <h3> 
                 Our project is a unique and innovative solution that aims to solve a problem in a particular industry.
                 It is designed to provide a comprehensive and user-friendly experience to our customers. 
                 Our team has worked tirelessly to ensure that the project meets the highest standards of quality and functionality. 
                 We are confident that our project will be a game-changer in the industry and will set a new standard for excellence. 
                 We are excited to share our project with the world and look forward to seeing the positive impact 
                 it will have on our customers and the industry as a whole.
                </h3>
              </article>
          </section>
        </main>
      </div>
    </>
  )
}
