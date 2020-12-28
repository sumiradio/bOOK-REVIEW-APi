import React from 'react'
import axios from 'axios'
import {SkillsListName, SkillsListBox} from './skills-list'
import {connect} from 'react-redux'
import {updateUser} from '../store/user'
import history from '../history'
import {Columns, Table} from 'react-bulma-components/full'

class UserCaptureForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      skills: [],
      form: {
        gender: '',
        skillsInterestedIn: [],
        currentCompany: '',
        currentPosition: '',
        bio: '',
        currentSkills: [],
        calendlyUsername: ''
      }
    }
  }

  async componentDidMount() {
    const {data} = await axios.get('/