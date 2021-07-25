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
})

const removeMentor = mentorId => ({
  type: REMOVE_MENTOR,
  mentorId
})

const updateMentor = mentor => ({
  type: UPDATE_MENTOR,
  mentor
})

const createMentor = mentor => ({
  type: CREATE_MENTOR,
  mentor
})

export const fetchMentors = () => {
  return async dispatch => {
    dispatch(gettingMentors())
    const response = await axios.get('/api/mentors')
    dispatch(gotMentors(response.data))
  }
}

export const fetchMentor = mentorId => {
  return async dispatch => {
    dispatch(gettingOneMentor())
    const response = await axio