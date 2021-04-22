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
  me