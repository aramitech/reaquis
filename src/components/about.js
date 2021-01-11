import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import VideoV2 from './section-components/video-v2';
import WhatWeDo from './section-components/what-we-do';
import TestimonialV2 from './section-components/testimonial-v2';
import Team from './section-components/team';
import Subscribe from './section-components/subscribe';
import FooterV2 from './global-components/footer-v2';
import Services from './section-components/services';

const About = () => {
    return <div>
        <Navbar />
        {/* <PageHeader headertitle="About" /> */}
     
        <WhatWeDo customclass="pd-top-80"/>
        {/* <Services customclass="pd-top-112" /> */}
        <TestimonialV2 />

        <FooterV2 />
    </div>
}

export default About

