import React, {Component} from 'react'
import {fetchBookings} from '../store/bookingReducer'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export class Booking extends Component {
  componentDidMount() {
    this.props.fetchBookings()
  }
  render() {
    const {bookings, loading, userId} = this.props

    if (loading) return <div>Loading...</div>
    let history

    if (
      bookings.filter(booking => booking.mentorId === userId) ||
      bookings.filter(booking => booking.menteeId === userId)
    ) {
      history = bookings.filter(
        booking => booking.mentorId === userId || boo