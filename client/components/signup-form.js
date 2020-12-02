import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {signup} from '../store'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div>
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="status">
            <small>Are you a Mentor or a Mentee?</small>
          </label>
          <input type="checkbox" name="mentorMentee" value="mentor" /> Mentor
          <input type="checkbox" name="mentorMentee" value="mentee" /> Mentee
        </div>

        <div>
          <label htmlFor="skill">
            <small>What skill are you interested in?</small>
          </label>
          <input type="checkbox" name="skills" value="leadership" /> Leadership
          <input type="checkbox" name="skills" value="strategy" /> Strategy
          <input type="checkbox" name="skills" value="sales" /> Sales
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>

      {/* <a href="/auth/g