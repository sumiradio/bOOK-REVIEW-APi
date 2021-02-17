import React from 'react'
import {Login, AboutHome} from '../components'
import {Hero, Heading} from 'react-bulma-components/full'

const Welcome = () => {
  return (
    <Hero size="fullheight" className="aboutSection">
      <Hero.Head renderAs="header">
        <Heading className="hero-title" size={1}>
          Welcome to Elevate{