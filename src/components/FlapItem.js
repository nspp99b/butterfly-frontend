import React from 'react';
import FlapList from './FlapList'
import FlapCreate from './FlapCreate'

class FlapItem extends React.Component {
  
  state = {
    imageSrc: "butterfly_logo_inverted_25px.png"
  }
  
  handleMouseEnter = () => {
    this.setState({ imageSrc: "butterfly_logo_purple_25px.png"})
  }
  
  handleMouseLeave = () => {
    this.setState({ imageSrc: "butterfly_logo_inverted_25px.png"})
  }
  
  render() {
    return (
      <div className="flapItem">
        <div className="flapItem-user">{this.props.flap.user.name}</div>
        <div>{this.props.flap.content}</div>
        <img className="flapItem-img" src={this.state.imageSrc} alt="create effect" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}></img>
        <div className="flapItem-fx" onClick={() => this.props.showEffects(this.props.flap.id)}>FX: {this.props.flap.fx_count}</div>
        
        { this.props.flap.showFlapEffects === true && < FlapList flaps={this.props.flap.effects} showEffects={this.props.showEffects}/> }
      </div>
    )
  }


}

export default FlapItem