import Site from '../components/Site';
import { Arrow, Badge, BigCta } from '../components/Icons';
import { SITE, pageMeta, breadcrumbLd, JsonLd } from '../seo';

export const metadata = pageMeta({
  path: '/services',
  title: 'Interiors, Fabrication, FRP Pools & Modular Pods',
  description: 'Interiors, industrial design, MS/SS and wood fabrication, FRP and smart pools, jacuzzis, prefab modular pods, FRP sumps and wall art in Bengaluru.',
  keywords: ['interior design services Bangalore', 'FRP pool manufacturer Bangalore', 'modular pod manufacturer', 'FRP sump tank manufacturer'],
});

const U = '/unicarper/opt/';

const cards = [
  ['service-icon-2', 'Design & engineering', 'Concept to blueprint: spatial plans, material palettes, 3D visuals, MEP coordination, load calculations and fabrication drawings.'],
  ['service-icon-1', 'Build & fabrication', 'In-house MS, SS, wood and custom-element production at our 8,000 sq ft facility, so quality and timelines stay in our hands.'],
  ['service-icon-3', 'Specialized solutions', 'Smart pools, modular pods, composite water infrastructure and turnkey villaments, delivered under one roof.'],
];

// [subtitle, title, text, list, image]
const verticals = [
  ['Residential', 'Residential Interiors', 'Bespoke interiors for luxury apartments, villas and compact urban homes. We manage every phase (concept, design, engineering, fabrication and installation) across villaments and turnkey homes.', ['Apartments & villas', 'Villaments', 'Turnkey homes', 'Custom joinery'], 'service-1.webp'],
  ['Commercial', 'Commercial Interiors', 'Office and corporate interiors that reflect brand identity and foster productivity, plus retail showrooms, hotels, restaurants and mixed-use spaces, delivered turnkey with in-house fabrication.', ['Offices & corporate', 'Executive suites', 'Retail & showrooms', 'Hospitality'], 'service-commercial.webp'],
  ['Industrial', 'Industrial Design', 'Factory layouts, warehouse interiors and manufacturing fit-outs. An engineering-driven approach to workflow, space utilization, safety and regulatory compliance.', ['Manufacturing plants', 'Warehouses', 'Logistics hubs', 'Processing facilities'], 'service-industrial.webp'],
  ['Fabrication', 'In-House Fabrication', 'MS and SS frameworks, staircases, decorative metalwork and fixtures, alongside bespoke furniture, cabinetry, wall paneling and joinery. Every element is quality-checked before installation.', ['MS & SS fabrication', 'Wood & custom elements', 'Modular kitchens & wardrobes', 'Quality checks'], 'service-fabrication.webp'],
  ['Engineering', 'Engineering Excellence', 'Civil, mechanical and MEP engineering under one roof. Structural and load analysis on every project, with materials and components compliant with IS, BS and international standards.', ['Structural integrity', 'Load analysis', 'MEP coordination', 'Technical compliance'], 'service-engineering.webp'],
  ['Pools', 'Smart Pools, Jacuzzis & Hot Tubs', 'Concrete, FRP and composite pools with IoT-enabled controls, energy-efficient filtration, LED mood lighting and remote monitoring. From infinity-edge rooftop pools to villa lap pools, plus jacuzzis and hot tubs.', ['Concrete, FRP & composite', 'Automation & IoT', 'Jacuzzis & hot tubs', 'Waterproofing & tiling'], 'service-4.webp'],
  ['Prefab', 'Architectural Modular Pods', 'Factory-built pods with composite materials and steel frameworks, designed for rapid on-site assembly. They work as offices, studios, hospitality suites or home extensions.', ['A-frame & gable pods', 'Premium & rectangle pods', 'Site office pods', 'Scalable layouts'], 'service-pods.webp'],
  ['Water', 'Composite Water Infrastructure', 'FRP underground sumps, overhead reservoirs, treatment units and distribution networks in MS, SS and FRP composites. Corrosion-resistant, designed in-house and installed by our engineering teams.', ['FRP underground sumps', 'Overhead reservoirs', 'Water treatment', 'Distribution networks'], 'service-water.webp'],
  ['Landscape', 'Integrated Landscape & FRP Décor', 'Landscapes, planters and outdoor living finished with bespoke FRP wall art, FRP furniture and lightweight, high-strength FRP pots for indoor and outdoor spaces.', ['Integrated landscape', 'FRP wall art', 'FRP furniture', 'FRP pots & planters'], 'service-2.webp'],
];

const servicesLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Unicarper services',
  itemListElement: verticals.map(([, title, text, list], i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Service',
      name: title,
      description: text,
      serviceType: list.join(', '),
      provider: { '@id': `${SITE.url}/#organization` },
      areaServed: { '@type': 'Country', name: 'India' },
      url: `${SITE.url}/services`,
    },
  })),
};

export default function Services() {
  return (
    <Site>
      <JsonLd data={servicesLd} />
      <JsonLd data={breadcrumbLd('Services', '/services')} />
      <div className="sv-hero-area sv-hero-ptb">
        <div className="container container-1530">
          <div className="row">
            <div className="col-xl-10">
              <div className="sv-hero-title-box">
                <h1 className="sv-hero-title tp-char-animation">We design. <br /> We build.</h1>
                <p className="tp_fade_bottom">From inspired living to high-performing workplaces and industrial spaces, we design, engineer, fabricate and deliver.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="sv-hero-thumb p-relative">
                <div className="sv-hero-thumb-box">
                  <img data-speed=".7" src={`${U}services-hero.webp`} width="1408" height="768" alt="Infinity-edge pool reference" />
                </div>
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
                <span className="ab-inner-subtitle mb-20">What we do</span>
                <h4 className="tp-service-5-title">
                  Design, engineering and fabrication, <br /> all under one roof.
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
          {verticals.map(([sub, title, text, list, img], i) => (
            <div className="sv-service-item project-panel-2" key={title}>
              <div className="row g-0">
                <div className="col-xl-6 col-lg-6">
                  <div className="sv-service-thumb">
                    <img src={U + img} width="960" height="930" loading="lazy" alt={title} />
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
                  <img src={`${U}strip-new-${n}.webp`} width="460" height="260" loading="lazy" alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BigCta left="DESIGN | BUILD" right="FROM VISION TO REALITY" />
    </Site>
  );
}
