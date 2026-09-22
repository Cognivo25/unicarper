import Site from '../components/Site';
import { BigCta, ScrollDown } from '../components/Icons';

export const metadata = { title: 'About | Unicarper Design & Build' };

const U = '/unicarper/opt/';

const steps = [
  ['01', 'Consult'],
  ['02', 'Design'],
  ['03', 'Plan'],
  ['04', 'Build'],
  ['05', 'Handover'],
];

const reasons = [
  ['One coordination layer', 'Multiple trades run under one programme instead of competing schedules.'],
  ['Design-to-execution continuity', 'Drawings and site work stay tied so intent does not drift at interfaces.'],
  ['Vendor and site alignment', 'Procurement, vendors and crews share the same milestones and dependencies.'],
  ['Catalogue-backed references', 'Pool, spa and décor selections anchored to documented product lines.'],
  ['Practical tracking', 'PMC-style reporting on budget, schedule and open items.'],
  ['Handover focus', 'Finishing checks, snag lists and closeout documentation, ready for occupation.'],
];

export default function About() {
  return (
    <Site>
      <div className="ab-inner-hero-area ab-inner-hero-bg p-relative" data-background={`${U}about-hero.webp`}>
        <div className="ab-inner-hero-scroll smooth">
          <a href="#about-info">
            <span>Scroll to explore <ScrollDown /></span>
          </a>
        </div>
        <div className="container container-1480">
          <div className="row">
            <div className="col-xl-8">
              <div className="ab-inner-hero-title-box" data-lag="0.2" data-stagger="0.08">
                <span className="ab-inner-hero-subtitle">Design-build <br /> aggregator</span>
                <h1 className="ab-inner-hero-title tp-char-animation">One Team</h1>
                <p>Unified design, structured execution, nationwide delivery</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-xl-5 col-lg-8">
              <div className="ab-inner-hero-content" data-lag="0.2" data-stagger="0.08">
                <p>Interiors, outdoor works, pools and spas, and PMC-style coordination, run from Bangalore across India.</p>
                <a className="tp-btn-white-sm border-style" href="#about-info">How We Work</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ab-about-area ab-about-mt pb-90 z-index-5">
        <div className="container container-1480">
          <div className="ab-about-thumb-wrap mb-180">
            <div className="row align-items-end">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="ab-about-left-thumb">
                  <img data-speed=".7" src={`${U}about-1.webp`} width="600" height="900" alt="Residential living room interior" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="ab-about-right-thumb p-relative">
                  <img data-speed="1.1" className="inner-img z-index-5" src={`${U}about-3.webp`} width="230" height="310" alt="Spa jet layout detail" />
                  <img data-speed="0.9" src={`${U}about-2.webp`} width="640" height="430" alt="Commissioned fiberglass pool" />
                </div>
              </div>
            </div>
          </div>
          <div id="about-info" className="row">
            <div className="col-xxl-9">
              <div className="ab-about-content p-relative">
                <span>Hi!</span>
                <p className="tp-dropcap tp_fade_bottom">
                  We are Unicarper, a design-build aggregator. We coordinate design, procurement,
                  vendors, site crews and project managers under one delivery plan, so owners get
                  clear scope and controlled execution without chasing multiple teams.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-9">
              <div className="row">
                <div className="col-xl-5 col-lg-5 col-md-4 mb-40">
                  <div className="ab-about-category-title-box p-relative">
                    <h4 className="ab-about-category-title">Six streams <br /><span>OUR VERTICALS</span></h4>
                    <img className="ab-about-shape-1 d-none d-md-block" src="/assets/img/inner-about/about/shape-1.png" alt="" />
                  </div>
                </div>
                <div className="col-xl-7 col-lg-7 col-md-8">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 mb-40">
                      <div className="ab-about-category-list category-space-1 tp_fade_bottom">
                        <ul>
                          <li>Interior design-build</li>
                          <li>Outdoor environments</li>
                          <li>Pools, spas &amp; jacuzzis</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 mb-40">
                      <div className="ab-about-category-list category-space-2 tp_fade_bottom">
                        <ul>
                          <li>Landscape &amp; water features</li>
                          <li>Security &amp; surveillance</li>
                          <li>PMC services</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tp-team-area pb-120 fix">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-team-slider-wrapper">
                <div className="swiper-container tp-team-slider-active">
                  <div className="swiper-wrapper">
                    {steps.map(([n, title], i) => (
                      <div className="swiper-slide" key={title}>
                        <div className="tp-team-item tp-hover-btn-wrapper marque fix mb-30">
                          <div className="tp-hover-btn-item">
                            <img src={`${U}step-${i + 1}.webp`} width="380" height="470" loading="lazy" alt={title} />
                          </div>
                          <div className="tp-team-content">
                            <span>How we work · {n}</span>
                            <h4 className="tp-team-title-sm">{title}</h4>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ab-funfact-area pb-40">
        <div className="container container-1480">
          <div className="row">
            <div className="col-xl-4">
              <div className="ab-funfact-title-box">
                <span className="ab-inner-subtitle mb-25">Execution-led coordination</span>
                <h4 className="ab-inner-funfact-title tp_title_anim">Why <br /> Unicarper</h4>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="ab-funfact-wrap">
                <div className="row gx-75">
                  {reasons.map(([title, text], i) => (
                    <div className="col-xl-6 col-lg-6 col-md-6" key={title}>
                      <div className="ab-funfact-item mb-90">
                        <span>{String(i + 1).padStart(2, '0')}</span>
                        <p>{title}</p>
                        <div className="uc-reason-text">{text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BigCta left="DESIGN | BUILD" right="BANGALORE · NATIONWIDE" />
    </Site>
  );
}
