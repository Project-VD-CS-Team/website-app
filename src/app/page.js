import homepage from "./homepage.css"; 

export default function Home() {
  return (
    <>
      <div className="container">
        <h1>Landing Page</h1>
        <main>
          <section id = "summarySection">
              <h2 className = "sectionHeader">Summary</h2>
              <article id = "summaryBody">Main Body</article>
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
