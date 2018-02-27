import React from 'react';
import { addFlap } from '../actions/addFlap';
import { connect } from 'react-redux';

class FlapCreate extends React.Component {
  
  state = {
    content: '',
    user_id: this.props.user.id,
  }

  handleFlapCreate = (e) => {
    e.preventDefault()
    this.props.addFlap(this.state.content, this.state.user_id)
    this.setState({
      content: ''
    })
  }

  onInputChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }

  render() {
    return (
      <form className="flap-create" onSubmit={this.handleFlapCreate}>
        <textarea className="flap-create-textarea" value={this.state.content} name="content" onChange={this.onInputChange}></textarea> 
        <input className="flap-create-submit-button" type="submit" value="create new flap" />
      </form>
    )
  }
}

export default connect(null, { addFlap })(FlapCreate)