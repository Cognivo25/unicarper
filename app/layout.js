import './globals.css';

export const metadata = {
  title: 'Unicarper | Design-Build, Interiors, Pools, Landscapes & PMC',
  description: 'Interiors, outdoor works, pools and spas, landscape water, security and PMC coordination, run from Bangalore with one accountable delivery layer across India.',
};

const css = ['bootstrap', 'animate', 'swiper-bundle', 'slick', 'magnific-popup', 'font-awesome-pro', 'spacing', 'custom-animation', 'main'];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {css.map((f) => <link key={f} rel="stylesheet" href={`/assets/css/${f}.css`} />)}
      </head>
      <body id="body" className="tp-smooth-scroll">{children}</body>
    </html>
  );
}
