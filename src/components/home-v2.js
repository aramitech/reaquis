import React from 'react';
import Navbar from './global-components/navbar';
import SliderV2 from './section-components/slider-v2';
import Features from './section-components/features';
import PricingTable3 from './section-components/pricing-table3';
import SoftBoxManage from './section-components/soft-box-manage';
import VideoV2 from './section-components/video-v2';
import Screenshot from './section-components/screenshot';
import TestimonialV2 from './section-components/testimonial-v2';
import Subscribe from './section-components/subscribe';
import FooterV2 from './global-components/footer-v2';
import Toolbar from './section-components/CustomerChat';
import CutomerChat from './section-components/CustomerChat';
import s from './section-components/CustomerChat';
import children from './section-components/CustomerChat';

const Home_V2 = () => {
    return <div>
        <Navbar />
        <SliderV2 />
        <Features />
        <VideoV2 />
        <SoftBoxManage />
        {/* <Screenshot /> */}
        <PricingTable3 />
        <TestimonialV2 />

    <div className={s.root}>
      <Toolbar />
      <main className={s.content}>{children}</main>
      <CutomerChat />
    </div>
  
        <FooterV2 />
        
    </div>
}

export default Home_V2

