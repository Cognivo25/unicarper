import Site from '../components/Site';
import { BigCta } from '../components/Icons';

export const metadata = { title: 'References | Unicarper Design & Build' };

const filters = [
  ['*', 'Show all'],
  ['.pools', 'Pools & jacuzzi'],
  ['.spas', 'Spas'],
  ['.interiors', 'Interiors'],
  ['.landscape', 'Landscape'],
];

// [title, reference type, filter classes] — image is /unicarper/opt/grid-<index>.webp
const references = [
  ['Outdoor Pool & Deck', 'Concept reference', 'pools landscape'],
  ['Resort-Style Interior Lounge', 'Concept reference', 'interiors'],
  ['Terraced Landscape & Planting', 'Concept reference', 'landscape'],
  ['Residential Living Room', 'Project reference', 'interiors'],
  ['Pool & Coping Detail', 'Concept reference', 'pools'],
  ['Indoor Spa & Wet Area', 'Concept reference', 'spas interiors'],
  ['Commissioned Fiberglass Pool', 'Product reference', 'pools'],
  ['Custom Red-Back Hot Tub', 'Product reference', 'spas'],
  ['Installed White Spa Shell', 'Product reference', 'spas'],
  ['Fiberglass Pool Installation', 'Product reference', 'pools'],
  ['Jet Spa Overhead Detail', 'Product reference', 'spas'],
  ['White Spa Component', 'Product reference', 'spas'],
];

export default function References() {
  return (
    <Site>
      <div className="tm-hero-area tm-hero-ptb">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tm-hero-content">
                <span className="tm-hero-subtitle">Gallery &amp; catalogue</span>
                <h4 className="tm-hero-title fs-220 tp-char-animation">References</h4>
              </div>
              <div className="tm-hero-text tp_title_anim">
                <p>
                  Project, product and concept references across pools, spas, interiors and
                  landscape. Use them for direction before we detail your scope.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tp-project-5-2-area tp-project-5-2-pt pb-130">
        <div className="container container-1530">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="portfolio-filter masonary-menu d-flex justify-content-center mb-60">
                {filters.map(([f, label], i) => (
                  <button key={f} data-filter={f} className={i === 0 ? 'active' : undefined}><span>{label}</span></button>
                ))}
              </div>
            </div>
          </div>
          <div className="row grid">
            {references.map(([title, type, cats], i) => (
              <div className={`col-xl-4 col-lg-6 col-md-6 grid-item ${cats}`} key={title}>
                <div className="tp-project-5-2-thumb anim-zoomin-wrap mb-30 p-relative">
                  <a href="/contact">
                    <span>
                      <img className="anim-zoomin" src={`/unicarper/opt/grid-${i + 1}.webp`} width="735" height="870" alt={title} />
                    </span>
                    <div className="tp-project-5-2-category tp_fade_anim">
                      <span>{type}</span>
                    </div>
                    <div className="tp-project-5-2-content tp_fade_anim">
                      <h4 className="tp-project-5-2-title-sm">{title}</h4>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="row justify-content-center pt-60">
            <div className="col-xl-8 text-center">
              <p className="mb-30">
                Final pricing depends on dimensions, customization, mould requirements, site
                conditions and installation scope.
              </p>
              <a className="tp-btn-black-md" href="https://unicarper.com/unicarper-catalogue.pdf" target="_blank" rel="noopener noreferrer">
                Download full catalogue (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>

      <BigCta left="SEEN SOMETHING YOU LIKE?" right="LET'S SCOPE IT" />
    </Site>
  );
}
