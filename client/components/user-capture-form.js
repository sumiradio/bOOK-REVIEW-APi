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
    const {data} = await axios.get('/api/skills')
    this.setState({skills: data})
  }

  handleSubmit = evt => {
    evt.preventDefault()
    this.props.updateUser(this.props.user.id, this.state.form)
    history.push('/profile')
  }

  handleChange = evt => {
    if (
      evt.target.name === 'skillsInterestedIn' ||
      evt.target.name === 'currentSkills'
    ) {
      const skillArr = this.state.form[evt.target.name]
      if (evt.target.checked) {
        skillArr.push(evt.target.id)
        this.setState({
          form: {...this.state.form, [evt.target.name]: [...skillArr]}
        })
      } else {
        const removeArr = skillArr.filter(el => el !== evt.target.value)
        this.setState({
          form: {...this.state.form, [evt.target.name]: [...removeArr]}
        })
      }
    } else {
      this.setState({
        form: {...this.state.form, [evt.target.name]: evt.target.value}
      })
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <Columns>
            <Columns.Column size={6}>
              <div className="form-content">
                <div htmlFor="status">
                  <label className="question">Please Select Your Gender</label>

                  <div className="controlRadio">
                    <input type="radio" name="gender" value="Female" /> Female
                    <input type="radio" name="gender" value="Male" /> Male
                    <input type="radio" name="gender" value="Non-binary" />
                    Non-binary
                    <input type="radio" name="gender" value="Other" /> Other
                  </div>
                </div>

                <div htmlFor="status">
                  <label>Enter Your Current Company</label>
                  <div className="control">
                    <input
                      type="text"
                      name="currentCompany"
                      placeholder="Current Company"
                    />
                  </div>
                </div>

                <div htmlFor="status">
                  <label>Enter Your Current Position</label>
                  <div className="control">
                    <input
                      type="text"
                      name="currentPosition"
                      placeholder="Current Position"
                    />
                  </div>
                </div>

                <div className="field" htmlFor="status">
                  <label>Enter Your Calendly Username: (Optional)</label>
                  <div className="control">
                    <div className="small">
                      <div>
                        {'https://calendly.com/ '}
                        <input
                          type="text"
                          name="calendlyUsername"
                          placeholder="USERNAME"
                        />
                      </div>
                      <div>
                        Don't