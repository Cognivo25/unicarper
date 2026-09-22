import Site from '../components/Site';

export const metadata = { title: 'Contact | Unicarper Design & Build' };

const U = '/unicarper/opt/';
const MAP = 'https://www.google.com/maps?q=Byappanahalli,+Bengaluru,+Karnataka+562149';

const projectTypes = [
  'Interior Design-Build',
  'Outdoor Environments',
  'Pools, Spas & Jacuzzis',
  'Landscape & Water Features',
  'Security & Surveillance',
  'PMC Services',
  'Catalogue Inquiry',
  'Other',
];

export default function Contact() {
  return (
    <Site>
      <div className="inner-bg" data-background="/assets/img/home-01/team/team-details-bg.png">
        <div className="tm-hero-area tm-hero-ptb p-relative">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="tm-hero-content">
                  <span className="tm-hero-subtitle">Discuss your project</span>
                  <h4 className="tm-hero-title-big tp-char-animation">Get <br /> in touch</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cn-contactform-area cn-contactform-style p-relative pb-100">
          <div className="container container-1840">
            <div className="cn-contactform-2-bg black-bg">
              <div className="row">
                <div className="col-xl-6">
                  <div className="cn-contactform-2-map">
                    <iframe
                      title="Unicarper headquarters, Bengaluru"
                      src={`${MAP}&output=embed`}
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="cn-contactform-wrap">
                    <h4 className="cn-contactform-2-title">Send an inquiry</h4>
                    {/* submitted over AJAX by assets/js/ajax-form.js; response text is shown in .ajax-response */}
                    <form id="contact-form" action="/api/contact" method="post">
                      <div className="cn-contactform-input mb-25">
                        <label htmlFor="cf-name">Full name</label>
                        <input id="cf-name" name="name" type="text" placeholder="Your name" required maxLength={100} />
                      </div>
                      <div className="cn-contactform-input mb-25">
                        <label htmlFor="cf-phone">Phone number</label>
                        <input id="cf-phone" name="phone" type="tel" placeholder="+91" maxLength={30} />
                      </div>
                      <div className="cn-contactform-input mb-25">
                        <label htmlFor="cf-email">Email address</label>
                        <input id="cf-email" name="email" type="email" placeholder="you@example.com" required maxLength={200} />
                      </div>
                      <div className="cn-contactform-input mb-25">
                        <label htmlFor="cf-type">Project type</label>
                        <select id="cf-type" name="projectType" defaultValue="">
                          <option value="" disabled>Select project type</option>
                          {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                      <div className="cn-contactform-input mb-25">
                        <label htmlFor="cf-message">Message details</label>
                        <textarea id="cf-message" name="message" placeholder="Project type, location and expected scope" required maxLength={5000}></textarea>
                      </div>
                      <div className="cn-contactform-btn">
                        <button className="tp-btn-black-md white-bg w-100" type="submit">Submit Inquiry</button>
                        <p className="ajax-response mt-5"></p>
                        <p className="uc-form-note">We use the information you submit only to respond to your enquiry.</p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cn-contactform-support-area mb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="cn-contactform-support-bg d-flex align-items-center justify-content-center" data-background="/assets/img/inner-contact/contact/contact-bg.png">
                  <div className="cn-contactform-support-text text-center">
                    <span>Share your project type, location and expected scope. The team will review your requirement and respond with the next steps.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cn-contact-2-info-area pb-90">
          <div className="container container-1530">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="cn-contact-2-content text-center">
                  <h4 className="cn-contact-2-title">Headquarters</h4>
                  <div className="cn-contact-2-thumb d-flex justify-content-center">
                    <img src={`${U}contact-1.webp`} width="90" height="90" alt="" />
                    <img src={`${U}contact-2.webp`} width="90" height="90" alt="" />
                  </div>
                  <div className="cn-contact-2-info-details">
                    <a className="pb-15" href={MAP} target="_blank" rel="noopener noreferrer">
                      Sy. no. 81, Srinivasa Nagar, Byappanahalli, Bengaluru, Karnataka 562149
                    </a>
                    <span>Headquartered in Bangalore, delivering nationwide.</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="cn-contact-2-content mt-60 text-center">
                  <h4 className="cn-contact-2-title">Direct line</h4>
                  <div className="cn-contact-2-thumb d-flex justify-content-center">
                    <img src={`${U}contact-3.webp`} width="90" height="90" alt="" />
                    <img src={`${U}contact-4.webp`} width="90" height="90" alt="" />
                  </div>
                  <div className="cn-contact-2-info-details">
                    <a className="pb-15" href="tel:+919900096972">+91-9900096972</a>
                    <a href="mailto:projects@unicarper.com">projects@unicarper.com</a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="cn-contact-2-content text-center">
                  <h4 className="cn-contact-2-title">Catalogue</h4>
                  <div className="cn-contact-2-thumb d-flex justify-content-center">
                    <img src={`${U}contact-5.webp`} width="90" height="90" alt="" />
                    <img src={`${U}contact-6.webp`} width="90" height="90" alt="" />
                  </div>
                  <div className="cn-contact-2-info-details">
                    <a className="pb-15" href="https://unicarper.com/unicarper-catalogue.pdf" target="_blank" rel="noopener noreferrer">
                      Pools, spas, FRP murals, wall sculptures, planters and custom outdoor elements.
                    </a>
                    <a href="https://unicarper.com/unicarper-catalogue.pdf" target="_blank" rel="noopener noreferrer">Download PDF</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Site>
  );
}
