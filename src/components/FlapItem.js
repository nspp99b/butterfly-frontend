import React from 'react';
import FlapList from './FlapList'
import FlapCreate from './FlapCreate'

class FlapItem extends React.Component {
  
  state = {
    imageSrc: "butterfly_logo_inverted_25px.png",
    showFlapCreate: false
  }
  
  handleMouseEnter = () => {
    this.setState({ imageSrc: "butterfly_logo_purple_25px.png"})
  }
  
  handleMouseLeave = () => {
    this.setState({ imageSrc: "butterfly_logo_inverted_25px.png"})
  }
  
  handleFlapCreate = () => {
    this.setState({ showFlapCreate: !this.state.showFlapCreate })
  }
  
  render() {
    return (
      <div className="flapItem">
        <span className="flapItem-user">{this.props.flap.user.name}</span>
        { this.props.flap.user.id === this.props.user.id && 
        <span className="flapItem-delete" onClick={() => this.props.updateFlap(this.props.flap.id)}>x</span> }
        <div>{this.props.flap.content}</div>
        { this.props.flap.user.name !== "--" &&
        <div>
          <img className="flapItem-img" src={this.state.imageSrc} alt="create effect" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} onClick={this.handleFlapCreate}>
          </img>
          { this.state.showFlapCreate === true && < FlapCreate user={this.props.user} parent={this.props.flap.id}/> }
        </div> }
        <div className="flapItem-fx" onClick={() => this.props.showEffects(this.props.flap.id)}>FX: {this.props.flap.fx_count}</div>
        
        { this.props.flap.showFlapEffects === true && < FlapList flaps={this.props.flap.effects} showEffects={this.props.showEffects} user={this.props.user}/> }
      </div>
    )
  }
}

export default FlapItem