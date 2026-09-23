import Site from "./components/Site";

export default function Home() {
  return (
    <Site>
            <div id="top" className="tp-hero-3-area tp-hero-3-ptb fix">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-12">
                        <div className="tp-hero-3-content-box text-center p-relative">
                           <div className="tp-hero-3-circle-shape">
                              <span></span>
                           </div>
                           <h1 className="tp-hero-3-title tp_reveal_anim">
                              <span className="tp-reveal-line">Spaces that work</span>{' '}
                              <span className="tp-reveal-line">harder for you.</span>
                           </h1>
                           <span className="tp-hero-3-category tp_reveal_anim">design / engineering / fabrication / pools / modular pods / water infrastructure</span>
                           <a className="tp-btn-black-2" href="/contact">
                              Discuss Your Project
                              <span className="p-relative">
                                 <svg className="svg-icon" width="10" height="10" viewBox="0 0 10 10" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                       d="M9.86041 4.6429C9.94985 4.7377 10 4.86575 10 4.9992C10 5.13264 9.94985 5.2607 9.86041 5.35551L5.57586 9.85624C5.48448 9.94804 5.36309 9.99948 5.23667 10C5.17349 9.99969 5.11092 9.98704 5.0522 9.96246C4.96556 9.9243 4.89163 9.85991 4.83974 9.77759C4.78785 9.69527 4.76032 9.59866 4.76061 9.49994V5.49928H0.476061C0.349802 5.49928 0.228714 5.4466 0.139435 5.35281C0.0501564 5.25903 0 5.13183 0 4.9992C0 4.86657 0.0501564 4.73937 0.139435 4.64559C0.228714 4.55181 0.349802 4.49912 0.476061 4.49912H4.76061V0.49847C4.76032 0.399742 4.78785 0.303131 4.83974 0.220813C4.89163 0.138494 4.96556 0.0741515 5.0522 0.0358946C5.14013 -0.000133693 5.23598 -0.00927405 5.32865 0.00953239C5.42132 0.0283378 5.50703 0.0743215 5.57586 0.142163L9.86041 4.6429Z"
                                       fill="currentcolor" />
                                 </svg>
                                 <svg className="svg-bg" width="30" height="30" viewBox="0 0 30 30" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                       d="M14.2257 0.947522C14.6258 0.457905 15.3742 0.457905 15.7743 0.947522L16.8781 2.29817C17.181 2.66879 17.704 2.77283 18.1256 2.54633L19.6623 1.72088C20.2193 1.42165 20.9107 1.70806 21.093 2.31352L21.5959 3.98376C21.7339 4.44207 22.1773 4.73834 22.6535 4.69044L24.3891 4.51587C25.0182 4.45258 25.5474 4.98179 25.4841 5.61093L25.3096 7.34647C25.2617 7.8227 25.5579 8.2661 26.0162 8.40409L27.6865 8.90697C28.2919 9.08926 28.5783 9.7807 28.2791 10.3377L27.4537 11.8744C27.2272 12.296 27.3312 12.819 27.7018 13.1219L29.0525 14.2257C29.5421 14.6258 29.5421 15.3742 29.0525 15.7743L27.7018 16.8781C27.3312 17.181 27.2272 17.704 27.4537 18.1256L28.2791 19.6623C28.5783 20.2193 28.2919 20.9107 27.6865 21.093L26.0162 21.5959C25.5579 21.7339 25.2617 22.1773 25.3096 22.6535L25.4841 24.3891C25.5474 25.0182 25.0182 25.5474 24.3891 25.4841L22.6535 25.3096C22.1773 25.2617 21.7339 25.5579 21.5959 26.0162L21.093 27.6865C20.9107 28.2919 20.2193 28.5783 19.6623 28.2791L18.1256 27.4537C17.704 27.2272 17.181 27.3312 16.8781 27.7018L15.7743 29.0525C15.3742 29.5421 14.6258 29.5421 14.2257 29.0525L13.1219 27.7018C12.819 27.3312 12.296 27.2272 11.8744 27.4537L10.3377 28.2791C9.7807 28.5783 9.08926 28.2919 8.90697 27.6865L8.40409 26.0162C8.2661 25.5579 7.8227 25.2617 7.34647 25.3096L5.61093 25.4841C4.98179 25.5474 4.45258 25.0182 4.51587 24.3891L4.69044 22.6535C4.73834 22.1773 4.44207 21.7339 3.98376 21.5959L2.31352 21.093C1.70806 20.9107 1.42165 20.2193 1.72088 19.6623L2.54633 18.1256C2.77283 17.704 2.66879 17.181 2.29817 16.8781L0.947522 15.7743C0.457905 15.3742 0.457905 14.6258 0.947522 14.2257L2.29817 13.1219C2.66879 12.819 2.77283 12.296 2.54633 11.8744L1.72088 10.3377C1.42165 9.7807 1.70806 9.08926 2.31352 8.90697L3.98376 8.40409C4.44207 8.2661 4.73834 7.8227 4.69044 7.34647L4.51587 5.61093C4.45258 4.98179 4.98179 4.45258 5.61093 4.51587L7.34647 4.69044C7.8227 4.73834 8.2661 4.44207 8.40409 3.98376L8.90697 2.31352C9.08926 1.70806 9.7807 1.42165 10.3377 1.72088L11.8744 2.54633C12.296 2.77283 12.819 2.66879 13.1219 2.29817L14.2257 0.947522Z"
                                       fill="currentColor" />
                                 </svg>
                              </span>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="tp-gallery-area fix p-relative">
               <div className="tp-gallery-shape-1">
                  <img className="img-1" src="/assets/img/home-03/gallery/gal-shape-1.png" alt="" />
               </div>
               <div className="tp-gallery-shape-2">
                  <img className="img-1" src="/assets/img/home-03/gallery/gal-shape-2.png" alt="" />
               </div>
               <div className="container-fluid">
                  <div className="row">
                     <div className="col-xl-12">
                        <div className="tp-gallery-slider-wrap">
                           <div className="swiper-container tp-gallery-slider-active">
                              <div className="swiper-wrapper tp-gallery-titming">
                                 {[
                                    ['Indoor swimming pool', 1], ['A-frame modular pod', 2], ['Residential living room interior', 3],
                                    ['Entrance facade with water wall', 'entrance'], ['Landscaped garden walkway', 5], ['FRP planter pots', 6],
                                    ['FRP relief wall art', 7], ['Commercial office interior', 8], ['FRP underground water sump', 9],
                                    ['Industrial facility fit-out', 10],
                                 ].map(([alt, n]) => (
                                    <div className="swiper-slide" key={n}>
                                       <div className="tp-gallery-item">
                                          <img src={`/unicarper/opt/hero-${n}.webp`} width="420" height="740" loading="lazy" decoding="async" alt={alt} />
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
            <div id="about" className="tp-about-3-area pt-120 pb-110">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-11">
                        <div className="tp-about-3-title-box">
                           <span className="tp-section-subtitle-2 tp_fade_bottom">
                              <span>
                                 <svg width="13" height="44" viewBox="0 0 13 44" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                       d="M12.5117 42.6396C11.0306 41.4515 9.77734 40.0924 8.75195 38.5625C7.71029 37.0326 6.87207 35.3887 6.2373 33.6309C5.58626 31.8568 5.1224 29.9932 4.8457 28.04C4.55273 26.0869 4.40625 24.0768 4.40625 22.0098C4.40625 19.9264 4.55273 17.8919 4.8457 15.9062C5.13867 13.9206 5.61882 12.0407 6.28613 10.2666C6.93717 8.47624 7.7998 6.81608 8.87402 5.28613C9.93197 3.73991 11.2259 2.36458 12.7559 1.16016L12.0967 0.500977C10.4202 1.68913 8.86589 3.06445 7.43359 4.62695C6.0013 6.18945 4.76432 7.8903 3.72266 9.72949C2.68099 11.5524 1.86719 13.5055 1.28125 15.5889C0.695312 17.6559 0.402344 19.7962 0.402344 22.0098C0.402344 24.1908 0.687174 26.3066 1.25684 28.3574C1.8265 30.3919 2.62402 32.3206 3.64941 34.1436C4.65853 35.9665 5.86296 37.651 7.2627 39.1973C8.66243 40.7435 10.1924 42.1107 11.8525 43.2988L12.5117 42.6396Z"
                                       fill="#4F4F56" />
                                 </svg>
                              </span>
                              <span className="tp-subtitle-text tp_text_invert">Engineering | Fabrication</span>
                              <span>
                                 <svg width="13" height="44" viewBox="0 0 13 44" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                       d="M0.488281 42.6396C1.9694 41.4515 3.22266 40.0924 4.24805 38.5625C5.28971 37.0326 6.12793 35.3887 6.7627 33.6309C7.41374 31.8568 7.8776 29.9932 8.1543 28.04C8.44727 26.0869 8.59375 24.0768 8.59375 22.0098C8.59375 19.9264 8.44727 17.8919 8.1543 15.9062C7.86133 13.9206 7.38118 12.0407 6.71387 10.2666C6.06283 8.47624 5.2002 6.81608 4.12598 5.28613C3.06803 3.73991 1.77409 2.36458 0.244141 1.16016L0.90332 0.500977C2.57975 1.68913 4.13411 3.06445 5.56641 4.62695C6.9987 6.18945 8.23568 7.8903 9.27734 9.72949C10.319 11.5524 11.1328 13.5055 11.7188 15.5889C12.3047 17.6559 12.5977 19.7962 12.5977 22.0098C12.5977 24.1908 12.3128 26.3066 11.7432 28.3574C11.1735 30.3919 10.376 32.3206 9.35059 34.1436C8.34147 35.9665 7.13704 37.651 5.7373 39.1973C4.33757 40.7435 2.80762 42.1107 1.14746 43.2988L0.488281 42.6396Z"
                                       fill="#4F4F56" />
                                 </svg>
                              </span>
                           </span>
                           <h4 className="tp-section-title-90 tp_text_invert tp_fade_bottom">
                              We design. We build. <br />We deliver.
                           </h4>
                        </div>
                     </div>
                  </div>
                  <div className="row align-items-center">
                     <div className="col-xl-6 col-lg-6 col-md-4">
                        <div className="tp-about-3-shape text-lg-end">
                           <img src="/assets/img/home-03/about/ab-shape-img.png" alt="" />
                        </div>
                     </div>
                     <div className="col-xl-6 col-lg-6 col-md-8">
                        <div className="tp-about-3-content">
                           <p className="mb-30 tp_fade_bottom">
                              Unicarper is a full-service interior design and engineering firm headquartered in Bengaluru, delivering end-to-end design, build and fabrication across residential, commercial and industrial projects.
                           </p>
                           <p className="mb-45 tp_fade_bottom">
                              With our own 15,000 sq ft production facility, we control the entire build, from MS and SS fabrication to wood joinery and specialty finishes, so quality and timelines stay in our hands.
                           </p>
                           <a className="tp-btn-black-2 tp_fade_bottom" href="/about">
                              See How We Work
                              <span className="p-relative">
                                 <svg className="svg-icon" width="10" height="10" viewBox="0 0 10 10" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                       d="M9.86041 4.6429C9.94985 4.7377 10 4.86575 10 4.9992C10 5.13264 9.94985 5.2607 9.86041 5.35551L5.57586 9.85624C5.48448 9.94804 5.36309 9.99948 5.23667 10C5.17349 9.99969 5.11092 9.98704 5.0522 9.96246C4.96556 9.9243 4.89163 9.85991 4.83974 9.77759C4.78785 9.69527 4.76032 9.59866 4.76061 9.49994V5.49928H0.476061C0.349802 5.49928 0.228714 5.4466 0.139435 5.35281C0.0501564 5.25903 0 5.13183 0 4.9992C0 4.86657 0.0501564 4.73937 0.139435 4.64559C0.228714 4.55181 0.349802 4.49912 0.476061 4.49912H4.76061V0.49847C4.76032 0.399742 4.78785 0.303131 4.83974 0.220813C4.89163 0.138494 4.96556 0.0741515 5.0522 0.0358946C5.14013 -0.000133693 5.23598 -0.00927405 5.32865 0.00953239C5.42132 0.0283378 5.50703 0.0743215 5.57586 0.142163L9.86041 4.6429Z"
                                       fill="currentcolor" />
                                 </svg>
                                 <svg className="svg-bg" width="30" height="30" viewBox="0 0 30 30" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                       d="M14.2257 0.947522C14.6258 0.457905 15.3742 0.457905 15.7743 0.947522L16.8781 2.29817C17.181 2.66879 17.704 2.77283 18.1256 2.54633L19.6623 1.72088C20.2193 1.42165 20.9107 1.70806 21.093 2.31352L21.5959 3.98376C21.7339 4.44207 22.1773 4.73834 22.6535 4.69044L24.3891 4.51587C25.0182 4.45258 25.5474 4.98179 25.4841 5.61093L25.3096 7.34647C25.2617 7.8227 25.5579 8.2661 26.0162 8.40409L27.6865 8.90697C28.2919 9.08926 28.5783 9.7807 28.2791 10.3377L27.4537 11.8744C27.2272 12.296 27.3312 12.819 27.7018 13.1219L29.0525 14.2257C29.5421 14.6258 29.5421 15.3742 29.0525 15.7743L27.7018 16.8781C27.3312 17.181 27.2272 17.704 27.4537 18.1256L28.2791 19.6623C28.5783 20.2193 28.2919 20.9107 27.6865 21.093L26.0162 21.5959C25.5579 21.7339 25.2617 22.1773 25.3096 22.6535L25.4841 24.3891C25.5474 25.0182 25.0182 25.5474 24.3891 25.4841L22.6535 25.3096C22.1773 25.2617 21.7339 25.5579 21.5959 26.0162L21.093 27.6865C20.9107 28.2919 20.2193 28.5783 19.6623 28.2791L18.1256 27.4537C17.704 27.2272 17.181 27.3312 16.8781 27.7018L15.7743 29.0525C15.3742 29.5421 14.6258 29.5421 14.2257 29.0525L13.1219 27.7018C12.819 27.3312 12.296 27.2272 11.8744 27.4537L10.3377 28.2791C9.7807 28.5783 9.08926 28.2919 8.90697 27.6865L8.40409 26.0162C8.2661 25.5579 7.8227 25.2617 7.34647 25.3096L5.61093 25.4841C4.98179 25.5474 4.45258 25.0182 4.51587 24.3891L4.69044 22.6535C4.73834 22.1773 4.44207 21.7339 3.98376 21.5959L2.31352 21.093C1.70806 20.9107 1.42165 20.2193 1.72088 19.6623L2.54633 18.1256C2.77283 17.704 2.66879 17.181 2.29817 16.8781L0.947522 15.7743C0.457905 15.3742 0.457905 14.6258 0.947522 14.2257L2.29817 13.1219C2.66879 12.819 2.77283 12.296 2.54633 11.8744L1.72088 10.3377C1.42165 9.7807 1.70806 9.08926 2.31352 8.90697L3.98376 8.40409C4.44207 8.2661 4.73834 7.8227 4.69044 7.34647L4.51587 5.61093C4.45258 4.98179 4.98179 4.45258 5.61093 4.51587L7.34647 4.69044C7.8227 4.73834 8.2661 4.44207 8.40409 3.98376L8.90697 2.31352C9.08926 1.70806 9.7807 1.42165 10.3377 1.72088L11.8744 2.54633C12.296 2.77283 12.819 2.66879 13.1219 2.29817L14.2257 0.947522Z"
                                       fill="currentColor" />
                                 </svg>
                              </span>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            
            <div id="projects" className="tp-project-3-area pt-130 black-bg">
               <div className="container container-1720">
                  <div className="row justify-content-center">
                     <div className="col-xl-7">
                        <div className="tp-project-3-title-box p-relative mb-150">
                           <h4 className="tp-section-title-200 tp_reveal_anim">
                              Our <span>Work</span>
                           </h4>
                           <div className="tp-project-3-btn-box">
                              <a className="tp-btn-zikzak p-relative" href="/references">
                                 <span className="zikzak-content">
                                    View <br /> References
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
                                       <path
                                          d="M16.2434 8.16465C16.3866 8.31677 16.4668 8.52224 16.4668 8.73637C16.4668 8.9505 16.3866 9.15597 16.2434 9.30811L9.38818 16.53C9.24196 16.6773 9.04774 16.7599 8.84546 16.7607C8.74439 16.7602 8.64426 16.7399 8.55031 16.7005C8.41169 16.6392 8.2934 16.5359 8.21038 16.4038C8.12736 16.2717 8.0833 16.1167 8.08378 15.9583V9.53881H1.22849C1.02648 9.53881 0.832739 9.45428 0.689893 9.30378C0.547047 9.15329 0.466797 8.9492 0.466797 8.73637C0.466797 8.52356 0.547047 8.31945 0.689893 8.16897C0.832739 8.01848 1.02648 7.93395 1.22849 7.93395H8.08378V1.51445C8.0833 1.35603 8.12736 1.20101 8.21038 1.06892C8.2934 0.936828 8.41169 0.833584 8.55031 0.772196C8.691 0.714385 8.84436 0.699718 8.99264 0.729895C9.14092 0.760071 9.27805 0.833857 9.38818 0.942715L16.2434 8.16465Z"
                                          fill="#19191A" />
                                    </svg>
                                 </span>
                                 <svg className="anim" width="160" height="161" viewBox="0 0 160 161" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                       d="M73.023 3.97715C76.6245 -0.442502 83.3755 -0.442502 86.977 3.97715L88.8998 6.33684C91.6265 9.68311 96.3451 10.6222 100.145 8.57493L102.813 7.13788C107.829 4.43534 114.063 7.01587 115.701 12.4734L116.588 15.4276C117.828 19.5569 121.822 22.227 126.111 21.7943L129.147 21.4881C134.809 20.9169 139.573 25.6784 139.005 31.3408L138.693 34.4529C138.263 38.7355 140.926 42.7227 145.046 43.9669L148.008 44.8612C153.449 46.5041 156.024 52.7165 153.34 57.7265L151.854 60.5019C149.824 64.2914 150.757 68.9873 154.082 71.7123L156.507 73.6991C160.9 77.2998 160.9 84.0202 156.507 87.6209L154.082 89.6077C150.757 92.3327 149.824 97.0286 151.854 100.818L153.34 103.593C156.024 108.604 153.449 114.816 148.008 116.459L145.046 117.353C140.926 118.597 138.263 122.585 138.693 126.867L139.005 129.979C139.573 135.642 134.809 140.403 129.147 139.832L126.111 139.526C121.822 139.093 117.828 141.763 116.588 145.892L115.701 148.847C114.063 154.304 107.829 156.885 102.813 154.182L100.145 152.745C96.3451 150.698 91.6265 151.637 88.8998 154.983L86.9769 157.343C83.3755 161.762 76.6245 161.762 73.023 157.343L71.1002 154.983C68.3735 151.637 63.6549 150.698 59.8547 152.745L57.1873 154.182C52.1708 156.885 45.9372 154.304 44.2988 148.847L43.4119 145.892C42.1722 141.763 38.1783 139.093 33.8887 139.526L30.8534 139.832C25.1913 140.403 20.4271 135.642 20.995 129.979L21.3071 126.867C21.7367 122.585 19.0739 118.597 14.9536 117.353L11.9917 116.459C6.55087 114.816 3.97613 108.604 6.65971 103.593L8.14628 100.818C10.1761 97.0286 9.24252 92.3327 5.91763 89.6077L3.49338 87.6209C-0.900073 84.0202 -0.900072 77.2998 3.49338 73.6991L5.91763 71.7123C9.24252 68.9873 10.1761 64.2914 8.14628 60.5019L6.65971 57.7265C3.97613 52.7165 6.55087 46.5041 11.9917 44.8612L14.9536 43.9669C19.0739 42.7227 21.7367 38.7355 21.3071 34.4529L20.995 31.3408C20.4271 25.6784 25.1913 20.9169 30.8534 21.4881L33.8887 21.7943C38.1783 22.227 42.1722 19.5569 43.4119 15.4275L44.2988 12.4734C45.9372 7.01587 52.1708 4.43534 57.1873 7.13788L59.8547 8.57493C63.6549 10.6222 68.3735 9.68311 71.1002 6.33684L73.023 3.97715Z"
                                       fill="white" />
                                 </svg>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-xl-12">
                        <div className="tp-project-3-wrap">
                           <div className="row">
                              <div className="col-xl-4 col-lg-4 col-md-6">
                                 <div className="tp-project-3-thumb pro-img-1">
                                    <img src="/unicarper/opt/ref-frp-pool.webp" width="570" height="720" loading="lazy" decoding="async" alt="Fiberglass swimming pool with deck by Unicarper" />
                                 </div>
                              </div>
                              <div className="col-xl-4 col-lg-4 col-md-12 order-1 order-lg-0">
                                 <div className="tp-project-3-content text-center">
                                    <span className="tp-project-3-meta">Product reference . Pools</span>
                                    <h4 className="tp-project-3-title-sm"><a href="/references">Fiberglass Pool</a></h4>
                                    <a className="tp-btn-project-sm" href="/references">View Reference</a>
                                 </div>
                                 <div className="tp-project-3-border color-1 text-center">
                                    <span></span>
                                 </div>
                              </div>
                              <div className="col-xl-4 col-lg-4 col-md-6 order-0 order-lg-0">
                                 <div className="tp-project-3-thumb pro-img-2">
                                    <img src="/unicarper/opt/ref-shells.webp" width="570" height="720" loading="lazy" decoding="async" alt="Fiberglass pool shells ready for installation" />
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="tp-project-3-wrap">
                           <div className="row">
                              <div className="col-xl-4 col-lg-4 col-md-6">
                                 <div className="tp-project-3-thumb pro-img-1">
                                    <img src="/unicarper/opt/ref-3.webp" width="570" height="720" loading="lazy" decoding="async" alt="Residential interior design, Bengaluru" />
                                 </div>
                              </div>
                              <div className="col-xl-4 col-lg-4 col-md-12 order-1 order-lg-0">
                                 <div className="tp-project-3-content text-center">
                                    <span className="tp-project-3-meta">Concept reference . Interiors</span>
                                    <h4 className="tp-project-3-title-sm"><a href="/references">Interiors</a></h4>
                                    <a className="tp-btn-project-sm" href="/references">View Reference</a>
                                 </div>
                                 <div className="tp-project-3-border color-2 text-center">
                                    <span></span>
                                 </div>
                              </div>
                              <div className="col-xl-4 col-lg-4 col-md-6 order-0 order-lg-0">
                                 <div className="tp-project-3-thumb pro-img-2">
                                    <img src="/unicarper/opt/ref-4.webp" width="570" height="720" loading="lazy" decoding="async" alt="Interior living space concept" />
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="tp-project-3-wrap">
                           <div className="row">
                              <div className="col-xl-4 col-lg-4 col-md-6">
                                 <div className="tp-project-3-thumb pro-img-1">
                                    <img src="/unicarper/opt/ref-5.webp" width="570" height="720" loading="lazy" decoding="async" alt="Landscape design with planting" />
                                 </div>
                              </div>
                              <div className="col-xl-4 col-lg-4 col-md-12 order-1 order-lg-0">
                                 <div className="tp-project-3-content text-center">
                                    <span className="tp-project-3-meta">Concept reference . Landscape</span>
                                    <h4 className="tp-project-3-title-sm"><a href="/references">Landscape</a></h4>
                                    <a className="tp-btn-project-sm" href="/references">View Reference</a>
                                 </div>
                                 <div className="tp-project-3-border color-3 text-center">
                                    <span></span>
                                 </div>
                              </div>
                              <div className="col-xl-4 col-lg-4 col-md-6 order-0 order-lg-0">
                                 <div className="tp-project-3-thumb pro-img-2">
                                    <img src="/unicarper/opt/ref-garden.webp" width="570" height="720" loading="lazy" decoding="async" alt="Landscaped garden walkway with pergola" />
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="tp-project-3-wrap">
                           <div className="row">
                              <div className="col-xl-4 col-lg-4 col-md-6">
                                 <div className="tp-project-3-thumb pro-img-1">
                                    <img src="/unicarper/opt/ref-indoor-pool.webp" width="570" height="720" loading="lazy" decoding="async" alt="Indoor swimming pool with lounge" />
                                 </div>
                              </div>
                              <div className="col-xl-4 col-lg-4 col-md-12 order-1 order-lg-0">
                                 <div className="tp-project-3-content text-center">
                                    <span className="tp-project-3-meta">Product reference . Pools &amp; spas</span>
                                    <h4 className="tp-project-3-title-sm"><a href="/references">Pool &amp; Spa</a></h4>
                                    <a className="tp-btn-project-sm" href="/references">View Reference</a>
                                 </div>
                                 <div className="tp-project-3-border color-3 text-center">
                                    <span></span>
                                 </div>
                              </div>
                              <div className="col-xl-4 col-lg-4 col-md-6 order-0 order-lg-0">
                                 <div className="tp-project-3-thumb pro-img-2">
                                    <img src="/unicarper/opt/ref-8.webp" width="570" height="720" loading="lazy" decoding="async" alt="Indoor spa lounge concept" />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="tp-video-3-area">
               <div className="tp-video-3-wrap p-relative">
                  <img data-speed=".7" className="play-video" src="/unicarper/opt/banner-pool.webp" width="1600" height="900" loading="lazy" decoding="async" alt="Unicarper design and build" style={{ width: '100%', height: '85vh', objectFit: 'cover' }} />
               </div>
            </div>
            <div id="services" className="tp-service-3-area pt-130 pb-130">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-9">
                        <div className="tp-service-3-title-box mb-60 p-relative">
                           <div className="tp-service-3-icon">
                              <img src="/assets/img/home-03/service/sv-icon-1.png" alt="" />
                           </div>
                           <span className="tp-section-subtitle-2 tp_fade_bottom">
                              <span>
                                 <svg width="13" height="44" viewBox="0 0 13 44" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                       d="M12.5117 42.6396C11.0306 41.4515 9.77734 40.0924 8.75195 38.5625C7.71029 37.0326 6.87207 35.3887 6.2373 33.6309C5.58626 31.8568 5.1224 29.9932 4.8457 28.04C4.55273 26.0869 4.40625 24.0768 4.40625 22.0098C4.40625 19.9264 4.55273 17.8919 4.8457 15.9062C5.13867 13.9206 5.61882 12.0407 6.28613 10.2666C6.93717 8.47624 7.7998 6.81608 8.87402 5.28613C9.93197 3.73991 11.2259 2.36458 12.7559 1.16016L12.0967 0.500977C10.4202 1.68913 8.86589 3.06445 7.43359 4.62695C6.0013 6.18945 4.76432 7.8903 3.72266 9.72949C2.68099 11.5524 1.86719 13.5055 1.28125 15.5889C0.695312 17.6559 0.402344 19.7962 0.402344 22.0098C0.402344 24.1908 0.687174 26.3066 1.25684 28.3574C1.8265 30.3919 2.62402 32.3206 3.64941 34.1436C4.65853 35.9665 5.86296 37.651 7.2627 39.1973C8.66243 40.7435 10.1924 42.1107 11.8525 43.2988L12.5117 42.6396Z"
                                       fill="#4F4F56" />
                                 </svg>
                              </span>
                              <span className="tp-subtitle-text tp_text_invert">People | Spaces | Possibilities</span>
                              <span>
                                 <svg width="13" height="44" viewBox="0 0 13 44" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                       d="M0.488281 42.6396C1.9694 41.4515 3.22266 40.0924 4.24805 38.5625C5.28971 37.0326 6.12793 35.3887 6.7627 33.6309C7.41374 31.8568 7.8776 29.9932 8.1543 28.04C8.44727 26.0869 8.59375 24.0768 8.59375 22.0098C8.59375 19.9264 8.44727 17.8919 8.1543 15.9062C7.86133 13.9206 7.38118 12.0407 6.71387 10.2666C6.06283 8.47624 5.2002 6.81608 4.12598 5.28613C3.06803 3.73991 1.77409 2.36458 0.244141 1.16016L0.90332 0.500977C2.57975 1.68913 4.13411 3.06445 5.56641 4.62695C6.9987 6.18945 8.23568 7.8903 9.27734 9.72949C10.319 11.5524 11.1328 13.5055 11.7188 15.5889C12.3047 17.6559 12.5977 19.7962 12.5977 22.0098C12.5977 24.1908 12.3128 26.3066 11.7432 28.3574C11.1735 30.3919 10.376 32.3206 9.35059 34.1436C8.34147 35.9665 7.13704 37.651 5.7373 39.1973C4.33757 40.7435 2.80762 42.1107 1.14746 43.2988L0.488281 42.6396Z"
                                       fill="#4F4F56" />
                                 </svg>
                              </span>
                           </span>
                           <h4 className="tp-section-title-90 tp_text_invert tp_fade_bottom">What we <br /> deliver</h4>
                        </div>
                     </div>
                  </div>
                  <div className="tp-service-3-wrap tp_fade_bottom">
                     <div className="row align-items-start">
                        <div className="col-xl-3 col-lg-3">
                           <div className="tp-service-3-title-box">
                              <h4 className="tp-service-3-title"><a href="/services">Residential &amp; Commercial Interiors</a></h4>
                           </div>
                        </div>
                        <div className="col-xl-7 col-lg-7">
                           <div className="tp-service-3-content">
                              <p>
                                 Bespoke homes, villaments and turnkey residences, plus offices, retail and hospitality spaces built for brand and productivity.
                              </p>
                              <div className="tp-service-3-category">
                                 <span>Residential</span>
                                 <span>Commercial</span>
                                 <span>Turnkey</span>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-2 col-lg-2">
                           <div className="tp-service-3-btn-box text-start text-md-end">
                              <a className="tp-btn-zikzak-sm p-relative" href="/services">
                                 <span className="zikzak-content">
                                    See <br /> Details
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
                                       <path
                                          d="M16.2434 8.16465C16.3866 8.31677 16.4668 8.52224 16.4668 8.73637C16.4668 8.9505 16.3866 9.15597 16.2434 9.30811L9.38818 16.53C9.24196 16.6773 9.04774 16.7599 8.84546 16.7607C8.74439 16.7602 8.64426 16.7399 8.55031 16.7005C8.41169 16.6392 8.2934 16.5359 8.21038 16.4038C8.12736 16.2717 8.0833 16.1167 8.08378 15.9583V9.53881H1.22849C1.02648 9.53881 0.832739 9.45428 0.689893 9.30378C0.547047 9.15329 0.466797 8.9492 0.466797 8.73637C0.466797 8.52356 0.547047 8.31945 0.689893 8.16897C0.832739 8.01848 1.02648 7.93395 1.22849 7.93395H8.08378V1.51445C8.0833 1.35603 8.12736 1.20101 8.21038 1.06892C8.2934 0.936828 8.41169 0.833584 8.55031 0.772196C8.691 0.714385 8.84436 0.699718 8.99264 0.729895C9.14092 0.760071 9.27805 0.833857 9.38818 0.942715L16.2434 8.16465Z"
                                          fill="currentColor" />
                                    </svg>
                                 </span>
                                 <span>
                                    <svg className="svg-bg" xmlns="http://www.w3.org/2000/svg" width="130" height="130" viewBox="0 0 130 130" fill="none">
                                       <path d="M58.3086 3.18813C61.7663 -1.04295 68.2337 -1.04295 71.6914 3.18813V3.18813C74.3088 6.39089 78.8286 7.28993 82.4723 5.33258V5.33258C87.286 2.74677 93.2611 5.22176 94.8365 10.454V10.454C96.0289 14.4145 99.8606 16.9748 103.976 16.5608V16.5608C109.413 16.014 113.986 20.5872 113.439 26.024V26.024C113.025 30.1394 115.585 33.9711 119.546 35.1635V35.1635C124.778 36.7389 127.253 42.714 124.667 47.5277V47.5277C122.71 51.1714 123.609 55.6912 126.812 58.3086V58.3086C131.043 61.7663 131.043 68.2337 126.812 71.6914V71.6914C123.609 74.3088 122.71 78.8286 124.667 82.4723V82.4723C127.253 87.286 124.778 93.2611 119.546 94.8365V94.8365C115.585 96.0289 113.025 99.8606 113.439 103.976V103.976C113.986 109.413 109.413 113.986 103.976 113.439V113.439C99.8606 113.025 96.0289 115.585 94.8365 119.546V119.546C93.2611 124.778 87.286 127.253 82.4723 124.667V124.667C78.8286 122.71 74.3088 123.609 71.6914 126.812V126.812C68.2337 131.043 61.7663 131.043 58.3086 126.812V126.812C55.6912 123.609 51.1714 122.71 47.5277 124.667V124.667C42.714 127.253 36.7389 124.778 35.1635 119.546V119.546C33.9711 115.585 30.1394 113.025 26.024 113.439V113.439C20.5872 113.986 16.014 109.413 16.5608 103.976V103.976C16.9748 99.8606 14.4145 96.0289 10.454 94.8365V94.8365C5.22176 93.2611 2.74677 87.286 5.33258 82.4723V82.4723C7.28993 78.8286 6.39089 74.3088 3.18813 71.6914V71.6914C-1.04295 68.2337 -1.04295 61.7663 3.18813 58.3086V58.3086C6.39089 55.6912 7.28993 51.1714 5.33258 47.5277V47.5277C2.74677 42.714 5.22176 36.7389 10.454 35.1635V35.1635C14.4145 33.9711 16.9748 30.1394 16.5608 26.024V26.024C16.014 20.5872 20.5872 16.014 26.024 16.5608V16.5608C30.1394 16.9748 33.9711 14.4145 35.1635 10.454V10.454C36.7389 5.22176 42.714 2.74676 47.5277 5.33258V5.33258C51.1714 7.28993 55.6912 6.39089 58.3086 3.18813V3.18813Z" fill="currentcolor"/>
                                       <path d="M47.2911 5.77305C51.1456 7.84365 55.927 6.89259 58.6957 3.50452C61.9534 -0.481752 68.0466 -0.481752 71.3043 3.50452C74.073 6.89259 78.8544 7.84365 82.7089 5.77305C87.2441 3.33685 92.8735 5.66865 94.3577 10.5981C95.6191 14.7879 99.6725 17.4963 104.026 17.0583C109.148 16.5431 113.457 20.8517 112.942 25.9739C112.504 30.3275 115.212 34.3809 119.402 35.6423C124.331 37.1265 126.663 42.7559 124.227 47.2911C122.156 51.1456 123.107 55.927 126.495 58.6957C130.482 61.9534 130.482 68.0466 126.495 71.3043C123.107 74.073 122.156 78.8544 124.227 82.7089C126.663 87.2441 124.331 92.8735 119.402 94.3577C115.212 95.6191 112.504 99.6725 112.942 104.026C113.457 109.148 109.148 113.457 104.026 112.942C99.6725 112.504 95.6191 115.212 94.3577 119.402C92.8735 124.331 87.2441 126.663 82.7089 124.227C78.8544 122.156 74.073 123.107 71.3043 126.495C68.0466 130.482 61.9534 130.482 58.6957 126.495C55.927 123.107 51.1456 122.156 47.2911 124.227C42.7559 126.663 37.1265 124.331 35.6423 119.402C34.3809 115.212 30.3275 112.504 25.9739 112.942C20.8517 113.457 16.5431 109.148 17.0583 104.026C17.4963 99.6725 14.7879 95.6191 10.5981 94.3577C5.66864 92.8735 3.33685 87.2441 5.77305 82.7089C7.84365 78.8544 6.89259 74.073 3.50452 71.3043C-0.481752 68.0466 -0.481752 61.9534 3.50452 58.6957C6.89259 55.927 7.84365 51.1456 5.77305 47.2911C3.33685 42.7559 5.66865 37.1265 10.5981 35.6423C14.7879 34.3809 17.4963 30.3275 17.0583 25.9739C16.5431 20.8517 20.8517 16.5431 25.9739 17.0583C30.3275 17.4963 34.3809 14.7879 35.6423 10.5981C37.1265 5.66865 42.7559 3.33685 47.2911 5.77305Z" stroke="#19191A" strokeOpacity="0.100"/>
                                    </svg>
                                 </span>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="tp-service-3-wrap tp_fade_bottom">
                     <div className="row align-items-start">
                        <div className="col-xl-3 col-lg-3">
                           <div className="tp-service-3-title-box">
                              <h4 className="tp-service-3-title"><a href="/services">Industrial Design</a></h4>
                           </div>
                        </div>
                        <div className="col-xl-7 col-lg-7">
                           <div className="tp-service-3-content">
                              <p>
                                 Factory layouts, warehouse interiors and manufacturing fit-outs, engineered for workflow, safety and compliance.
                              </p>
                              <div className="tp-service-3-category">
                                 <span>Factories</span>
                                 <span>Warehouses</span>
                                 <span>Logistics hubs</span>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-2 col-lg-2">
                           <div className="tp-service-3-btn-box text-start text-md-end">
                              <a className="tp-btn-zikzak-sm p-relative" href="/services">
                                 <span className="zikzak-content">
                                    See <br /> Details
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
                                       <path
                                          d="M16.2434 8.16465C16.3866 8.31677 16.4668 8.52224 16.4668 8.73637C16.4668 8.9505 16.3866 9.15597 16.2434 9.30811L9.38818 16.53C9.24196 16.6773 9.04774 16.7599 8.84546 16.7607C8.74439 16.7602 8.64426 16.7399 8.55031 16.7005C8.41169 16.6392 8.2934 16.5359 8.21038 16.4038C8.12736 16.2717 8.0833 16.1167 8.08378 15.9583V9.53881H1.22849C1.02648 9.53881 0.832739 9.45428 0.689893 9.30378C0.547047 9.15329 0.466797 8.9492 0.466797 8.73637C0.466797 8.52356 0.547047 8.31945 0.689893 8.16897C0.832739 8.01848 1.02648 7.93395 1.22849 7.93395H8.08378V1.51445C8.0833 1.35603 8.12736 1.20101 8.21038 1.06892C8.2934 0.936828 8.41169 0.833584 8.55031 0.772196C8.691 0.714385 8.84436 0.699718 8.99264 0.729895C9.14092 0.760071 9.27805 0.833857 9.38818 0.942715L16.2434 8.16465Z"
                                          fill="currentColor" />
                                    </svg>
                                 </span>
                                 <span>
                                    <svg className="svg-bg" xmlns="http://www.w3.org/2000/svg" width="130" height="130" viewBox="0 0 130 130" fill="none">
                                       <path d="M58.3086 3.18813C61.7663 -1.04295 68.2337 -1.04295 71.6914 3.18813V3.18813C74.3088 6.39089 78.8286 7.28993 82.4723 5.33258V5.33258C87.286 2.74677 93.2611 5.22176 94.8365 10.454V10.454C96.0289 14.4145 99.8606 16.9748 103.976 16.5608V16.5608C109.413 16.014 113.986 20.5872 113.439 26.024V26.024C113.025 30.1394 115.585 33.9711 119.546 35.1635V35.1635C124.778 36.7389 127.253 42.714 124.667 47.5277V47.5277C122.71 51.1714 123.609 55.6912 126.812 58.3086V58.3086C131.043 61.7663 131.043 68.2337 126.812 71.6914V71.6914C123.609 74.3088 122.71 78.8286 124.667 82.4723V82.4723C127.253 87.286 124.778 93.2611 119.546 94.8365V94.8365C115.585 96.0289 113.025 99.8606 113.439 103.976V103.976C113.986 109.413 109.413 113.986 103.976 113.439V113.439C99.8606 113.025 96.0289 115.585 94.8365 119.546V119.546C93.2611 124.778 87.286 127.253 82.4723 124.667V124.667C78.8286 122.71 74.3088 123.609 71.6914 126.812V126.812C68.2337 131.043 61.7663 131.043 58.3086 126.812V126.812C55.6912 123.609 51.1714 122.71 47.5277 124.667V124.667C42.714 127.253 36.7389 124.778 35.1635 119.546V119.546C33.9711 115.585 30.1394 113.025 26.024 113.439V113.439C20.5872 113.986 16.014 109.413 16.5608 103.976V103.976C16.9748 99.8606 14.4145 96.0289 10.454 94.8365V94.8365C5.22176 93.2611 2.74677 87.286 5.33258 82.4723V82.4723C7.28993 78.8286 6.39089 74.3088 3.18813 71.6914V71.6914C-1.04295 68.2337 -1.04295 61.7663 3.18813 58.3086V58.3086C6.39089 55.6912 7.28993 51.1714 5.33258 47.5277V47.5277C2.74677 42.714 5.22176 36.7389 10.454 35.1635V35.1635C14.4145 33.9711 16.9748 30.1394 16.5608 26.024V26.024C16.014 20.5872 20.5872 16.014 26.024 16.5608V16.5608C30.1394 16.9748 33.9711 14.4145 35.1635 10.454V10.454C36.7389 5.22176 42.714 2.74676 47.5277 5.33258V5.33258C51.1714 7.28993 55.6912 6.39089 58.3086 3.18813V3.18813Z" fill="currentcolor"/>
                                       <path d="M47.2911 5.77305C51.1456 7.84365 55.927 6.89259 58.6957 3.50452C61.9534 -0.481752 68.0466 -0.481752 71.3043 3.50452C74.073 6.89259 78.8544 7.84365 82.7089 5.77305C87.2441 3.33685 92.8735 5.66865 94.3577 10.5981C95.6191 14.7879 99.6725 17.4963 104.026 17.0583C109.148 16.5431 113.457 20.8517 112.942 25.9739C112.504 30.3275 115.212 34.3809 119.402 35.6423C124.331 37.1265 126.663 42.7559 124.227 47.2911C122.156 51.1456 123.107 55.927 126.495 58.6957C130.482 61.9534 130.482 68.0466 126.495 71.3043C123.107 74.073 122.156 78.8544 124.227 82.7089C126.663 87.2441 124.331 92.8735 119.402 94.3577C115.212 95.6191 112.504 99.6725 112.942 104.026C113.457 109.148 109.148 113.457 104.026 112.942C99.6725 112.504 95.6191 115.212 94.3577 119.402C92.8735 124.331 87.2441 126.663 82.7089 124.227C78.8544 122.156 74.073 123.107 71.3043 126.495C68.0466 130.482 61.9534 130.482 58.6957 126.495C55.927 123.107 51.1456 122.156 47.2911 124.227C42.7559 126.663 37.1265 124.331 35.6423 119.402C34.3809 115.212 30.3275 112.504 25.9739 112.942C20.8517 113.457 16.5431 109.148 17.0583 104.026C17.4963 99.6725 14.7879 95.6191 10.5981 94.3577C5.66864 92.8735 3.33685 87.2441 5.77305 82.7089C7.84365 78.8544 6.89259 74.073 3.50452 71.3043C-0.481752 68.0466 -0.481752 61.9534 3.50452 58.6957C6.89259 55.927 7.84365 51.1456 5.77305 47.2911C3.33685 42.7559 5.66865 37.1265 10.5981 35.6423C14.7879 34.3809 17.4963 30.3275 17.0583 25.9739C16.5431 20.8517 20.8517 16.5431 25.9739 17.0583C30.3275 17.4963 34.3809 14.7879 35.6423 10.5981C37.1265 5.66865 42.7559 3.33685 47.2911 5.77305Z" stroke="#19191A" strokeOpacity="0.100"/>
                                    </svg>
                                 </span>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="tp-service-3-wrap tp_fade_bottom">
                     <div className="row align-items-start">
                        <div className="col-xl-3 col-lg-3">
                           <div className="tp-service-3-title-box">
                              <h4 className="tp-service-3-title"><a href="/services">In-House Fabrication</a></h4>
                           </div>
                        </div>
                        <div className="col-xl-7 col-lg-7">
                           <div className="tp-service-3-content">
                              <p>
                                 MS, SS, wood and custom elements made in our own facility, from structural frames and staircases to cabinetry and joinery.
                              </p>
                              <div className="tp-service-3-category">
                                 <span>MS &amp; SS</span>
                                 <span>Woodwork</span>
                                 <span>Custom elements</span>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-2 col-lg-2">
                           <div className="tp-service-3-btn-box text-start text-md-end">
                              <a className="tp-btn-zikzak-sm p-relative" href="/services">
                                 <span className="zikzak-content">
                                    See <br /> Details
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
                                       <path
                                          d="M16.2434 8.16465C16.3866 8.31677 16.4668 8.52224 16.4668 8.73637C16.4668 8.9505 16.3866 9.15597 16.2434 9.30811L9.38818 16.53C9.24196 16.6773 9.04774 16.7599 8.84546 16.7607C8.74439 16.7602 8.64426 16.7399 8.55031 16.7005C8.41169 16.6392 8.2934 16.5359 8.21038 16.4038C8.12736 16.2717 8.0833 16.1167 8.08378 15.9583V9.53881H1.22849C1.02648 9.53881 0.832739 9.45428 0.689893 9.30378C0.547047 9.15329 0.466797 8.9492 0.466797 8.73637C0.466797 8.52356 0.547047 8.31945 0.689893 8.16897C0.832739 8.01848 1.02648 7.93395 1.22849 7.93395H8.08378V1.51445C8.0833 1.35603 8.12736 1.20101 8.21038 1.06892C8.2934 0.936828 8.41169 0.833584 8.55031 0.772196C8.691 0.714385 8.84436 0.699718 8.99264 0.729895C9.14092 0.760071 9.27805 0.833857 9.38818 0.942715L16.2434 8.16465Z"
                                          fill="currentColor" />
                                    </svg>
                                 </span>
                                 <span>
                                    <svg className="svg-bg" xmlns="http://www.w3.org/2000/svg" width="130" height="130" viewBox="0 0 130 130" fill="none">
                                       <path d="M58.3086 3.18813C61.7663 -1.04295 68.2337 -1.04295 71.6914 3.18813V3.18813C74.3088 6.39089 78.8286 7.28993 82.4723 5.33258V5.33258C87.286 2.74677 93.2611 5.22176 94.8365 10.454V10.454C96.0289 14.4145 99.8606 16.9748 103.976 16.5608V16.5608C109.413 16.014 113.986 20.5872 113.439 26.024V26.024C113.025 30.1394 115.585 33.9711 119.546 35.1635V35.1635C124.778 36.7389 127.253 42.714 124.667 47.5277V47.5277C122.71 51.1714 123.609 55.6912 126.812 58.3086V58.3086C131.043 61.7663 131.043 68.2337 126.812 71.6914V71.6914C123.609 74.3088 122.71 78.8286 124.667 82.4723V82.4723C127.253 87.286 124.778 93.2611 119.546 94.8365V94.8365C115.585 96.0289 113.025 99.8606 113.439 103.976V103.976C113.986 109.413 109.413 113.986 103.976 113.439V113.439C99.8606 113.025 96.0289 115.585 94.8365 119.546V119.546C93.2611 124.778 87.286 127.253 82.4723 124.667V124.667C78.8286 122.71 74.3088 123.609 71.6914 126.812V126.812C68.2337 131.043 61.7663 131.043 58.3086 126.812V126.812C55.6912 123.609 51.1714 122.71 47.5277 124.667V124.667C42.714 127.253 36.7389 124.778 35.1635 119.546V119.546C33.9711 115.585 30.1394 113.025 26.024 113.439V113.439C20.5872 113.986 16.014 109.413 16.5608 103.976V103.976C16.9748 99.8606 14.4145 96.0289 10.454 94.8365V94.8365C5.22176 93.2611 2.74677 87.286 5.33258 82.4723V82.4723C7.28993 78.8286 6.39089 74.3088 3.18813 71.6914V71.6914C-1.04295 68.2337 -1.04295 61.7663 3.18813 58.3086V58.3086C6.39089 55.6912 7.28993 51.1714 5.33258 47.5277V47.5277C2.74677 42.714 5.22176 36.7389 10.454 35.1635V35.1635C14.4145 33.9711 16.9748 30.1394 16.5608 26.024V26.024C16.014 20.5872 20.5872 16.014 26.024 16.5608V16.5608C30.1394 16.9748 33.9711 14.4145 35.1635 10.454V10.454C36.7389 5.22176 42.714 2.74676 47.5277 5.33258V5.33258C51.1714 7.28993 55.6912 6.39089 58.3086 3.18813V3.18813Z" fill="currentcolor"/>
                                       <path d="M47.2911 5.77305C51.1456 7.84365 55.927 6.89259 58.6957 3.50452C61.9534 -0.481752 68.0466 -0.481752 71.3043 3.50452C74.073 6.89259 78.8544 7.84365 82.7089 5.77305C87.2441 3.33685 92.8735 5.66865 94.3577 10.5981C95.6191 14.7879 99.6725 17.4963 104.026 17.0583C109.148 16.5431 113.457 20.8517 112.942 25.9739C112.504 30.3275 115.212 34.3809 119.402 35.6423C124.331 37.1265 126.663 42.7559 124.227 47.2911C122.156 51.1456 123.107 55.927 126.495 58.6957C130.482 61.9534 130.482 68.0466 126.495 71.3043C123.107 74.073 122.156 78.8544 124.227 82.7089C126.663 87.2441 124.331 92.8735 119.402 94.3577C115.212 95.6191 112.504 99.6725 112.942 104.026C113.457 109.148 109.148 113.457 104.026 112.942C99.6725 112.504 95.6191 115.212 94.3577 119.402C92.8735 124.331 87.2441 126.663 82.7089 124.227C78.8544 122.156 74.073 123.107 71.3043 126.495C68.0466 130.482 61.9534 130.482 58.6957 126.495C55.927 123.107 51.1456 122.156 47.2911 124.227C42.7559 126.663 37.1265 124.331 35.6423 119.402C34.3809 115.212 30.3275 112.504 25.9739 112.942C20.8517 113.457 16.5431 109.148 17.0583 104.026C17.4963 99.6725 14.7879 95.6191 10.5981 94.3577C5.66864 92.8735 3.33685 87.2441 5.77305 82.7089C7.84365 78.8544 6.89259 74.073 3.50452 71.3043C-0.481752 68.0466 -0.481752 61.9534 3.50452 58.6957C6.89259 55.927 7.84365 51.1456 5.77305 47.2911C3.33685 42.7559 5.66865 37.1265 10.5981 35.6423C14.7879 34.3809 17.4963 30.3275 17.0583 25.9739C16.5431 20.8517 20.8517 16.5431 25.9739 17.0583C30.3275 17.4963 34.3809 14.7879 35.6423 10.5981C37.1265 5.66865 42.7559 3.33685 47.2911 5.77305Z" stroke="#19191A" strokeOpacity="0.100"/>
                                    </svg>
                                 </span>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="tp-service-3-wrap tp_fade_bottom">
                     <div className="row align-items-start">
                        <div className="col-xl-3 col-lg-3">
                           <div className="tp-service-3-title-box">
                              <h4 className="tp-service-3-title"><a href="/services">Smart Pools &amp; Jacuzzis</a></h4>
                           </div>
                        </div>
                        <div className="col-xl-7 col-lg-7">
                           <div className="tp-service-3-content">
                              <p>
                                 Concrete, FRP and composite pools with IoT controls, efficient filtration and LED lighting, plus jacuzzis and hot tubs.
                              </p>
                              <div className="tp-service-3-category">
                                 <span>Concrete &amp; FRP</span>
                                 <span>Automation</span>
                                 <span>Hot tubs</span>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-2 col-lg-2">
                           <div className="tp-service-3-btn-box text-start text-md-end">
                              <a className="tp-btn-zikzak-sm p-relative" href="/services">
                                 <span className="zikzak-content">
                                    See <br /> Details
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
                                       <path
                                          d="M16.2434 8.16465C16.3866 8.31677 16.4668 8.52224 16.4668 8.73637C16.4668 8.9505 16.3866 9.15597 16.2434 9.30811L9.38818 16.53C9.24196 16.6773 9.04774 16.7599 8.84546 16.7607C8.74439 16.7602 8.64426 16.7399 8.55031 16.7005C8.41169 16.6392 8.2934 16.5359 8.21038 16.4038C8.12736 16.2717 8.0833 16.1167 8.08378 15.9583V9.53881H1.22849C1.02648 9.53881 0.832739 9.45428 0.689893 9.30378C0.547047 9.15329 0.466797 8.9492 0.466797 8.73637C0.466797 8.52356 0.547047 8.31945 0.689893 8.16897C0.832739 8.01848 1.02648 7.93395 1.22849 7.93395H8.08378V1.51445C8.0833 1.35603 8.12736 1.20101 8.21038 1.06892C8.2934 0.936828 8.41169 0.833584 8.55031 0.772196C8.691 0.714385 8.84436 0.699718 8.99264 0.729895C9.14092 0.760071 9.27805 0.833857 9.38818 0.942715L16.2434 8.16465Z"
                                          fill="currentColor" />
                                    </svg>
                                 </span>
                                 <span>
                                    <svg className="svg-bg" xmlns="http://www.w3.org/2000/svg" width="130" height="130" viewBox="0 0 130 130" fill="none">
                                       <path d="M58.3086 3.18813C61.7663 -1.04295 68.2337 -1.04295 71.6914 3.18813V3.18813C74.3088 6.39089 78.8286 7.28993 82.4723 5.33258V5.33258C87.286 2.74677 93.2611 5.22176 94.8365 10.454V10.454C96.0289 14.4145 99.8606 16.9748 103.976 16.5608V16.5608C109.413 16.014 113.986 20.5872 113.439 26.024V26.024C113.025 30.1394 115.585 33.9711 119.546 35.1635V35.1635C124.778 36.7389 127.253 42.714 124.667 47.5277V47.5277C122.71 51.1714 123.609 55.6912 126.812 58.3086V58.3086C131.043 61.7663 131.043 68.2337 126.812 71.6914V71.6914C123.609 74.3088 122.71 78.8286 124.667 82.4723V82.4723C127.253 87.286 124.778 93.2611 119.546 94.8365V94.8365C115.585 96.0289 113.025 99.8606 113.439 103.976V103.976C113.986 109.413 109.413 113.986 103.976 113.439V113.439C99.8606 113.025 96.0289 115.585 94.8365 119.546V119.546C93.2611 124.778 87.286 127.253 82.4723 124.667V124.667C78.8286 122.71 74.3088 123.609 71.6914 126.812V126.812C68.2337 131.043 61.7663 131.043 58.3086 126.812V126.812C55.6912 123.609 51.1714 122.71 47.5277 124.667V124.667C42.714 127.253 36.7389 124.778 35.1635 119.546V119.546C33.9711 115.585 30.1394 113.025 26.024 113.439V113.439C20.5872 113.986 16.014 109.413 16.5608 103.976V103.976C16.9748 99.8606 14.4145 96.0289 10.454 94.8365V94.8365C5.22176 93.2611 2.74677 87.286 5.33258 82.4723V82.4723C7.28993 78.8286 6.39089 74.3088 3.18813 71.6914V71.6914C-1.04295 68.2337 -1.04295 61.7663 3.18813 58.3086V58.3086C6.39089 55.6912 7.28993 51.1714 5.33258 47.5277V47.5277C2.74677 42.714 5.22176 36.7389 10.454 35.1635V35.1635C14.4145 33.9711 16.9748 30.1394 16.5608 26.024V26.024C16.014 20.5872 20.5872 16.014 26.024 16.5608V16.5608C30.1394 16.9748 33.9711 14.4145 35.1635 10.454V10.454C36.7389 5.22176 42.714 2.74676 47.5277 5.33258V5.33258C51.1714 7.28993 55.6912 6.39089 58.3086 3.18813V3.18813Z" fill="currentcolor"/>
                                       <path d="M47.2911 5.77305C51.1456 7.84365 55.927 6.89259 58.6957 3.50452C61.9534 -0.481752 68.0466 -0.481752 71.3043 3.50452C74.073 6.89259 78.8544 7.84365 82.7089 5.77305C87.2441 3.33685 92.8735 5.66865 94.3577 10.5981C95.6191 14.7879 99.6725 17.4963 104.026 17.0583C109.148 16.5431 113.457 20.8517 112.942 25.9739C112.504 30.3275 115.212 34.3809 119.402 35.6423C124.331 37.1265 126.663 42.7559 124.227 47.2911C122.156 51.1456 123.107 55.927 126.495 58.6957C130.482 61.9534 130.482 68.0466 126.495 71.3043C123.107 74.073 122.156 78.8544 124.227 82.7089C126.663 87.2441 124.331 92.8735 119.402 94.3577C115.212 95.6191 112.504 99.6725 112.942 104.026C113.457 109.148 109.148 113.457 104.026 112.942C99.6725 112.504 95.6191 115.212 94.3577 119.402C92.8735 124.331 87.2441 126.663 82.7089 124.227C78.8544 122.156 74.073 123.107 71.3043 126.495C68.0466 130.482 61.9534 130.482 58.6957 126.495C55.927 123.107 51.1456 122.156 47.2911 124.227C42.7559 126.663 37.1265 124.331 35.6423 119.402C34.3809 115.212 30.3275 112.504 25.9739 112.942C20.8517 113.457 16.5431 109.148 17.0583 104.026C17.4963 99.6725 14.7879 95.6191 10.5981 94.3577C5.66864 92.8735 3.33685 87.2441 5.77305 82.7089C7.84365 78.8544 6.89259 74.073 3.50452 71.3043C-0.481752 68.0466 -0.481752 61.9534 3.50452 58.6957C6.89259 55.927 7.84365 51.1456 5.77305 47.2911C3.33685 42.7559 5.66865 37.1265 10.5981 35.6423C14.7879 34.3809 17.4963 30.3275 17.0583 25.9739C16.5431 20.8517 20.8517 16.5431 25.9739 17.0583C30.3275 17.4963 34.3809 14.7879 35.6423 10.5981C37.1265 5.66865 42.7559 3.33685 47.2911 5.77305Z" stroke="#19191A" strokeOpacity="0.100"/>
                                    </svg>
                                 </span>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="tp-service-3-wrap tp_fade_bottom">
                     <div className="row align-items-start">
                        <div className="col-xl-3 col-lg-3">
                           <div className="tp-service-3-title-box">
                              <h4 className="tp-service-3-title"><a href="/services">Architectural Modular Pods</a></h4>
                           </div>
                        </div>
                        <div className="col-xl-7 col-lg-7">
                           <div className="tp-service-3-content">
                              <p>
                                 Factory-built prefab spaces for homes, offices, studios and hospitality, assembled rapidly on site.
                              </p>
                              <div className="tp-service-3-category">
                                 <span>A-frame</span>
                                 <span>Premium pods</span>
                                 <span>Site offices</span>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-2 col-lg-2">
                           <div className="tp-service-3-btn-box text-start text-md-end">
                              <a className="tp-btn-zikzak-sm p-relative" href="/services">
                                 <span className="zikzak-content">
                                    See <br /> Details
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
                                       <path
                                          d="M16.2434 8.16465C16.3866 8.31677 16.4668 8.52224 16.4668 8.73637C16.4668 8.9505 16.3866 9.15597 16.2434 9.30811L9.38818 16.53C9.24196 16.6773 9.04774 16.7599 8.84546 16.7607C8.74439 16.7602 8.64426 16.7399 8.55031 16.7005C8.41169 16.6392 8.2934 16.5359 8.21038 16.4038C8.12736 16.2717 8.0833 16.1167 8.08378 15.9583V9.53881H1.22849C1.02648 9.53881 0.832739 9.45428 0.689893 9.30378C0.547047 9.15329 0.466797 8.9492 0.466797 8.73637C0.466797 8.52356 0.547047 8.31945 0.689893 8.16897C0.832739 8.01848 1.02648 7.93395 1.22849 7.93395H8.08378V1.51445C8.0833 1.35603 8.12736 1.20101 8.21038 1.06892C8.2934 0.936828 8.41169 0.833584 8.55031 0.772196C8.691 0.714385 8.84436 0.699718 8.99264 0.729895C9.14092 0.760071 9.27805 0.833857 9.38818 0.942715L16.2434 8.16465Z"
                                          fill="currentColor" />
                                    </svg>
                                 </span>
                                 <span>
                                    <svg className="svg-bg" xmlns="http://www.w3.org/2000/svg" width="130" height="130" viewBox="0 0 130 130" fill="none">
                                       <path d="M58.3086 3.18813C61.7663 -1.04295 68.2337 -1.04295 71.6914 3.18813V3.18813C74.3088 6.39089 78.8286 7.28993 82.4723 5.33258V5.33258C87.286 2.74677 93.2611 5.22176 94.8365 10.454V10.454C96.0289 14.4145 99.8606 16.9748 103.976 16.5608V16.5608C109.413 16.014 113.986 20.5872 113.439 26.024V26.024C113.025 30.1394 115.585 33.9711 119.546 35.1635V35.1635C124.778 36.7389 127.253 42.714 124.667 47.5277V47.5277C122.71 51.1714 123.609 55.6912 126.812 58.3086V58.3086C131.043 61.7663 131.043 68.2337 126.812 71.6914V71.6914C123.609 74.3088 122.71 78.8286 124.667 82.4723V82.4723C127.253 87.286 124.778 93.2611 119.546 94.8365V94.8365C115.585 96.0289 113.025 99.8606 113.439 103.976V103.976C113.986 109.413 109.413 113.986 103.976 113.439V113.439C99.8606 113.025 96.0289 115.585 94.8365 119.546V119.546C93.2611 124.778 87.286 127.253 82.4723 124.667V124.667C78.8286 122.71 74.3088 123.609 71.6914 126.812V126.812C68.2337 131.043 61.7663 131.043 58.3086 126.812V126.812C55.6912 123.609 51.1714 122.71 47.5277 124.667V124.667C42.714 127.253 36.7389 124.778 35.1635 119.546V119.546C33.9711 115.585 30.1394 113.025 26.024 113.439V113.439C20.5872 113.986 16.014 109.413 16.5608 103.976V103.976C16.9748 99.8606 14.4145 96.0289 10.454 94.8365V94.8365C5.22176 93.2611 2.74677 87.286 5.33258 82.4723V82.4723C7.28993 78.8286 6.39089 74.3088 3.18813 71.6914V71.6914C-1.04295 68.2337 -1.04295 61.7663 3.18813 58.3086V58.3086C6.39089 55.6912 7.28993 51.1714 5.33258 47.5277V47.5277C2.74677 42.714 5.22176 36.7389 10.454 35.1635V35.1635C14.4145 33.9711 16.9748 30.1394 16.5608 26.024V26.024C16.014 20.5872 20.5872 16.014 26.024 16.5608V16.5608C30.1394 16.9748 33.9711 14.4145 35.1635 10.454V10.454C36.7389 5.22176 42.714 2.74676 47.5277 5.33258V5.33258C51.1714 7.28993 55.6912 6.39089 58.3086 3.18813V3.18813Z" fill="currentcolor"/>
                                       <path d="M47.2911 5.77305C51.1456 7.84365 55.927 6.89259 58.6957 3.50452C61.9534 -0.481752 68.0466 -0.481752 71.3043 3.50452C74.073 6.89259 78.8544 7.84365 82.7089 5.77305C87.2441 3.33685 92.8735 5.66865 94.3577 10.5981C95.6191 14.7879 99.6725 17.4963 104.026 17.0583C109.148 16.5431 113.457 20.8517 112.942 25.9739C112.504 30.3275 115.212 34.3809 119.402 35.6423C124.331 37.1265 126.663 42.7559 124.227 47.2911C122.156 51.1456 123.107 55.927 126.495 58.6957C130.482 61.9534 130.482 68.0466 126.495 71.3043C123.107 74.073 122.156 78.8544 124.227 82.7089C126.663 87.2441 124.331 92.8735 119.402 94.3577C115.212 95.6191 112.504 99.6725 112.942 104.026C113.457 109.148 109.148 113.457 104.026 112.942C99.6725 112.504 95.6191 115.212 94.3577 119.402C92.8735 124.331 87.2441 126.663 82.7089 124.227C78.8544 122.156 74.073 123.107 71.3043 126.495C68.0466 130.482 61.9534 130.482 58.6957 126.495C55.927 123.107 51.1456 122.156 47.2911 124.227C42.7559 126.663 37.1265 124.331 35.6423 119.402C34.3809 115.212 30.3275 112.504 25.9739 112.942C20.8517 113.457 16.5431 109.148 17.0583 104.026C17.4963 99.6725 14.7879 95.6191 10.5981 94.3577C5.66864 92.8735 3.33685 87.2441 5.77305 82.7089C7.84365 78.8544 6.89259 74.073 3.50452 71.3043C-0.481752 68.0466 -0.481752 61.9534 3.50452 58.6957C6.89259 55.927 7.84365 51.1456 5.77305 47.2911C3.33685 42.7559 5.66865 37.1265 10.5981 35.6423C14.7879 34.3809 17.4963 30.3275 17.0583 25.9739C16.5431 20.8517 20.8517 16.5431 25.9739 17.0583C30.3275 17.4963 34.3809 14.7879 35.6423 10.5981C37.1265 5.66865 42.7559 3.33685 47.2911 5.77305Z" stroke="#19191A" strokeOpacity="0.100"/>
                                    </svg>
                                 </span>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="tp-service-3-wrap tp_fade_bottom">
                     <div className="row align-items-start">
                        <div className="col-xl-3 col-lg-3">
                           <div className="tp-service-3-title-box">
                              <h4 className="tp-service-3-title"><a href="/services">Composite Water Infrastructure</a></h4>
                           </div>
                        </div>
                        <div className="col-xl-7 col-lg-7">
                           <div className="tp-service-3-content">
                              <p>
                                 FRP underground sumps, reservoirs and distribution networks, corrosion-resistant and designed for long-term performance.
                              </p>
                              <div className="tp-service-3-category">
                                 <span>FRP sumps</span>
                                 <span>Reservoirs</span>
                                 <span>Distribution</span>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-2 col-lg-2">
                           <div className="tp-service-3-btn-box text-start text-md-end">
                              <a className="tp-btn-zikzak-sm p-relative" href="/services">
                                 <span className="zikzak-content">
                                    See <br /> Details
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
                                       <path
                                          d="M16.2434 8.16465C16.3866 8.31677 16.4668 8.52224 16.4668 8.73637C16.4668 8.9505 16.3866 9.15597 16.2434 9.30811L9.38818 16.53C9.24196 16.6773 9.04774 16.7599 8.84546 16.7607C8.74439 16.7602 8.64426 16.7399 8.55031 16.7005C8.41169 16.6392 8.2934 16.5359 8.21038 16.4038C8.12736 16.2717 8.0833 16.1167 8.08378 15.9583V9.53881H1.22849C1.02648 9.53881 0.832739 9.45428 0.689893 9.30378C0.547047 9.15329 0.466797 8.9492 0.466797 8.73637C0.466797 8.52356 0.547047 8.31945 0.689893 8.16897C0.832739 8.01848 1.02648 7.93395 1.22849 7.93395H8.08378V1.51445C8.0833 1.35603 8.12736 1.20101 8.21038 1.06892C8.2934 0.936828 8.41169 0.833584 8.55031 0.772196C8.691 0.714385 8.84436 0.699718 8.99264 0.729895C9.14092 0.760071 9.27805 0.833857 9.38818 0.942715L16.2434 8.16465Z"
                                          fill="currentColor" />
                                    </svg>
                                 </span>
                                 <span>
                                    <svg className="svg-bg" xmlns="http://www.w3.org/2000/svg" width="130" height="130" viewBox="0 0 130 130" fill="none">
                                       <path d="M58.3086 3.18813C61.7663 -1.04295 68.2337 -1.04295 71.6914 3.18813V3.18813C74.3088 6.39089 78.8286 7.28993 82.4723 5.33258V5.33258C87.286 2.74677 93.2611 5.22176 94.8365 10.454V10.454C96.0289 14.4145 99.8606 16.9748 103.976 16.5608V16.5608C109.413 16.014 113.986 20.5872 113.439 26.024V26.024C113.025 30.1394 115.585 33.9711 119.546 35.1635V35.1635C124.778 36.7389 127.253 42.714 124.667 47.5277V47.5277C122.71 51.1714 123.609 55.6912 126.812 58.3086V58.3086C131.043 61.7663 131.043 68.2337 126.812 71.6914V71.6914C123.609 74.3088 122.71 78.8286 124.667 82.4723V82.4723C127.253 87.286 124.778 93.2611 119.546 94.8365V94.8365C115.585 96.0289 113.025 99.8606 113.439 103.976V103.976C113.986 109.413 109.413 113.986 103.976 113.439V113.439C99.8606 113.025 96.0289 115.585 94.8365 119.546V119.546C93.2611 124.778 87.286 127.253 82.4723 124.667V124.667C78.8286 122.71 74.3088 123.609 71.6914 126.812V126.812C68.2337 131.043 61.7663 131.043 58.3086 126.812V126.812C55.6912 123.609 51.1714 122.71 47.5277 124.667V124.667C42.714 127.253 36.7389 124.778 35.1635 119.546V119.546C33.9711 115.585 30.1394 113.025 26.024 113.439V113.439C20.5872 113.986 16.014 109.413 16.5608 103.976V103.976C16.9748 99.8606 14.4145 96.0289 10.454 94.8365V94.8365C5.22176 93.2611 2.74677 87.286 5.33258 82.4723V82.4723C7.28993 78.8286 6.39089 74.3088 3.18813 71.6914V71.6914C-1.04295 68.2337 -1.04295 61.7663 3.18813 58.3086V58.3086C6.39089 55.6912 7.28993 51.1714 5.33258 47.5277V47.5277C2.74677 42.714 5.22176 36.7389 10.454 35.1635V35.1635C14.4145 33.9711 16.9748 30.1394 16.5608 26.024V26.024C16.014 20.5872 20.5872 16.014 26.024 16.5608V16.5608C30.1394 16.9748 33.9711 14.4145 35.1635 10.454V10.454C36.7389 5.22176 42.714 2.74676 47.5277 5.33258V5.33258C51.1714 7.28993 55.6912 6.39089 58.3086 3.18813V3.18813Z" fill="currentcolor"/>
                                       <path d="M47.2911 5.77305C51.1456 7.84365 55.927 6.89259 58.6957 3.50452C61.9534 -0.481752 68.0466 -0.481752 71.3043 3.50452C74.073 6.89259 78.8544 7.84365 82.7089 5.77305C87.2441 3.33685 92.8735 5.66865 94.3577 10.5981C95.6191 14.7879 99.6725 17.4963 104.026 17.0583C109.148 16.5431 113.457 20.8517 112.942 25.9739C112.504 30.3275 115.212 34.3809 119.402 35.6423C124.331 37.1265 126.663 42.7559 124.227 47.2911C122.156 51.1456 123.107 55.927 126.495 58.6957C130.482 61.9534 130.482 68.0466 126.495 71.3043C123.107 74.073 122.156 78.8544 124.227 82.7089C126.663 87.2441 124.331 92.8735 119.402 94.3577C115.212 95.6191 112.504 99.6725 112.942 104.026C113.457 109.148 109.148 113.457 104.026 112.942C99.6725 112.504 95.6191 115.212 94.3577 119.402C92.8735 124.331 87.2441 126.663 82.7089 124.227C78.8544 122.156 74.073 123.107 71.3043 126.495C68.0466 130.482 61.9534 130.482 58.6957 126.495C55.927 123.107 51.1456 122.156 47.2911 124.227C42.7559 126.663 37.1265 124.331 35.6423 119.402C34.3809 115.212 30.3275 112.504 25.9739 112.942C20.8517 113.457 16.5431 109.148 17.0583 104.026C17.4963 99.6725 14.7879 95.6191 10.5981 94.3577C5.66864 92.8735 3.33685 87.2441 5.77305 82.7089C7.84365 78.8544 6.89259 74.073 3.50452 71.3043C-0.481752 68.0466 -0.481752 61.9534 3.50452 58.6957C6.89259 55.927 7.84365 51.1456 5.77305 47.2911C3.33685 42.7559 5.66865 37.1265 10.5981 35.6423C14.7879 34.3809 17.4963 30.3275 17.0583 25.9739C16.5431 20.8517 20.8517 16.5431 25.9739 17.0583C30.3275 17.4963 34.3809 14.7879 35.6423 10.5981C37.1265 5.66865 42.7559 3.33685 47.2911 5.77305Z" stroke="#19191A" strokeOpacity="0.100"/>
                                    </svg>
                                 </span>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
                  
               </div>
            </div>
            <div id="contact" className="tp-cta-area black-bg pt-120 pb-120 z-index fix">
               <div className="container">
                  <div className="col-xl-12">
                     <div className="tp-cta-title-box p-relative">
                        <h4 className="tp-cta-title cta-text">Let’s talk
                           <span>about it</span>
                        </h4>
                        <p className="tp_fade_bottom">
                           Share your project type, location and expected scope. The team will review your requirement and respond with the next steps.
                        </p>
                        <div className="tp-cta-icon">
                           <img src="/assets/img/home-03/cta/cta-1.png" alt="" />
                        </div>
                        <div className="tp-cta-btn-box">
                           <a className="tp-btn-zikzak p-relative" href="/contact">
                              <span className="zikzak-content">
                                 Get <br /> In Touch
                                 <svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                       d="M16.2434 8.16465C16.3866 8.31677 16.4668 8.52224 16.4668 8.73637C16.4668 8.9505 16.3866 9.15597 16.2434 9.30811L9.38818 16.53C9.24196 16.6773 9.04774 16.7599 8.84546 16.7607C8.74439 16.7602 8.64426 16.7399 8.55031 16.7005C8.41169 16.6392 8.2934 16.5359 8.21038 16.4038C8.12736 16.2717 8.0833 16.1167 8.08378 15.9583V9.53881H1.22849C1.02648 9.53881 0.832739 9.45428 0.689893 9.30378C0.547047 9.15329 0.466797 8.9492 0.466797 8.73637C0.466797 8.52356 0.547047 8.31945 0.689893 8.16897C0.832739 8.01848 1.02648 7.93395 1.22849 7.93395H8.08378V1.51445C8.0833 1.35603 8.12736 1.20101 8.21038 1.06892C8.2934 0.936828 8.41169 0.833584 8.55031 0.772196C8.691 0.714385 8.84436 0.699718 8.99264 0.729895C9.14092 0.760071 9.27805 0.833857 9.38818 0.942715L16.2434 8.16465Z"
                                       fill="#19191A" />
                                 </svg>
                              </span>
                              <svg className="anim" width="160" height="161" viewBox="0 0 160 161" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                 <path
                                    d="M73.023 3.97715C76.6245 -0.442502 83.3755 -0.442502 86.977 3.97715L88.8998 6.33684C91.6265 9.68311 96.3451 10.6222 100.145 8.57493L102.813 7.13788C107.829 4.43534 114.063 7.01587 115.701 12.4734L116.588 15.4276C117.828 19.5569 121.822 22.227 126.111 21.7943L129.147 21.4881C134.809 20.9169 139.573 25.6784 139.005 31.3408L138.693 34.4529C138.263 38.7355 140.926 42.7227 145.046 43.9669L148.008 44.8612C153.449 46.5041 156.024 52.7165 153.34 57.7265L151.854 60.5019C149.824 64.2914 150.757 68.9873 154.082 71.7123L156.507 73.6991C160.9 77.2998 160.9 84.0202 156.507 87.6209L154.082 89.6077C150.757 92.3327 149.824 97.0286 151.854 100.818L153.34 103.593C156.024 108.604 153.449 114.816 148.008 116.459L145.046 117.353C140.926 118.597 138.263 122.585 138.693 126.867L139.005 129.979C139.573 135.642 134.809 140.403 129.147 139.832L126.111 139.526C121.822 139.093 117.828 141.763 116.588 145.892L115.701 148.847C114.063 154.304 107.829 156.885 102.813 154.182L100.145 152.745C96.3451 150.698 91.6265 151.637 88.8998 154.983L86.9769 157.343C83.3755 161.762 76.6245 161.762 73.023 157.343L71.1002 154.983C68.3735 151.637 63.6549 150.698 59.8547 152.745L57.1873 154.182C52.1708 156.885 45.9372 154.304 44.2988 148.847L43.4119 145.892C42.1722 141.763 38.1783 139.093 33.8887 139.526L30.8534 139.832C25.1913 140.403 20.4271 135.642 20.995 129.979L21.3071 126.867C21.7367 122.585 19.0739 118.597 14.9536 117.353L11.9917 116.459C6.55087 114.816 3.97613 108.604 6.65971 103.593L8.14628 100.818C10.1761 97.0286 9.24252 92.3327 5.91763 89.6077L3.49338 87.6209C-0.900073 84.0202 -0.900072 77.2998 3.49338 73.6991L5.91763 71.7123C9.24252 68.9873 10.1761 64.2914 8.14628 60.5019L6.65971 57.7265C3.97613 52.7165 6.55087 46.5041 11.9917 44.8612L14.9536 43.9669C19.0739 42.7227 21.7367 38.7355 21.3071 34.4529L20.995 31.3408C20.4271 25.6784 25.1913 20.9169 30.8534 21.4881L33.8887 21.7943C38.1783 22.227 42.1722 19.5569 43.4119 15.4275L44.2988 12.4734C45.9372 7.01587 52.1708 4.43534 57.1873 7.13788L59.8547 8.57493C63.6549 10.6222 68.3735 9.68311 71.1002 6.33684L73.023 3.97715Z"
                                    fill="white" />
                              </svg>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
    </Site>
  );
}
