import './index.css';
import './assets/css/bootstrap.min.css';
import ContactIcon from './components/ContactIcon';

function App() {
  return (
    <main>
      <div>
        <section id="hero">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="vertical-center">
                  <h1>Adiih</h1>
                  <div className="roller">
                    <span id="rolltext">
                      📚 High school student<br />
                      🌍 from Central-Europe<br />
                      📈 Studying economics<br />
                      👨‍💻 Fullstack Developer<br />
                      ✏️ Web designer<br />
                      ☕ Java Developer<br />
                      🌱 Obsessed with modern technology<br />
                      📙 Self-taught<br />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact">
          <div className="section-wrapper">
            <div id="line" />
          </div>
          <div className="section-wrapper">
            <div id="number">1</div>
          </div>
          <h1 className="section-label">Contact</h1>
          <h2 className="section-description">Reach out to me using various platforms!</h2>
          <div id="icon-wrapper">
            <ContactIcon icon="fab fa-github" href="https://github.com/AdiihYT" />
            <ContactIcon icon="fab fa-youtube" href="https://www.youtube.com/c/Adiih" />
            <ContactIcon icon="fab fa-instagram" href="https://www.instagram.com/aszi.adi/" />
          </div>
        </section>
        <footer>
          {new Date().getFullYear()} © adiih.eu
        </footer>
      </div>
    </main>
  );
}

export default App;
