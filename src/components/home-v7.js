import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import WorkProcessing from './section-components/airtime-portal';
import Subscribe from './section-components/subscribe';
import FooterV2 from './global-components/footer-v2';

const airtime_portal = () => {
    return <div>
        <Navbar />
     
        <WorkProcessing customclass="pd-top-120" />
        {/* <Subscribe /> */}
        <FooterV2 />
    </div>
}

export default airtime_portal



