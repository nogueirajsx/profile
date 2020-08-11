   
import React from 'react';

function Portifolio() {
  return (
      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="portfolio"> 
          <div class="row my-auto">
              <div class="col-12">
                <h2 class="  text-center">Portfolio</h2>
                <div class="mb-5 heading-border"></div>
              </div>
              <div class="col-md-12">
                <div class="port-head-cont">
                  <button class="btn btn-general btn-green filter-b" data-filter="all">All</button>
                  <button class="btn btn-general btn-green filter-b" data-filter="consulting">Web Design</button>
                  <button class="btn btn-general btn-green filter-b" data-filter="finance">Mobile Apps</button>
                  <button class="btn btn-general btn-green filter-b" data-filter="marketing">Graphics Design</button> 
                </div>
              </div>
          </div>
          <div class="row my-auto">
              <div class="col-sm-4 portfolio-item filter finance">
                  <a class="portfolio-link" href="#portfolioModal4" data-toggle="modal">
                      <div class="caption-port">
                          <div class="caption-port-content">
                              <i class="fa fa-search-plus fa-3x"></i>
                          </div>
                      </div>
                      <img class="img-fluid" src="img/portfolio/p-4.jpg" alt="" />
                  </a>
              </div>
              <div class="col-sm-4 portfolio-item filter marketing">
                  <a class="portfolio-link" href="#portfolioModal5" data-toggle="modal">
                      <div class="caption-port">
                          <div class="caption-port-content">
                              <i class="fa fa-search-plus fa-3x"></i>
                          </div>
                      </div>
                      <img class="img-fluid" src="img/portfolio/p-5.jpg" alt="" />
                  </a>
              </div>
              <div class="col-sm-4 portfolio-item filter consulting">
                  <a class="portfolio-link" href="#portfolioModal6" data-toggle="modal">
                      <div class="caption-port">
                          <div class="caption-port-content">
                              <i class="fa fa-search-plus fa-3x"></i>
                          </div>
                      </div>
                      <img class="img-fluid" src="img/portfolio/p-6.jpg" alt="" />
                  </a>
              </div>              
              <div class="col-sm-4 portfolio-item filter consulting">
                  <a class="portfolio-link" href="#portfolioModal7" data-toggle="modal">
                      <div class="caption-port">
                          <div class="caption-port-content">
                              <i class="fa fa-search-plus fa-3x"></i>
                          </div>
                      </div>
                      <img class="img-fluid" src="img/portfolio/p-7.jpg" alt="" />
                  </a>
              </div>
              <div class="col-sm-4 portfolio-item filter consulting">
                  <a class="portfolio-link" href="#portfolioModal8" data-toggle="modal">
                      <div class="caption-port">
                          <div class="caption-port-content">
                              <i class="fa fa-search-plus fa-3x"></i>
                          </div>
                      </div>
                      <img class="img-fluid" src="img/portfolio/p-8.jpg" alt="" />
                  </a>
              </div>
              <div class="col-sm-4 portfolio-item filter finance">
                  <a class="portfolio-link" href="#portfolioModal9" data-toggle="modal">
                      <div class="caption-port">
                          <div class="caption-port-content">
                              <i class="fa fa-search-plus fa-3x"></i>
                          </div>
                      </div>
                      <img class="img-fluid" src="img/portfolio/p-9.jpg" alt="" />
                  </a>
              </div>              
              <div class="col-sm-4 portfolio-item filter marketing">
                  <a class="portfolio-link" href="#portfolioModal1" data-toggle="modal">
                      <div class="caption-port">
                          <div class="caption-port-content">
                              <i class="fa fa-search-plus fa-3x"></i>
                          </div>
                      </div>
                      <img class="img-fluid" src="img/portfolio/p-1.jpg" alt="" />
                  </a>
              </div>
              <div class="col-sm-4 portfolio-item filter marketing">
                  <a class="portfolio-link" href="#portfolioModal2" data-toggle="modal">
                      <div class="caption-port">
                          <div class="caption-port-content">
                              <i class="fa fa-search-plus fa-3x"></i>
                          </div>
                      </div>
                      <img class="img-fluid" src="img/portfolio/p-2.jpg" alt="" />
                  </a>
              </div>
              <div class="col-sm-4 portfolio-item filter finance">
                  <a class="portfolio-link" href="#portfolioModal3" data-toggle="modal">
                      <div class="caption-port">
                          <div class="caption-port-content">
                              <i class="fa fa-search-plus fa-3x"></i>
                          </div>
                      </div>
                      <img class="img-fluid" src="img/portfolio/p-3.jpg" alt="" />
                  </a>
              </div> 
          </div>
      </section>
  );
}

export default Portifolio;



