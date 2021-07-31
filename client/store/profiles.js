import axios from 'axios'

/**
 * ACTION TYPES
 */
const GETTING_PROFILE = 'GETTING_PROFILE'
const GOT_PROFILE = 'GOT_PROFILE'

const GETTING_PROFILES = 'GETTING_PROFILES'
const GOT_PROFILES = 'GOT_PROFILES'

/**
 * ACTION CREATORS
 */

const gettingProfiles = () => ({
  type: GETTING_PROFILES
})

const gotProfiles = usersProfiles => ({
  type: GOT_PROFILES,
  usersProfiles
})

const gettingProfile = () => ({
  type: GETTING_PROFILE
})

const gotProfile = userProfile => ({
  type: GOT_PROFILE,
  userProfile
})

/**
 * THUNKS
 */

export const fetchProfiles = () => {
  return async dispatch => {
    try {
      dispatch(gettingProfiles())
      const {data} = await axios.get('/api/users')
      dispatch(gotProfiles(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const fetchOneProfile = userId => {
  return async dispatch => {
    try {
      dispatch(gettingProfile())
      const {data} = await axios.get(`/api/users/${userId}`)
      dispatch(gotProfile(data))
    } catch (error) {
      console.log(error)
    }
  }
}

const initialState = {
  loading: false,
  profiles: [],
  profile: {}
}

const 