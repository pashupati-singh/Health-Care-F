import React from 'react'
import { Image } from './Image'
import { NavBar } from './NavBar'
import { Testimonial } from './Testimonial'
import { Doctors } from './Doctors'

export const Home = () => {
  return (
    <div>
        <NavBar />
        <Image />
        <Doctors />
        <Testimonial />
    </div>
  )
}
