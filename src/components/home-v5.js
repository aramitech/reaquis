import React from 'react';
import Navbar from './global-components/navbar-v3';
import BannerV3 from './section-components/banner-v3';
import ServiceV3 from './section-components/services-v3';
import Help from './section-components/help';
import Teamv2 from './section-components/team-v2';
import Goals from './section-components/goals';
import VideoV2 from './section-components/video-v2';
import Testimonialv4 from './section-components/testimonial-v4';
import FaqV2 from './section-components/faq-v2';
import Subscribe from './section-components/subscribe';
import FooterV2 from './global-components/footer-v2';
import SliderV2 from './section-components/slider-v2';
const Home_v5 = () => {
    return <div>
        <Navbar />
        <SliderV2 />
         <VideoV2 />
        {/* <ServiceV3 />
        <Help />
        <Teamv2 />
        <Goals />
        <LatestPost />
        <FaqV2 />
        <Subscribe /> */}
     <FooterV2 /> 
    </div>
}

export default Home_v5

