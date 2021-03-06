import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
//import Kobe from "../../component/picture/kobe.png"
import './landing.css'
//import AOS from 'aos';
//import 'aos/dist/aos.css';

class Landing extends Component {
    render() { 
     // AOS.init();
     const img='https://images.unsplash.com/photo-1543270915-a8381a52e201?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
        return (
            <div style={{width:'100%', margin: 'auto', zIndex:"10"}}>
              <Grid className = "landing-grid">
                <Cell col={12}>
                   <img data-aos="fade-down" data-aos-duration="1500" 
                    src={img}
                    alt="kobe"
                    className= "kobe-img" style={{zIndex:"10"}}/>
                <div data-aos="fade-up" data-aos-delay="800" data-aos-duration="1500" className="banner-text">
                      <h1>Full Stack Web Developer</h1>
                      <h2>Bryant Zhou</h2>
                     <hr/>
                     <p>React (Native) | Angular | Nodejs | d3.js | MongoDB | Firebase | Flask | JavaScript | Python</p>
                </div>
                </Cell>
              </Grid>
            </div>
        );
    }
}
 
export default Landing;