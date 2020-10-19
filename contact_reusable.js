class ContactFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav>
       {*Header code goes here *}
      </nav>
    `;
  }
}

class ContactFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="container">
          <div class="section-header">
            <h3 class="section-title">Contact</h3>
            <p class="section-description-small">If you're interested in Acuris Systems, please get in touch.</p>
          </div>
        </div>

        <div class="container">
          <div class="row justify-content-center">

            <!-- <div class="contact-button col-lg-4 col-md-6"> -->
            <div class="contact-button">
                <div class="social-links email">
                  <a href="mailto:matthew@acurissystems.com" class="email">
                    <i class="fas fa-envelope"></i>
                  </a>
                </div>
            </div>

            <!-- <div class="contact-button col-lg-4 col-md-6"> -->
            <div class="contact-button">
                <div class="social-links">
                  <a href="https://www.linkedin.com/company/acuris-systems/" class="linkedin"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>

            <!-- <div class="contact-button col-lg-4 col-md-6"> -->
            <div class="contact-button">
                <div class="social-links">
                  <a href="https://www.google.com/maps/search/?api=1&query=89%2F5+Ellice+Road,+Totara+Vale,+Auckland" class="location"><i class="fas fa-map-marker-alt"></i></a>
                </div>
            </div>

          </div>
        </div>
      </footer>
    `;
  }
}

// <section id="contact">
//   <div class="container">
//     <div class="section-header">
//       <h3 class="section-title">Contact</h3>
//       <p class="section-description-small">If you're interested in Acuris Systems, please get in touch.</p>
//     </div>
//   </div>
//
//   <div class="container">
//     <div class="row justify-content-center">
//
//       <!-- <div class="contact-button col-lg-4 col-md-6"> -->
//       <div class="contact-button">
//           <div class="social-links email">
//             <a href="mailto:matthew@acurissystems.com" class="email">
//               <i class="fas fa-envelope"></i>
//             </a>
//           </div>
//       </div>
//
//       <!-- <div class="contact-button col-lg-4 col-md-6"> -->
//       <div class="contact-button">
//           <div class="social-links">
//             <a href="https://www.linkedin.com/company/acuris-systems/" class="linkedin"><i class="fab fa-linkedin-in"></i></a>
//           </div>
//       </div>
//
//       <!-- <div class="contact-button col-lg-4 col-md-6"> -->
//       <div class="contact-button">
//           <div class="social-links">
//             <a href="#" class="location"><i class="fas fa-map-marker-alt"></i></a>
//           </div>
//       </div>
//
//     </div>
//   </div>
// </section>
