import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Login} from '../components'
import {Navbar, Button, Dropdown, Icon} from 'react-bulma-components/full'

class NavbarMenu extends Component {
  state = {
    active: false
  }

  navToggleClick = () => {
    const {active} = this.state
    this.setState({active: !active})
  }

  render() {
    const {handleClick, isLoggedIn} = this.props
    return (
      <Navbar role="navigation" aria-label="main navigation">
        <a href={isLoggedIn ? '/home' : '/'} alt="Main Page">
          <Navbar.Brand>
            <img src={require('./elevate.png')} width="160" height="160" />
          </Navbar.Brand>
        </a>

        <div className="Nav_mobile">
          <Icon className="close" onClick={this.navToggleClick}>
            {' '}
            <span className="rbc rbc-bars" />
          </Icon>
          {this.state.active ? (
            isLoggedIn ? (
              <div>
                <div className="sidenav">
                  <Icon className="close" onClick={this.navToggleClick}>
                    {' '}
                    <span>X</span>
                  </Icon>
                  <Link to="/home" onClick={this.navToggleClick}>
                    Home
                  </Link>
                  <Link to="/profile" onClick={this.navToggleClick}>
                    Profile
                  </Link>
                  <Link to="/search" onClick={this.navToggleClick}>
                    Search
                  </Link>
                  <Link to="/about" onClick={this.navToggleClick}>
                    About
                  </Link>
                  <Link to="" onClick={handleClick}>
                    