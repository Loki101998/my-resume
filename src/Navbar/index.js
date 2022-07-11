import React from "react";

const Navbarrr = () => {
  return (
    
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  
  <ul class="nav justify-content-end">
      <div class="container-fluid">
          
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
            <a class="navbar-brand" href="home">
            Home
          </a>
          </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="about">
                  About Me
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="Awesome facts">
                  Awesome facts
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="calculate">
                  Calculate
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="clone">
                  Clone site
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="memes">
                  Meme Templates
                </a>
              </li>
            </ul>
          </div>
        </div>
        </ul>
      </nav>
    
    
  );
};

export default Navbarrr;
