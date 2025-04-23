import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { About } from './About';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <VerticalFeatures />
    <About />
    <Banner />
    <Footer />
  </div>
);

export { Base };
