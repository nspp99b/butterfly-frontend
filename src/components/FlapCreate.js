import React from 'react';

class FlapCreate extends React.Component {
  
  state = {
    content: '',
    user_id: this.props.user.id,
  }

  handleFlapCreate = (e) => {
    e.preventDefault()
    // adapter.auth.signup(this.state).then(res => {
    //   if (res.error) {
    //     alert(res.error)
    //   } else {
    //     this.props.history.push('/')
    //     this.props.setUser(res)
    //   }
    // })
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

export default FlapCreate