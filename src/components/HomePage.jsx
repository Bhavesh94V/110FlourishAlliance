import React from 'react'
import HomeCarosule from './HomeCarosule'
import AboutUs from './AboutUs'
import KeyHighlights from './KeyHighlights'
import Service from './Service'
import AboutArea from './AboutArea '
import LogosSection from './LogosSection '
import Blog from './Blog'
import Testimonial from './Testimonial'
import Footer from './Footer'
import FormIcons from './FormIcons'

export default function HomePage() {
    return (
        <div>
            <HomeCarosule></HomeCarosule>
            <AboutUs></AboutUs>
            <Service></Service>
            <KeyHighlights></KeyHighlights>
            <AboutArea></AboutArea>
            <LogosSection></LogosSection>
            <Blog></Blog>
            <Testimonial></Testimonial>
            <Footer></Footer>
            {/* <FormIcons></FormIcons> */}
        </div>
    )
}
