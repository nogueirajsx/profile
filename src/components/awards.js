        
import React from 'react';

function Awards() {
  return (
      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
          <div class="row my-auto">
              <div class="col-12">
                <h2 class="  text-center">Awards</h2>
                <div class="mb-5 heading-border"></div>
              </div> 
              <div class="main-award" id="award-box">
                  <div class="award">
                      <div class="award-icon"></div>
                      <div class="award-content">
                          <span class="date">Apr 2017 - Mar 2018</span>
                          <h5 class="title">Google Analytics Certified Developer</h5>
                          <p class="description">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac venenatis enim. Aenean hendrerit justo sed.
                          </p>
                      </div>
                  </div>
                  <div class="award">
                      <div class="award-icon"></div>
                      <div class="award-content">
                          <span class="date">Apr 2018 - Mar 2019</span>
                          <h5 class="title">Mobile Web Specialist - Google Certification</h5>
                          <p class="description">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac venenatis enim. Aenean hendrerit justo sed.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </section> 
  );
}

export default Awards;


     
