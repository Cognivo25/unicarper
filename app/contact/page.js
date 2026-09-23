import Site from '../components/Site';
import { pageMeta, breadcrumbLd, JsonLd } from '../seo';

export const metadata = pageMeta({
  path: '/contact',
  title: 'Contact: Get a Quote for Your Project',
  description: 'Get a quote for interiors, fabrication, pools, modular pods or FRP sumps. Call +91-9538444564 or email projects@unicarper.com. Bengaluru.',
  keywords: ['contact Unicarper', 'interior design quote Bangalore', 'FRP pool price enquiry'],
});

const U = '/unicarper/opt/';
const MAP = 'https://www.google.com/maps?q=Anand+Building,+KG+Halli,+Jalahalli+West,+Bangalore+560015';

const MAIL = 'mailto:projects@unicarper.com?subject=' + encodeURIComponent('Project enquiry');

export default function Contact() {
  return (
    <Site>
      <JsonLd data={breadcrumbLd('Contact', '/contact')} />
      <div className="inner-bg" data-background="/assets/img/home-01/team/team-details-bg.png">
        <div className="tm-hero-area tm-hero-ptb p-relative">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="tm-hero-content">
                  <span className="tm-hero-subtitle">Discuss your project</span>
                  <h1 className="tm-hero-title-big tp-char-animation">Get <br /> in touch</h1>
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
                      title="Unicarper registered office, Bangalore"
                      src={`${MAP}&output=embed`}
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="cn-contactform-wrap uc-contact-panel">
                    <h4 className="cn-contactform-2-title">Let&apos;s talk about your project</h4>
                    <p>Share your project type, location and expected scope. The team will review your requirement and respond with the next steps.</p>
                    <div className="uc-contact-actions">
                      <a className="tp-btn-black-md white-bg w-100" href={MAIL}>Email us</a>
                      <a className="uc-btn-outline w-100" href="tel:+919538444564">Call +91-9538444564</a>
                    </div>
                    <ul className="uc-contact-list">
                      <li><span>Email</span><a href={MAIL}>projects@unicarper.com</a></li>
                      <li><span>Phone</span><a href="tel:+919538444564">+91-9538444564</a></li>
                      <li><span>Office</span><a href={MAP} target="_blank" rel="noopener noreferrer">Anand Building, #18, Office 1, KG Halli, Jalahalli West, Bangalore 560015</a></li>
                    </ul>
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
                <div className="cn-contact-2-content text-center h-100">
                  <h4 className="cn-contact-2-title">Office</h4>
                  <div className="cn-contact-2-thumb d-flex justify-content-center">
                    <img src={`${U}contact-1.webp`} width="90" height="90" alt="" />
                    <img src={`${U}contact-frp-pool.webp`} width="90" height="90" alt="" />
                  </div>
                  <div className="cn-contact-2-info-details">
                    <a className="pb-15" href={MAP} target="_blank" rel="noopener noreferrer">
                      Unicarper - Design &amp; Build<br />A Unit of Triune Business Ventures Pvt Ltd.<br />Anand Building, #18, Office 1, KG Halli, Jalahalli West, Bangalore 560015
                    </a>
                    <span>Production facility: 15,000 sq ft across two units in Chellikere, Kalyan Nagar, Bengaluru.</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="cn-contact-2-content text-center h-100">
                  <h4 className="cn-contact-2-title">Direct line</h4>
                  <div className="cn-contact-2-thumb d-flex justify-content-center">
                    <img src={`${U}contact-3.webp`} width="90" height="90" alt="" />
                    <img src={`${U}contact-jacuzzi.webp`} width="90" height="90" alt="" />
                  </div>
                  <div className="cn-contact-2-info-details">
                    <a className="pb-15" href="tel:+919538444564">+91-9538444564</a>
                    <a href={MAIL}>projects@unicarper.com</a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="cn-contact-2-content text-center h-100">
                  <h4 className="cn-contact-2-title">Catalogue</h4>
                  <div className="cn-contact-2-thumb d-flex justify-content-center">
                    <img src={`${U}contact-wall-art.webp`} width="90" height="90" alt="" />
                    <img src={`${U}contact-pots.webp`} width="90" height="90" alt="" />
                  </div>
                  <div className="cn-contact-2-info-details">
                    <a className="pb-15" href="/assets/catelogue/Unicarper%20Brochure.pdf" target="_blank" rel="noopener noreferrer">
                      Pools, jacuzzis, prefab pods, FRP wall art, furniture, planters and underground sumps.
                    </a>
                    <a href="/assets/catelogue/Unicarper%20Brochure.pdf" target="_blank" rel="noopener noreferrer">Download PDF</a>
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
