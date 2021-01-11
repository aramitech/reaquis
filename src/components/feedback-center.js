import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import FeedbackCenter from './section-components/feedback-center';
import Subscribe from './section-components/subscribe';
import FooterV2 from './global-components/footer-v2';

const FeedBachCenterPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="FeebBack Center" />
        <FeedbackCenter customclass="pd-top-120" />
        <Subscribe />
        <FooterV2 />
    </div>
}

export default FeedBachCenterPage

