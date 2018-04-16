import React from 'react';
import FlapList from './FlapList';
import FlapCreate from './FlapCreate';
import { Link } from 'react-router-dom';

class FlapItem extends React.Component {

  state = {
    imageSrc: "/butterfly_icon_white_25px.png",
    showFlapCreate: false,
    showFlapEffects: false
  }

  handleMouseEnter = () => {
    this.setState({ imageSrc: "/butterfly_icon_purple_25px.png"})
  }

  handleMouseLeave = () => {
    this.setState({ imageSrc: "/butterfly_icon_white_25px.png"})
  }

  handleShowFlapCreate = () => {
    this.setState({ showFlapCreate: !this.state.showFlapCreate })
  }

  handleShowFlapEffects = () => {
    this.setState({ showFlapEffects: !this.state.showFlapEffects })
  }

  render() {
    console.log('FlapItem rendered')
    console.log(this.props)
    return (
      <div className="flapItem">
        <div className="flapItem-left">
          <img className="flapItem-img" src={this.props.flap.user.image} alt="" width="80px" height="80px"/>
        </div>
        <div className="flapItem-right">
          <Link to={`/users/${this.props.flap.user.id}`}>{this.props.flap.user.name}</Link>

          { this.props.flap.user.id === this.props.currentUser.id &&
          <span className="flapItem-delete" onClick={() => this.props.updateFlap(this.props.flap.id)}>x</span> }
          <span className="flapItem-timeago">
            {this.props.flap.created_at}
          </span>
          <div>{this.props.flap.content}</div>
          { this.props.flap.user.name !== "--" &&
          <div>
            <img className="flapItem-img" src={this.state.imageSrc} alt="" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} onClick={this.handleShowFlapCreate}/>
            { this.state.showFlapCreate === true && < FlapCreate currentUser={this.props.currentUser} handleShowFlapCreate={this.handleShowFlapCreate} parent={this.props.flap.id}/> }
          </div> }
          <div className="flapItem-fx" onClick={() => this.handleShowFlapEffects()}>FX: {this.props.flap.fxc}</div>

          { this.state.showFlapEffects === true && < FlapList flaps={this.props.flap.effects} currentUser={this.props.currentUser} updateFlap={this.props.updateFlap}/> }
        </div>
      </div>
    )
  }
}

export default FlapItem
