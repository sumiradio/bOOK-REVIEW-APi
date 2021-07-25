import axios from 'axios'

const GETTING_MENTORS = 'GETTING_MENTORS '
const GOT_MENTORS = 'GOT_MENTORS'
const GETTING_ONE_MENTOR = 'GETTING_ONE_MENTOR'
const GOT_ONE_MENTOR = 'GOT_ONE_MENTOR'
const REMOVE_MENTOR = 'REMOVE_MENTOR'
const UPDATE_MENTOR = 'UPDATE_MENTOR'
const CREATE_MENTOR = 'CREATE_MENTOR'

const gettingMentors = () => ({
  type: GETTING_MENTORS
})

const gotMentors = mentors => ({
  type: GOT_MENTORS,
  mentors
})

const gettingOneMentor = () => ({
  type: GETTING_ONE_MENTOR
})

const gotOneMentor = mentor => ({
  type: GOT_ONE_MENTOR,
  mentor
