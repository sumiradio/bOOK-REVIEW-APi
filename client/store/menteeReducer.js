import axios from 'axios'

const GETTING_MENTEES = 'GETTING_MENTEES '
const GOT_MENTEES = 'GOT_MENTEES'
const GETTING_ONE_MENTEE = 'GETTING_ONE_MENTEE'
const GOT_ONE_MENTEE = 'GOT_ONE_MENTEE'
const REMOVE_MENTEE = 'REMOVE_MENTEE'
const UPDATE_MENTEE = 'UPDATE_MENTEE'
const CREATE_MENTEE = 'CREATE_MENTEE'

const GETTING_MENTEES_SKILL = 'GETTING_MENTEES_SKILL'
const GOT_MENTEES_BY_SKILL = 'GOT_MENTEES_BY_SKILL'

const gettingMentees = () => ({
  type: GETTING_MENTEES
})

const gotMentees = mentees => ({
  type: GOT_MENTEES,
  mentees
})

const gettingOneMentee = () => ({
  type: GETTING_ONE_MENTEE
})

const gotOneMentee = mentee => ({
  type: GOT_ONE_MENTEE,
  mentee
})

const removeMentee = menteeId => ({
  type: REMOVE_MENTEE,
  menteeId
})

const updateMentee = mentee => ({
  type: UPDATE_MENTEE,
  mentee
})

const createMentee = mentee => ({
  type: CREATE_MENTEE,
  mentee
})

const gettingMenteesSkill = () => ({
  type: GETTING_MENTEES_SKILL
})

const gotMenteesBySkill = menteesSkill => ({
  type: GOT_MENTEES_BY_SKILL,
  menteesSkill
})

export const fetchMentees = () => {
  return async dispatch => {
    dispatch(gettingMentees())
    const response = await axios.get('/api/mentees')
    dispatch(gotMentees(response.data))
  }
}

export const fetchMenteesSkill = skillId => {
  return async dispatch => {
    dispatch(gettingMenteesSkill())
    const response = await axios.get(`/api/mentees/skill/${skillId}`)
    dispatch(gotMenteesBySkill(response.data))
  }
}

export const fetchMentee = menteeId => {
  return async dispatch => {
    dispatch(gettingOneMentee())
    const response = await axios.get(`/api/mentees/${menteeId}`)
    dispatch(gotOneMentee(response.data))
  }
}

export const deleteMentee = menteeId => {
  return async dispatch => {
    await axios.delete(`/api/mentees/${menteeId}`)
    dispatch(removeMentee(menteeId))
  }
}
export const putMentee = (menteeId, mentee) => {
  return async dispatch => {
    const response = await axios.put(`/api/mentees/${menteeId}`, mentee)
    dispatch(updateMentee(response.data))
  }
}

export const addMentee = mentee => {
  return async dispatch =>