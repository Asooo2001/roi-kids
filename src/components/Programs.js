import "./Programs.css"

const Programs = () => {
  return (
    <section className="programs">
      <div className="container">
        <div className="programs-grid">
          <div className="program-box">
            <h2>Programet</h2>
            <div className="program-content">
              <p>
              Ne ofrojmë programe intensive tre-mujore, të cilat janë të<br></br> destinuar për përgatitjen e pjesëmarrësve
               nga themeli i<br></br> profesionit.
              </p>
            </div>
          </div>

          <div className="practice-box">
            <h2>Praktikë</h2>
            <div className="practice-content">
              <p>Ne ofrojmë praktikë të vazhdueshme gjatë dhe pas programit.<br></br> Praktika kryhet në klientë dhe punë reale.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Programs
