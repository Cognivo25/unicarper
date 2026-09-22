import Header from './Header';
import Footer from './Footer';
import TemplateScripts from './TemplateScripts';

// Page chrome shared by every route. Links between pages are plain <a> (full loads)
// so the theme's jQuery/GSAP init runs fresh against each page's DOM.
export default function Site({ children }) {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>{children}</main>
          <Footer />
        </div>
      </div>
      <TemplateScripts />
    </>
  );
}
