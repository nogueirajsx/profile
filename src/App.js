import React from 'react';
import About from './components/about';
import Experience from './components/experience';
import Portifolio from './components/portifolio';
import Skills from './components/skills';
import Awards from './components/awards';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">
          <span class="d-block d-lg-none  mx-0 px-0"><img src="img/logo-white.png" alt="" class="img-fluid" /></span>
          <span class="d-none d-lg-block">
            <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/avatar.jpg" alt="" />
          </span>
        </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav">
                  <li class="nav-item">
                      <a class="nav-link js-scroll-trigger" href="#about">About</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link js-scroll-trigger" href="#experience">Experience</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link js-scroll-trigger" href="#skills">Skills</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link js-scroll-trigger" href="#awards">Awards</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link js-scroll-trigger" href="#contact">Contact</a>
                  </li>
              </ul>
          </div>
      </nav>
      <About />
      <Experience />
      <Portifolio />
      <Skills />
      <Awards />
      <Contact />
    </div>
  );
}

export default App;
