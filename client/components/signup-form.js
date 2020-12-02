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
     