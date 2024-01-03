import homepage from "./homepage.css"; 

export default function Home() {
  return (
    <>
      <div className="container">
        <h1>Welcome!</h1>
        <main>
          <section id = "summarySection">
              <h2 className = "sectionHeader">Summary</h2>
              <article id = "summaryBody">
                <h3>Visual Detector is a device that is capable of detecting microbes through the use of computer vision and deep learning</h3>
              </article>
          </section>
          <section id = "projectStatement">
              <h2 className = "sectionHeader">Purpose</h2>
              <article id = "statementHeader">Main Body</article>
          </section>
        </main>
      </div>
    </>
  )
}
