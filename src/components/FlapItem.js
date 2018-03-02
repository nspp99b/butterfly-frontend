import React from 'react';
import FlapList from './FlapList'
import FlapCreate from './FlapCreate'
import { Link } from 'react-router-dom'
// <span className="flapItem-user">{this.props.flap.user.name}</span>

class FlapItem extends React.Component {

  state = {
    imageSrc: "../butterfly_icon_white_25px.png",
    showFlapCreate: false
  }

  handleMouseEnter = () => {
    this.setState({ imageSrc: "../butterfly_icon_purple_25px.png"})
  }

  handleMouseLeave = () => {
    this.setState({ imageSrc: "../butterfly_icon_white_25px.png"})
  }

  handleFlapCreate = () => {
    this.setState({ showFlapCreate: !this.state.showFlapCreate })
  }

  render() {
    return (
      <div className="flapItem">
        <Link to={`/users/${this.props.flap.user.id}`}>{this.props.flap.user.name}</Link>

        { this.props.flap.user.id === this.props.currentUser.id &&
        <span className="flapItem-delete" onClick={() => this.props.updateFlap(this.props.flap.id)}>x</span> }
        <div>{this.props.flap.content}</div>
        { this.props.flap.user.name !== "--" &&
        <div>
          <img className="flapItem-img" src={this.state.imageSrc} alt="" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} onClick={this.handleFlapCreate}/>
          { this.state.showFlapCreate === true && < FlapCreate user={this.props.currentUser} parent={this.props.flap.id}/> }
        </div> }
        <div className="flapItem-fx" onClick={() => this.props.showEffects(this.props.flap.id)}>FX: {this.props.flap.fx_count}</div>

        { this.props.flap.showFlapEffects === true && < FlapList flaps={this.props.flap.effects} showEffects={this.props.showEffects} currentUser={this.props.currentUser}/> }
      </div>
    )
  }
}

export default FlapItem
