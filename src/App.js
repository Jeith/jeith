import React, {useState, useEffect} from 'react';
import './assets/stylesheets/style.css';
import mii from './assets/images/mii.jpg';
import pennystreams from './assets/images/projects/pennystreams.png';
import jeith from './assets/images/projects/jeith.png';
import paletteCenter from './assets/images/projects/the-palette-center.png';
// import snowhouse from './assets/images/projects/snowhouse.png';
// import tofuVillage from './assets/images/projects/tofu-village.png';
import heroRPG from './assets/images/projects/hero-rpg.png';

function App() {
  let [h1Classname, setH1Classname] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setH1Classname("reveal");
  }, 500);
  }, []);

  const toggleDarkMode = () => {
    if (document.body.classList.contains("dark-mode")) {
      document.body.classList.remove("dark-mode");

    } else {
      document.body.classList.add("dark-mode");
    }
  }

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  return (
    <React.Fragment>
      <section className="hero">
        <div className="background-shapes">
          <div className="rectangle curved" id="rectangle-1"></div>
          <div className="rectangle curved" id="rectangle-2"></div>
          <div className="rectangle curved" id="rectangle-3"></div>
          <div className="rectangle curved" id="rectangle-4"></div>
          <div className="rectangle curved" id="rectangle-5"></div>
          <div className="square curved" id="square-1" onClick={() => toggleDarkMode()}></div>
          <div className="square curved" id="square-2"></div>
          <div className="square curved" id="square-3"></div>
          <div className="square curved" id="square-4"></div>
          <div className="square curved" id="square-5"></div>
          <div className="square curved" id="square-6"></div>
          <div className="square curved sm" id="square-7"></div>
          <div className="circle" id="circle-1"></div>
          <div className="circle" id="circle-2"></div>
          <div className="circle" id="circle-3"></div>
          <div className="circle" id="circle-4"></div>
          <div className="circle" id="circle-5"></div>
          <div className="circle" id="circle-6"></div>
          <div className="circle" id="circle-7"></div>
          <div className="circle" id="circle-8"></div>
        </div>

        <h1 className={h1Classname}>jeith.</h1>
      </section>

      <section className="about-me">
        <div className="background-shapes">
          <div className="rectangle curved" id="rectangle-3"></div>
          <div className="rectangle curved" id="rectangle-6"></div>
          <div className="square curved" id="square-3"></div>
          <div className="square curved" id="square-4"></div>
          <div className="square curved" id="square-6"></div>
          <div className="square curved sm" id="square-7"></div>
          <div className="square curved sm" id="square-8"></div>
          <div className="square curved" id="square-9"></div>
          <div className="circle" id="circle-1"></div>
          <div className="circle" id="circle-6"></div>
          <div className="circle" id="circle-7"></div>
          <div className="circle" id="circle-8"></div>
        </div>

        <div className="section-wrapper">
          <div className="textbox">
            <div>
              <h2>Hi, my name is Keith!</h2>
              <span>I'm a full stack software developer living in Austin, TX. I've been programming for around 3 years, and I'm most proficient in web &amp; mobile app development. I first started as a hobbyist developer by learning how to code on my own through <a rel="noreferrer" href="https://www.theodinproject.com/" target="_blank">The Odin Project</a> and <a rel="noreferrer" href="https://www.freecodecamp.org/" target="_blank">FreeCodeCamp</a> in early 2018. Later on that year, I attended a coding bootcamp where I learned how to build full stack web applications. I've been working professionally as a software engineer since attending coding bootcamp, and I use React, Flutter, and various other technologies to build web and mobile applications.<br/></span>
            </div>
      
            <div className="technologies">
              <h2>Technologies I've been using:</h2>
      
              <div className="technologies-container">
                <div className="technology">
                  <p>JavaScript</p>
                </div>
                <div className="technology">
                  <p>Flutter</p>
                </div>
                <div className="technology">
                  <p>Python</p>
                </div>
                <div className="technology">
                  <p>React</p>
                </div>
                <div className="technology">
                  <p>Angular</p>
                </div>
                <div className="technology">
                  <p>Redux</p>
                </div>
                <div className="technology">
                  <p>Node.js</p>
                </div>
                <div className="technology">
                  <p>HTML5</p>
                </div>
                <div className="technology" id="sass">
                  <p>Sass</p>
                </div>
                <div className="technology" id="css">
                  <p>CSS3</p>
                </div>
                <div className="technology">
                  <p>EJS</p>
                </div>
                <a rel="noreferrer" href="https://socket.io/" target="_blank" className="technology">
                  <p>Socket.io</p>
                </a>
                <div className="technology">
                  <p>PostgreSQL</p>
                </div>
                <div className="technology">
                  <p>Wordpress</p>
                </div>
                <a rel="noreferrer" href="https://github.com/Jeith" target="_blank" className="technology">
                  <p>Git</p>
                </a>
                <div className="technology">
                  <p>AWS</p>
                </div>
              </div>
            </div>
          </div>
          <div className="img-wrapper">
            <img src={mii} alt="Macintosh computer" />
          </div>
        </div>
      </section>
      <section className="project-section">
        <div className="section-wrapper">
          <h2>Projects</h2>

          <div className="project first">
            <div className="image-container">
              <div className="image-wrapper">
                <img src={pennystreams} alt="This is a full size screenshot the Pennystreams website." />
              </div>
            </div>

            <div className="text">
              <a href="https://pennystreams.com" rel="noreferrer" target="_blank">
                <h3>pennystreams.com</h3>
              </a>
              <span>Pennystreams is latest project that I've built. Pennystreams uses APIs to get artists' Spotify playcount and calculate artists' Spotify payouts based off of it.</span>
              <div className="technologies-container">
                <div className="technology">
                  <p class="technology-heading">Technologies Used:</p>
                </div>
                <div className="technology">
                  <p className="teal">Node.js</p>
                </div>
                <div className="technology">
                  <p className="orange">HTML5</p>
                </div>
                <div className="technology">
                  <p className="yellow">Sass/CSS3</p>
                </div>
                <div className="technology">
                  <p className="blue">Spotify API</p>
                </div>
              </div>
            </div>
          </div>
          <div className="project reverse">
            <div className="image-container">
              <div className="image-wrapper">
                <img src={jeith} alt="This is a full size screenshot of the site your on!" />
              </div>
            </div>

            <div className="text">
              <span onClick={() => toggleDarkMode()} id="jeith">
                <h3>jeith.com</h3>
              </span>
              <span>This PWA is my latest portfolio that I built in 2021. This website is built with React and hosted via Cloudflare Pages.</span>
              <div className="technologies-container">
                <div className="technology">
                  <p class="technology-heading">Technologies Used:</p>
                </div>
                <div className="technology">
                  <p className="teal">React</p>
                </div>
                <div className="technology">
                  <p className="orange">HTML5</p>
                </div>
                <div className="technology">
                  <p className="yellow">Sass/CSS3</p>
                </div>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="image-container">
              <div className="image-wrapper">
                <img src={paletteCenter} alt="Full sized screenshot of the Palette Center website." />
              </div>
            </div>

            <div className="text">
              <a rel="noreferrer" href="https://palette-generator.pages.dev/" target="_blank">
                <h3>thepalettecenter.com</h3>
              </a>
              <span>The Palette Center is a project that I created in 2018. This web application is built with React and Redux and can be used to generate color palettes.</span>
              <div className="technologies-container">
                <div className="technology">
                  <p class="technology-heading">Technologies Used:</p>
                </div>
                <div className="technology">
                  <p className="teal">React</p>
                </div>
                <div className="technology">
                  <p className="red">Redux</p>
                </div>
                <div className="technology">
                  <p className="blue">Colors API</p>
                </div>
                <div className="technology">
                  <p className="orange">HTML5</p>
                </div>
                <div className="technology">
                  <p className="yellow">CSS3</p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="project reverse">
            <div className="image-container">
              <div className="image-wrapper">
                <img src={snowhouse} alt="Full sized screenshot of the text-based Hero RPG. The game is running in a terminal with a black background and white text." />
              </div>
            </div>

            <div className="text">
              <a rel="noreferrer" href="https://snowhouse.herokuapp.com/" target="_blank">
                <h3>Snowhouse Website</h3>
              </a>
              <span>This is a website I built for a cafe in Pasadena, TX. I built this in 2018 when I was learning more about front-end development.</span>
              <div className="technologies-container">
                <div className="technology">
                  <p class="technology-heading">Technologies Used:</p>
                </div>
                <div className="technology">
                  <p className="teal">Node.js</p>
                </div>
                <div className="technology">
                  <p className="orange">HTML5</p>
                </div>
                <div className="technology">
                  <p className="yellow">CSS3</p>
                </div>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="image-container">
              <div className="image-wrapper" style={{overflowY: 'hidden'}}>
                <img src={tofuVillage} alt="Full sized screenshot of the text-based Hero RPG. The game is running in a terminal with a black background and white text." />
              </div>
            </div>

            <div className="text">
              <a rel="noreferrer" href="https://tofu-village.herokuapp.com/index.html" target="_blank">
                <h3>Tofu Village Website</h3>
              </a>
              <span>This is a website I built for a restaurant in Houston, TX. I built this in 2018 when I was learning CSS3 and Bootstrap.</span>
              <div className="technologies-container">
                <div className="technology">
                  <p class="technology-heading">Technologies Used:</p>
                </div>
                <div className="technology">
                  <p className="teal">JavaScript</p>
                </div>
                <div className="technology">
                  <p className="orange">HTML5</p>
                </div>
                <div className="technology">
                  <p className="yellow">CSS3</p>
                </div>
              </div>
            </div>
          </div> */}
          <div className="project reverse">
            <div className="image-container">
              <div className="image-wrapper">
                <img src={heroRPG} alt="Full sized screenshot of the text-based Hero RPG." />
              </div>
            </div>

            <div className="text">
              <a rel="noreferrer" href="https://github.com/Jeith/Basic-Hero-RPG" target="_blank">
                <h3>Text-based Hero RPG</h3>
              </a>
              <span>I built this text-based hero RPG when I was learning Python in 2018. This game allows players to fight different ASCII art creatures that drop coins, and the player can use these coins to purchase items. Users can play this game by running the <a rel="noreferrer" href="https://github.com/Jeith/Basic-Hero-RPG/blob/master/hero-rpg.py" target="_blank">hero-rpg.py</a> file through their Python compiler.</span>
              <div className="technologies-container">
                <div className="technology">
                  <p class="technology-heading">Technologies Used:</p>
                </div>
                <div className="technology">
                  <p className="teal">Python</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer onClick={() => scrollToTop()}>
        <i className="fas fa-arrow-up"></i>
        <h4>Back to top</h4>
      </footer>
    </React.Fragment>
  );
}

export default App;
