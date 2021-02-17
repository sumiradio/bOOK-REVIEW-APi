import React from 'react'
import {Login, AboutHome} from '../components'
import {Hero, Heading} from 'react-bulma-components/full'

const Welcome = () => {
  return (
    <Hero size="fullheight" className="aboutSection">
      <Hero.Head renderAs="header">
        <Heading className="hero-title" size={1}>
          Welcome to Elevate{' '}
        </Heading>
        <Heading className="subtitle" size={3}>
          A reverse mentoring app.
        </Heading>
      </Hero.Head>
      <br />
      <Hero.Body>
        <div className="columns">
          <div className="column">
            <Heading size={5}>What is Reverse Mentoring?</Heading>
            It is a career development practice that helps businesses mine
            certain insights or information of the less experienced, often
            younger employ