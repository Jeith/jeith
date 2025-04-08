import React, { useState, useEffect } from "react";
import "./assets/stylesheets/style.css";
import mii from "./assets/images/mii.png";
import miiBlinking from "./assets/images/mii-blinking.png";
import pennystreams from "./assets/images/projects/pennystreams.png";
import jeith from "./assets/images/projects/jeith.png";
import paletteCenter from "./assets/images/projects/the-palette-center.png";
import heroRPG from "./assets/images/projects/hero-rpg.png";

function App() {
  let [h1Classname, setH1Classname] = useState("");
  let [isSleeping, setIsSleeping] = useState(false);

  useEffect(() => {
    toggleColorTheme(
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light",
      false
    );

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) =>
        toggleColorTheme(e.matches ? "dark" : "light", false)
      );

    setTimeout(() => {
      setH1Classname("reveal");
    }, 500);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", () => {});
    };
  }, []);

  const toggleColorTheme = (mode = "light", clickEvent = true) => {
    if (clickEvent) {
      if (document.body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode");
        setIsSleeping(false);
      } else {
        document.body.classList.add("dark-mode");
        setIsSleeping(true);
      }
    } else {
      if (mode === "light") {
        setIsSleeping(false);

        if (document.body.classList.contains("dark-mode")) {
          document.body.classList.remove("dark-mode");
        }
      } else {
        setIsSleeping(true);

        if (!document.body.classList.contains("dark-mode")) {
          document.body.classList.add("dark-mode");
        }
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <React.Fragment>
      <section className="hero">
        <div className="background-shapes">
          <div className="rectangle rectangle-1 curved"></div>
          <div className="rectangle rectangle-2 curved"></div>
          <div className="rectangle rectangle-3 curved"></div>
          <div className="rectangle rectangle-4 curved"></div>
          <div className="rectangle rectangle-5 curved"></div>
          <div className="square square-1 curved"></div>
          <div className="square square-2 curved"></div>
          <div className="square square-3 curved"></div>
          <div className="square square-4 curved"></div>
          <div className="square square-5 curved"></div>
          <div className="square square-6 curved"></div>
          <div className="square square-7 curved sm"></div>
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
          <div className="circle circle-4"></div>
          <div className="circle circle-5"></div>
          <div className="circle circle-6"></div>
          <div className="circle circle-7"></div>
          <div className="circle circle-8"></div>
        </div>

        <h1 className={h1Classname}>jeith.</h1>
      </section>

      <section className="about-me">
        <div className="background-shapes">
          <div className="rectangle rectangle-3 curved"></div>
          <div className="rectangle rectangle-6 curved"></div>
          <div className="square square-3 curved"></div>
          <div className="square square-4 curved"></div>
          <div className="square square-6 curved"></div>
          <div className="square square-7 curved sm"></div>
          <div className="square curved sm" id="square-8"></div>
          <div className="square curved" id="square-9"></div>
          <div className="circle circle-1"></div>
          <div className="circle circle-6"></div>
          <div className="circle circle-7"></div>
          <div className="circle circle-8"></div>
        </div>

        <div className="section-wrapper">
          <div className="textbox">
            <div>
              <h2>Hi, my name is Keith!</h2>
              <span>
                I'm a full stack software developer living in Austin, TX. I've
                been coding for 7+ years, and I'm most experienced in web &amp;
                mobile app development. I first started as a hobbyist developer
                by learning how to code on my own through{" "}
                <a
                  rel="noreferrer"
                  href="https://www.theodinproject.com/"
                  target="_blank"
                >
                  The Odin Project
                </a>{" "}
                and{" "}
                <a
                  rel="noreferrer"
                  href="https://www.freecodecamp.org/"
                  target="_blank"
                >
                  FreeCodeCamp
                </a>{" "}
                in early 2018. I'm now working professionally as an UI engineer,
                and I use React, Flutter, and various other technologies to
                build web and mobile applications. Outside work, I'm interested
                in game development and all things{" "}
                <a
                  rel="noreferrer"
                  href="https://github.com/Jeith"
                  target="_blank"
                >
                  open source
                </a>
                .
                <br />
              </span>
            </div>

            <div className="technologies">
              <h2>Technologies I've been using:</h2>

              <div className="technologies-container">
                <div className="technology">
                  <p>Flutter</p>
                </div>
                <div className="technology">
                  <p>React</p>
                </div>
                <div className="technology">
                  <p>Angular</p>
                </div>
                <div className="technology">
                  <p>Unity</p>
                </div>
                <div className="technology">
                  <p>Node.js</p>
                </div>
                <div className="technology">
                  <p>TypeScript</p>
                </div>
                <div className="technology">
                  <p>Python</p>
                </div>
                <div className="technology" id="sass">
                  <p>Sass</p>
                </div>
                <div className="technology">
                  <p>PostgreSQL</p>
                </div>
                <div className="technology">
                  <p>GraphQL</p>
                </div>
                <div className="technology">
                  <p>HTML5</p>
                </div>
                <div className="technology" id="css">
                  <p>CSS3</p>
                </div>
                <a
                  rel="noreferrer"
                  href="https://github.com/Jeith"
                  target="_blank"
                  className="technology"
                >
                  <p>Git</p>
                </a>
                <div className="technology">
                  <p>AWS</p>
                </div>
              </div>
            </div>
          </div>
          <div className="img-wrapper">
            {isSleeping ? (
              <img
                src={miiBlinking}
                alt="Mii blinking"
                onClick={() => toggleColorTheme()}
              />
            ) : (
              <img src={mii} alt="Mii" onClick={() => toggleColorTheme()} />
            )}
          </div>
        </div>
      </section>
      <section className="project-section">
        <div className="section-wrapper">
          <h2>Projects</h2>

          <div className="project first">
            <div className="image-container">
              <div className="image-wrapper">
                <img src={pennystreams} alt="Pennystreams screenshot" />
              </div>
            </div>

            <div className="text">
              <a
                href="https://pennystreams.com"
                rel="noreferrer"
                target="_blank"
              >
                <h3>pennystreams.com</h3>
              </a>
              <span>
                Pennystreams is the latest project that I've built. Pennystreams
                uses APIs to get artists' Spotify play count and calculate
                artists' Spotify payouts based on it. API is not longer active
                and needs to be replaced.
              </span>
              <div className="technologies-container">
                <div className="technology">
                  <p className="technology-heading">Technologies Used:</p>
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
                <img
                  src={jeith}
                  alt="This is a screenshot of the site your on!"
                />
              </div>
            </div>

            <div className="text">
              <span onClick={() => toggleColorTheme()} id="jeith">
                <h3>My Portfolio!</h3>
              </span>
              <span>
                This is my latest portfolio. This website is built with React
                and hosted via Cloudflare Pages.
              </span>
              <div className="technologies-container">
                <div className="technology">
                  <p className="technology-heading">Technologies Used:</p>
                </div>
                <div className="technology">
                  <p className="teal">React</p>
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
                <img
                  src={paletteCenter}
                  alt="Screenshot of the Palette Center"
                />
              </div>
            </div>

            <div className="text">
              <a
                rel="noreferrer"
                href="https://palette-generator.pages.dev/"
                target="_blank"
              >
                <h3>thepalettecenter.com</h3>
              </a>
              <span>
                The Palette Center is a project that I created in 2018. This web
                application is built with React and Redux and can be used to
                generate color palettes.
              </span>
              <div className="technologies-container">
                <div className="technology">
                  <p className="technology-heading">Technologies Used:</p>
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
          <div className="project reverse">
            <div className="image-container">
              <div className="image-wrapper">
                <img
                  src={heroRPG}
                  alt="Screenshot of the text-based Hero RPG"
                />
              </div>
            </div>

            <div className="text">
              <a
                rel="noreferrer"
                href="https://github.com/Jeith/Basic-Hero-RPG"
                target="_blank"
              >
                <h3>Text-based Hero RPG</h3>
              </a>
              <span>
                I built this text-based hero RPG when I was learning Python in
                2018. This game allows players to fight different ASCII art
                creatures that drop coins, and the player can use these coins to
                purchase items. Users can play this game by running the{" "}
                <a
                  rel="noreferrer"
                  href="https://github.com/Jeith/Basic-Hero-RPG/blob/master/hero-rpg.py"
                  target="_blank"
                >
                  hero-rpg.py
                </a>{" "}
                file through their Python compiler.
              </span>
              <div className="technologies-container">
                <div className="technology">
                  <p className="technology-heading">Technologies Used:</p>
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
