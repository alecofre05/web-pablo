import React from 'react'
import { Wsp } from './components/wsp/Wsp'
import { Info } from './components/info/Info'
import { Navbar } from './components/navbar/Navbar'
import { MyCarousel } from './components/carousel/MyCarousel'
import { Description } from './components/description/Description'
import { Card } from './components/areas/Card'
import { Services } from './components/services-description/Services'
import { Others } from './components/other-areas/Others'
import { Contact } from './components/contact/Contact'
import { Footer } from './components/footer/Footer'

export const App = () => {
  return (
    <div id="app">
        <Wsp />
        <Info />
        <Navbar />
        <MyCarousel />
        <Description />
        <Card />
        <Services />
        <Others />
        <Contact />
        <Footer />
    </div>
  )
}
