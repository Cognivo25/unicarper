import Site from '../components/Site';
import { Arrow, Badge, BigCta } from '../components/Icons';

export const metadata = { title: 'Services | Unicarper Design & Build' };

const U = '/unicarper/opt/';

const cards = [
  ['service-icon-2', 'The problem', 'Designers, vendors, contractors and site teams working separately means scope changes, rework and delays.'],
  ['service-icon-1', 'Our role', 'We coordinate design, procurement, vendors, site crews and project managers under one delivery plan.'],
  ['service-icon-3', 'The outcome', 'Clearer scope, better coordination, controlled execution and a smoother handover.'],
];

const verticals = [
  ['Interiors', 'Interior Design-Build', 'Interior concepts, material direction, fit-outs and execution support for residential and commercial spaces, coordinated from design intent to site delivery.', ['Interior concepts', 'Material direction', 'Fit-outs', 'Execution support']],
  ['Outdoor', 'Outdoor Environments', 'Landscaping, hardscape and outdoor living tied to the building envelope, drainage and material sequencing, with levels and installation dates aligned to the live site.', ['Landscaping', 'Hardscape', 'Outdoor living', 'Drainage coordination']],
  ['Wellness', 'Pools, Spas & Jacuzzis', 'Fiberglass pools, spa shells, jacuzzis and outdoor wellness installations, covering product selection, site planning and installation.', ['Fiberglass pools', 'Spa shells', 'Jacuzzis', 'Installation']],
  ['Water', 'Landscape & Water Features', 'Water walls, cascades, fountains and engineered water bodies, scoped with landscape and architecture. Hydraulics, circulation and finishes handled as one package.', ['Water walls', 'Cascades & fountains', 'Hydraulics', 'Finishes']],
  ['Security', 'Security & Surveillance', 'CCTV, access paths, cable routes and rack-room layouts coordinated with civil and MEP work, for residential towers, commercial blocks and large campuses.', ['CCTV', 'Access paths', 'Cable routes', 'Rack rooms']],
  ['PMC', 'PMC Services', 'Schedules, vendor cadence, site reporting and change control under a visible programme, keeping budget and timeline in view through execution.', ['Scheduling', 'Vendor cadence', 'Site reporting', 'Change control']],
];

export default function Services() {
  return (
    <Site>
      <div className="sv-hero-area sv-hero-ptb">
        <div className="container container-1530">
          <div className="row">
            <div className="col-xl-10">
              <div className="sv-hero-title-box">
                <h4 className="sv-hero-title tp-char-animation">Six verticals. <br /> One programme.</h4>
                <p className="tp_fade_bottom">Clear scope and coordinated delivery across every stream.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="sv-hero-thumb p-relative">
                <div className="sv-hero-thumb-box">
                  <img data-speed=".7" src={`${U}services-hero.webp`} width="1408" height="768" alt="Infinity-edge pool reference" />
                </div>
                <img className="sv-hero-thumb-shape d-none d-lg-block" src={`${U}services-shape.webp`} width="139" height="139" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tp-service-5-area sv-service-style pb-70">
        <div className="container container-1530">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-service-5-title-box mb-90">
                <span className="ab-inner-subtitle mb-20">The aggregator advantage</span>
                <h4 className="tp-service-5-title">
                  One plan. One coordination layer. <br /> One accountable team.
                </h4>
              </div>
            </div>
          </div>
          <div className="tp-service-5-wrap">
            <div className="row">
              <div className="col-xxl-3"></div>
              {cards.map(([icon, title, text], i) => (
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6" key={title}>
                  <div className={`tp-service-5-item tp_fade_anim space-${i + 1}`}>
                    <div className="tp-service-4-icon">
                      <img src={`/assets/img/home-01/service/${icon}.png`} alt="" />
                    </div>
                    <div className="tp-service-4-content">
                      <h4 className="tp-service-4-title-sm tp-text-black">{title}</h4>
                      <p>{text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="sv-service-area project-panel-area-2">
        <div className="container-fluid p-0">
          {verticals.map(([sub, title, text, list], i) => (
            <div className="sv-service-item project-panel-2" key={title}>
              <div className="row g-0">
                <div className="col-xl-6 col-lg-6">
                  <div className="sv-service-thumb">
                    <img src={`${U}service-${i + 1}.webp`} width="960" height="930" loading="lazy" alt={title} />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="sv-service-content-wrap d-flex align-items-center">
                    <div className="sv-service-content">
                      <div className="sv-service-title-box">
                        <span className="sv-service-subtitle"><i>{String(i + 1).padStart(2, '0')}</i>{sub}</span>
                        <h4 className="sv-service-title">{title}</h4>
                      </div>
                      <div className="sv-service-space-wrap">
                        <div className="sv-service-text"><p>{text}</p></div>
                        <div className="sv-service-list">
                          <ul>{list.map((li) => <li key={li}>{li}</li>)}</ul>
                        </div>
                        <div className="sv-service-btn">
                          <a className="tp-btn-zikzak zikzak-inner p-relative" href="/contact">
                            <span className="zikzak-content">Discuss <br /> Project <Arrow /></span>
                            <Badge />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="tp-line-text-wrap tp-line-text-wrap-2 pt-120 pb-120">
        <div className="swiper tp-img-slide">
          <div className="swiper-wrapper">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div className="swiper-slide" key={n}>
                <div className={`sv-port-thumb port-thumb-${n % 2 ? 1 : 2}`}>
                  <img src={`${U}strip-${n}.webp`} width="460" height="260" loading="lazy" alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BigCta left="DESIGN | BUILD" right="ONE ACCOUNTABLE PARTNER" />
    </Site>
  );
}
