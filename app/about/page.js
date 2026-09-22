import Site from '../components/Site';
import { BigCta, ScrollDown } from '../components/Icons';
import { pageMeta, breadcrumbLd, JsonLd } from '../seo';

export const metadata = pageMeta({
  path: '/about',
  title: 'About: Design, Engineering & Fabrication Firm',
  description: 'Full-service interior design and engineering firm in Bengaluru with a 15,000 sq ft in-house fabrication facility. IS/BS-compliant, turnkey delivery.',
  keywords: ['about Unicarper', 'Triune Business Ventures', 'in-house fabrication facility Bangalore'],
});

const U = '/unicarper/opt/';

const steps = [
  ['01', 'Consult'],
  ['02', 'Design'],
  ['03', 'Engineer'],
  ['04', 'Fabricate'],
  ['05', 'Deliver'],
];

const reasons = [
  ['End-to-end in-house capability', 'A 15,000 sq ft production facility across two units in Chellikere. MS, SS, wood and custom elements are made in-house, so quality control never leaves our roof.'],
  ['Engineering under one roof', 'Civil, mechanical and MEP disciplines work together, closing the gap between design intent and structural execution.'],
  ['Technical compliance', 'Materials and fabricated components comply with IS, BS and international standards, with quality audits from raw material to final installation.'],
  ['Innovation-driven delivery', 'Smart technology, modular construction and advanced materials, from smart pools and modular pods to composite water infrastructure.'],
  ['Faster timelines', 'Proprietary workflows that cut project timelines by up to 30% without compromising structural integrity or finish quality.'],
  ['Turnkey, concept to completion', 'Design, engineering, fabrication and installation handled by one team, across residential, commercial and industrial projects.'],
];

export default function About() {
  return (
    <Site>
      <JsonLd data={breadcrumbLd('About', '/about')} />
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
                <span className="ab-inner-hero-subtitle">Design <br /> | Build</span>
                <h1 className="ab-inner-hero-title tp-char-animation">One Roof</h1>
                <p>Design, engineering and fabrication, all under one roof</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-xl-5 col-lg-8">
              <div className="ab-inner-hero-content" data-lag="0.2" data-stagger="0.08">
                <p>Residential, commercial and industrial spaces, plus smart pools, modular pods and water infrastructure, built from Bengaluru.</p>
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
                  We are Unicarper, a full-service interior design and engineering firm in Bengaluru.
                  We deliver end-to-end design, build and fabrication, combining aesthetic
                  excellence with structural precision on every project we take on.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-9">
              <div className="row">
                <div className="col-xl-5 col-lg-5 col-md-4 mb-40">
                  <div className="ab-about-category-title-box p-relative">
                    <h4 className="ab-about-category-title">What we do <br /><span>OUR VERTICALS</span></h4>
                    <img className="ab-about-shape-1 d-none d-md-block" src="/assets/img/inner-about/about/shape-1.png" alt="" />
                  </div>
                </div>
                <div className="col-xl-7 col-lg-7 col-md-8">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 mb-40">
                      <div className="ab-about-category-list category-space-1 tp_fade_bottom">
                        <ul>
                          <li>Residential &amp; commercial interiors</li>
                          <li>Industrial design</li>
                          <li>In-house fabrication</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 mb-40">
                      <div className="ab-about-category-list category-space-2 tp_fade_bottom">
                        <ul>
                          <li>Smart pools &amp; jacuzzis</li>
                          <li>Architectural modular pods</li>
                          <li>Composite water infrastructure</li>
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
                <span className="ab-inner-subtitle mb-25">People | Spaces | Possibilities</span>
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

      <BigCta left="DESIGN | BUILD" right="BENGALURU & BEYOND" />
    </Site>
  );
}
