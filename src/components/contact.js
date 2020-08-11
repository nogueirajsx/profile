             
import React from 'react';

function Contact() {
  return (
      <div>
      <section class="resume-section p-3 p-lg-5 d-flex flex-column">
          <div class="row my-auto" id="contact"> 
            <div class="col-md-8">
              <div class="contact-cont">
                <h3>CONTACT Us</h3>
                <div class="heading-border-light"></div>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
              </div>   
              <div class="row con-form">
                <div class="col-md-12">
                  <input type="text" name="full-name" placeholder="Full Name" class="form-control" />
                </div>
                <div class="col-md-12">
                  <input type="text" name="email" placeholder="Email Id" class="form-control" />
                </div>
                <div class="col-md-12">
                  <input type="text" name="subject" placeholder="Subject" class="form-control" />
                </div>
                <div class="col-md-12"><textarea name="" id=""></textarea></div>
                <div class="col-md-12 sub-but"><button class="btn btn-general btn-white" role="button">Send</button></div>
              </div>
            </div>
            <div class="col-md-4 col-sm-12 mt-5"> 
              <div class="contact-cont2"> 
                <div class="contact-add contact-box-desc">
                  <h3><i class="fa fa-map-marker cl-atlantis fa-2x"></i> Address</h3>
                  {/* <p>25, Dist town Street, Logn <br>
                  California, US <br></p> */}
                </div>
                <div class="contact-phone contact-side-desc contact-box-desc">
                  <h3><i class="fa fa-phone cl-atlantis fa-2x"></i> Phone</h3>
                  <p>800 123 3456 900 123 3457</p>
                </div>
                <div class="contact-mail contact-side-desc contact-box-desc">
                  <h3><i class="fa fa-envelope-o cl-atlantis fa-2x"></i> Email</h3>
                <address class="address-details-f"> 
                  Fax: 800 123 3456
                  Email: <a href="#" class="">rodrigonogueira.net</a>
                </address>
                <ul class="list-inline social-icon-f top-data">
                  <li><a href="#" target="_empty"><i class="fa top-social fa-facebook"></i></a></li>
                  <li><a href="#" target="_empty"><i class="fa top-social fa-twitter"></i></a></li>
                  <li><a href="#" target="_empty"><i class="fa top-social fa-google-plus"></i></a></li> 
                </ul>
                </div>
              </div>
            </div> 
          </div>
      </section>

      <section class=" d-flex flex-column" id="maps">
        <div id="map">
          <div class="map-responsive">
             <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6030.418742494061!2d-111.34563870463673!3d26.01036670629853!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1471908546569" width="600" height="450" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </section>
      </div>
  );
}

export default Contact;


     

     
