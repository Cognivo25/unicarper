import NavLinks from './NavLinks';

export default function Header() {
  return (
    <>
   
   <div id="loading" className="preloader-wrap">
      <div className="preloader-2 text-center">
         <span className="line line-1"></span>
         <span className="line line-2"></span>
         <span className="line line-3"></span>
         <span className="line line-4"></span>
         <span className="line line-5"></span>
         <span className="line line-6"></span>
         <span className="line line-7"></span>
         <span className="line line-8"></span>
         <span className="line line-9"></span>
         <div className="loader-text">Loading ...</div>
      </div>
   </div>
   <div className="back-to-top-wrapper">
      <button id="back_to_top" type="button" className="back-to-top-btn">
         <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 6L6 1L1 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
               strokeLinejoin="round" />
         </svg>
      </button>
   </div>
   <div className="tp-offcanvas-area">
      <div className="tp-offcanvas-wrapper">
         <div className="tp-offcanvas-top d-flex align-items-center justify-content-between">
                       <div className="tp-offcanvas-logo">
               <a href="/">
                  <img className="logo-1" src="/unicarper/opt/logo.png" alt="Unicarper Design & Build" />
                  <img className="logo-2" src="/unicarper/opt/logo-white.png" alt="Unicarper Design & Build" />
               </a>
            </div>
            <div className="tp-offcanvas-close">
               <button className="tp-offcanvas-close-btn">
                  <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M9.19141 9.80762L27.5762 28.1924" stroke="currentColor" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                     <path d="M9.19141 28.1924L27.5762 9.80761" stroke="currentColor" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
               </button>
            </div>
         </div>
         <div className="tp-offcanvas-main">
            <div className="tp-offcanvas-content">
               <h3 className="tp-offcanvas-title">Hello There!</h3>
               <p>Interiors, outdoor works, pools, landscapes, security and PMC, run as one coordinated programme from Bangalore.</p>
            </div>
            <div className="tp-main-menu-mobile d-xl-none"></div>
            <div className="tp-offcanvas-gallery">
               <div className="row gx-2">
                  <div className="col-md-3 col-3">
                     <div className="tp-offcanvas-gallery-img fix">
                        <a href="/references"><img src="/unicarper/opt/thumb-1.webp" width="80" height="80" loading="lazy" decoding="async" alt="" /></a>
                     </div>
                  </div>
                  <div className="col-md-3 col-3">
                     <div className="tp-offcanvas-gallery-img fix">
                        <a href="/references"><img src="/unicarper/opt/thumb-2.webp" width="80" height="80" loading="lazy" decoding="async" alt="" /></a>
                     </div>
                  </div>
                  <div className="col-md-3 col-3">
                     <div className="tp-offcanvas-gallery-img fix">
                        <a href="/references"><img src="/unicarper/opt/thumb-3.webp" width="80" height="80" loading="lazy" decoding="async" alt="" /></a>
                     </div>
                  </div>
                  <div className="col-md-3 col-3">
                     <div className="tp-offcanvas-gallery-img fix">
                        <a href="/references"><img src="/unicarper/opt/thumb-4.webp" width="80" height="80" loading="lazy" decoding="async" alt="" /></a>
                     </div>
                  </div>
               </div>
            </div>
            <div className="tp-offcanvas-contact">
               <h3 className="tp-offcanvas-title sm">Information</h3>
               <ul>
                  <li><a href="tel:+919900096972">+91-9900096972</a></li>
                  <li><a href="mailto:projects@unicarper.com">projects@unicarper.com</a></li>
                  <li><a href="https://www.google.com/maps?q=Byappanahalli,+Bengaluru,+Karnataka+562149" target="_blank" rel="noopener noreferrer">Sy. no. 81, Srinivasa Nagar, Byappanahalli, Bengaluru 562149</a></li>
               </ul>
            </div>
         </div>
      </div>
   </div>
   <div className="body-overlay"></div>
   <header>
      <div id="header-sticky" className="tp-header-3-area mt-35 z-index-5">
            <div className="container container-1740">
               <div className="row align-items-center">
                  <div className="col-xl-3 col-lg-6 col-md-6 col-6">
                     <div className="tp-header-logo tp-header-3-logo">
                        <a className="logo-1" href="/"><img src="/unicarper/opt/logo.png" alt="Unicarper Design & Build" /></a>
                        <a className="logo-2" href="/"><img src="/unicarper/opt/logo-white.png" alt="Unicarper Design & Build" /></a>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 d-none d-xl-block">
                     <div className="tp-header-3-menu-wrap text-center">
                        <div className="tp-header-3-menu-box d-inline-flex align-items-center justify-content-between">
                           <div className="tp-header-3-menu header-main-menu">
                              <nav className="tp-main-menu-content">
                                 <NavLinks />
                              </nav>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-6 col-6">
                     <div className="tp-header-3-right d-flex align-items-center justify-content-end">
                        <div className="tp-header-3-social d-none d-sm-block">
                           <a href="tel:+919900096972" aria-label="Call Unicarper"><i className="fa-solid fa-phone"></i></a>
                           <a href="mailto:projects@unicarper.com" aria-label="Email Unicarper"><i className="fa-solid fa-envelope"></i></a>
                        </div>
                        <button className="tp-header-3-bar tp-offcanvas-open-btn d-xl-none"><i className="fa-solid fa-bars"></i></button>
                     </div>
                  </div>
               </div>
            </div>
      </div>
   </header>
    </>
  );
}
