import axios from 'axios'

// ACTION TYPES //

const GOT_SKILLS = 'GOT_SKILLS'
const GOT_SKILLS_USER_HAS = 'GOT_SKILLS_USER_HAS'
const GOT_SKILLS_USER_WANTS = 'GOT_SKILLS_USER_WANTS'

// ACTION CREATORS //

const gotSkillsActionCreator = skills => ({type: GOT_SKILLS, skills})

const gotSkillsUserHasActionCreator = skillsHas => ({
  type: GOT_SKILLS_USER_HAS,
  skillsHas
})

const gotSkillsUserWantsActionCreator = skillsWants => ({
  type: GOT_SKILLS_USER_WANTS,
  skillsWants
})

//THUNK CREATORS//

export const getSkillsThunkCrea