import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import blogdata from './data/blogdata.json';
import Singleblogdata from './data/single-blogdata.json';
import HomeV1 from './components/home-v1';
import HomeV2 from './components/home-v2';
import HomeV3 from './components/home-v3';
import HomeV4 from './components/home-v4';
import HomeV5 from './components/home-v5';
import HomeV6 from './components/home-v6';
import HomeV7 from './components/home-v7';
import HomeV8 from './components/home-v8';
import HomeV9 from './components/home-v9';
import About from './components/about';
import Services from './components/services';
import Blog from './components/blog';
import BlogGrid from './components/blog-grid';
import BlogDetails from './components/blog-details';
import Contact from './components/contact';
import JobListing from './components/job-listing';
import JobDetails from './components/job-details';
import JobApply from './components/job-apply';
import team from './components/team';
import pricing from './components/pricing';
import offer from './components/offer';
import gallery from './components/gallery';
import workprocessing from './components/work-processing';
import faq from './components/faq';
import Error from './components/error';
import CommingSoon from './components/comming-soon';
import Shop from './components/shop';
import ShopGrid from './components/shop-grid';
import ShopDetails from './components/shop-details';
import Checkout from './components/checkout';

class Root extends Component {
    render() {
        return(
            <Router>
                <HashRouter basename="/">
                <div>
                <Switch>
                    <Route exact path="/" component={HomeV2} />
                    <Route path="/home-v1" component={HomeV1} />
                    <Route path="/home-v3" component={HomeV3} />
                    <Route path="/home-v4" component={HomeV4} />
                    <Route path="/home-v5" component={HomeV5} />
                    <Route path="/home-v6" component={HomeV6} />
                    <Route path="/home-v7" component={HomeV7} />
                    <Route path="/home-v8" component={HomeV8} />
                    <Route path="/home-v9" component={HomeV9} />
                    <Route path="/about" component={About} />
                    <Route path="/services" component={Services} />
                    <Route path="/blog" render={ () => { return <Blog data={blogdata} /> }} />
                    <Route path="/blog-grid" render={ () => { return <BlogGrid data={blogdata} /> }} />
                    <Route path="/blog-details" render={ () => { return <BlogDetails data={Singleblogdata} /> } } />
                    <Route path="/contact" component={Contact} />
                    <Route path="/job-listing" component={JobListing} />
                    <Route path="/job-details" component={JobDetails} />
                    <Route path="/job-apply" component={JobApply} />
                    <Route path="/team" component={team} />
                    <Route path="/pricing" component={pricing} />
                    <Route path="/offer" component={offer} />
                    <Route path="/gallery" component={gallery} />
                    <Route path="/work-processing" component={workprocessing} />
                    <Route path="/faq" component={faq} />
                    <Route path="/error" component={Error} />
                    <Route path="/comming-soon" component={CommingSoon} />
                    <Route path="/shop" component={Shop} />
                    <Route path="/shop-grid" component={ShopGrid} />
                    <Route path="/shop-details" component={ShopDetails} />
                    <Route path="/checkout" component={Checkout} />
                </Switch>
                </div>
                </HashRouter>
            </Router>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('riyaqas'));
