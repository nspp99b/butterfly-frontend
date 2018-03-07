import React from 'react';
import Signup from './Signup';
import FollowButton from './FollowButton'

class UserProfile extends React.Component {

  state = {
    showEdit: false
  }

  handleShowEdit = () => {
    this.setState({ showEdit: !this.state.showEdit })
  }

  render() {
    console.log('UserProfile rendered')
    console.log(this.props)
    return (
      <div className="userProfile">
        <img className="userProfile-img" src={this.props.user.image} alt="" />
        <div>
          <span>{this.props.user.name}</span>
            { this.props.currentUser && this.props.currentUser.id !== this.props.user.id && <FollowButton user={this.props.user} currentUser={this.props.currentUser} follow={this.props.follow} unfollow={this.props.unfollow}/>}
          <div className="userProfile-follow-counts">
            <span>following: {this.props.user.following.length} | </span>
            <span>followers: {this.props.user.followers.length}</span>
          </div>
          {this.props.user.id === this.props.currentUser.id && <div className="userProfile-edit" onClick={this.handleShowEdit}>edit</div>}
        </div>
        { this.state.showEdit === true && this.props.user.id === this.props.currentUser.id &&
          <div>
            < Signup currentUser={this.props.currentUser} handleShowEdit={this.handleShowEdit}/>
          </div>
        }
      </div>
    )
  }

}

export default UserProfile
