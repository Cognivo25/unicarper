import Site from '../components/Site';
import { BigCta } from '../components/Icons';
import { pageMeta, breadcrumbLd, JsonLd } from '../seo';

export const metadata = pageMeta({
  path: '/references',
  title: 'Projects: Pools, Spas, Interiors & Landscape',
  description: 'Fiberglass pools, spa shells, hot tubs, residential interiors and landscape work by Unicarper. Browse the gallery or download the full catalogue.',
  keywords: ['fiberglass pool projects', 'spa and hot tub gallery', 'interior design portfolio Bangalore'],
});

const filters = [
  ['*', 'Show all'],
  ['.pools', 'Pools & jacuzzi'],
  ['.spas', 'Spas'],
  ['.interiors', 'Interiors'],
  ['.landscape', 'Landscape'],
  ['.pods', 'Pods'],
  ['.decor', 'FRP décor'],
];

// [title, reference type, filter classes, image in /unicarper/opt/]
const references = [
  ['Outdoor Pool & Deck', 'Concept reference', 'pools landscape', 'grid-1'],
  ['Resort-Style Interior Lounge', 'Concept reference', 'interiors', 'grid-2'],
  ['Terraced Landscape & Planting', 'Concept reference', 'landscape', 'grid-3'],
  ['Residential Living Room', 'Project reference', 'interiors', 'grid-4'],
  ['Pool & Coping Detail', 'Concept reference', 'pools', 'grid-5'],
  ['Indoor Spa & Wet Area', 'Concept reference', 'spas interiors', 'grid-6'],
  ['Fiberglass Pool with Deck', 'Product reference', 'pools', 'grid-frp-pool'],
  ['Jacuzzi with Hydrotherapy Jets', 'Product reference', 'pools spas', 'grid-jacuzzi'],
  ['Fiberglass Pool Shells', 'Product reference', 'pools', 'grid-shells'],
  ['A-Frame Modular Pod', 'Product reference', 'pods', 'grid-aframe'],
  ['FRP Relief Wall Art', 'Product reference', 'decor interiors', 'grid-wall-art'],
  ['FRP Planter Pots', 'Product reference', 'decor interiors', 'grid-pots-black'],
  ['Tiled Outdoor Swimming Pool', 'Product reference', 'pools', 'grid-pool'],
  ['Indoor Pool & Lounge', 'Concept reference', 'pools interiors', 'grid-indoor-pool'],
  ['Modern Modular Pod', 'Product reference', 'pods', 'grid-pod'],
  ['Terrace FRP Planters', 'Product reference', 'decor landscape', 'grid-planters'],
  ['Bronze-Finish FRP Pots', 'Product reference', 'decor landscape', 'grid-pots-copper'],
  ['Foyer & Feature Wall Art', 'Concept reference', 'decor interiors', 'grid-foyer'],
  ['Double-Height Living Room', 'Concept reference', 'interiors', 'grid-living'],
  ['Entrance Water Wall', 'Concept reference', 'landscape', 'grid-entrance'],
  ['Garden Walkway & Pergola', 'Concept reference', 'landscape', 'grid-garden'],
  ['Corner Whirlpool Spa', 'Product reference', 'spas interiors', 'grid-spa-corner'],
  ['Twin-Seat Spa with Headrests', 'Project reference', 'spas', 'grid-spa-headrest'],
  ['Moulded Spa Shell, Pre Fit-Out', 'Project reference', 'spas', 'grid-spa-shell'],
  ['Spa with Timber Cladding', 'Project reference', 'spas', 'grid-spa-twin'],
  ['A-Frame Cabin with Deck', 'Concept reference', 'pods', 'grid-pod-aframe-deck'],
  ['A-Frame Glazed Gable', 'Concept reference', 'pods', 'grid-pod-aframe-night'],
  ['Garden Glamping Pods', 'Concept reference', 'pods', 'grid-pod-garden'],
  ['Stacked Modular Pod Home', 'Concept reference', 'pods', 'grid-pod-container'],
  ['Sculpted Face Planter', 'Concept reference', 'decor interiors', 'grid-decor-face-pot'],
  ['Rooftop Planter Boxes', 'Concept reference', 'decor landscape', 'grid-decor-terrace-pots'],
];

// CC BY / BY-SA photos require visible credit.
const credits = [
  ['A-frame deck', 'Regriemer', 'CC BY-SA 3.0', 'https://commons.wikimedia.org/w/index.php?curid=21203839'],
  ['A-frame gable', 'joncutrer', 'CC BY 2.0', 'https://www.flickr.com/photos/47121680@N00/49302333323'],
  ['Glamping pods', 'ohefin', 'CC BY-SA 2.0', 'https://www.flickr.com/photos/47515486@N05/50522328653'],
  ['Modular pod home', 'etslee', 'CC BY 2.0', 'https://www.flickr.com/photos/78823104@N00/34261236113'],
  ['Corner spa', 'Toprural', 'CC BY-SA 2.0', 'https://www.flickr.com/photos/8920684@N05/3586398406'],
];

export default function References() {
  return (
    <Site>
      <JsonLd data={breadcrumbLd('References', '/references')} />
      <div className="tm-hero-area tm-hero-ptb">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tm-hero-content">
                <span className="tm-hero-subtitle">Gallery &amp; catalogue</span>
                <h1 className="tm-hero-title fs-220 tp-char-animation">References</h1>
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
            {references.map(([title, type, cats, img]) => (
              <div className={`col-xl-4 col-lg-6 col-md-6 grid-item ${cats}`} key={title}>
                <div className="tp-project-5-2-thumb anim-zoomin-wrap mb-30 p-relative">
                  <a href="/contact">
                    <span>
                      <img src={`/unicarper/opt/${img}.webp`} width="735" height="870" alt={title} />
                    </span>
                    <div className="tp-project-5-2-category">
                      <span>{type}</span>
                    </div>
                    <div className="tp-project-5-2-content">
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
              <a className="tp-btn-black-md" href="/assets/catelogue/Unicarper%20Brochure.pdf" target="_blank" rel="noopener noreferrer">
                Download full catalogue (PDF)
              </a>
              <p className="mt-30" style={{ fontSize: 13, opacity: 0.6 }}>
                Photo credits:{' '}
                {credits.map(([what, by, lic, url], i) => (
                  <span key={url}>{i > 0 && ' · '}{what} by <a href={url} target="_blank" rel="noopener noreferrer">{by}</a> ({lic})</span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>

      <BigCta left="SEEN SOMETHING YOU LIKE?" right="LET'S SCOPE IT" />
    </Site>
  );
}
