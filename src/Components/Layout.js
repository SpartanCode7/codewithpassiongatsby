import React from 'react'
import banner from '../images/banner.jpg'



function Layout() {



  return (
    <div className="main">
        <div id="banner">
            <div className="box">
                <h2>We Are</h2>
                <h1>Creative Agency</h1>
                <p>We are a passionate ecommerce agency that specializes in eye-catchy, robust, and easy-to-use website design & development, mobile application development.</p>
                <a href="#contact" alt="Contact">Get Started</a>
            </div>
        </div>
      <div id="about">
        <div className="about__header">
            <h2>About Vistabit Technologies</h2>
            <p>We are a company of developers, designers, brand promoters, ecommerce experts, technology geeks, and brainiac systems analysts and architects. We are here to help our customers drive their business success & growth. With unparalleled project understanding and customer support, we have earned the confidence of hundreds of clients worldwide.</p>
        </div>
        <div className="boxes__outer container">
            <div className="box">
                <h5>Ecommerce Services</h5>
                <p>Ecommerce design with a focus on sales conversion which plays a vital role to make it Sale Multipliers</p>
            </div>
            <div className="box">
                <h5>Web Design & Development</h5>
                <p>As a website is your first impression to your visitors. The way your website looks and responds, we know this art better.</p>
            </div>
            <div className="box">
                <h5>Mobile App Development</h5>
                <p>We design and develop mobile apps for iOS, Android, Windows, Blackberry and cross-platform but we are no strangers to emerging technologies like Wearables or IoT.</p>
            </div>
            <div className="box">
                <h5>Search Engine Optimization</h5>
                <p>We help you to improve your search engine rankings for your website, brand & ecommerce store with proven SEO strategies</p>
            </div>
        </div>
      </div>
      <div id="services"></div>
      <div id="services"></div>
      <div id="services"></div>
      <div id="services"></div>
    </div>
  )
}

export default Layout
