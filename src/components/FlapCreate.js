import React from 'react';
import { addFlap } from '../actions/addFlap';
import { connect } from 'react-redux';

class FlapCreate extends React.Component {

  state = {
    content: ''
  };

  handleFlapCreate = (e) => {
    e.preventDefault();

    // if inside an existing flap, hide yourself

    if (this.props.parent > 0) {
      this.props.handleShowFlapCreate();
    };
    this.props.addFlap(this.state.content, this.props.currentUser.id, this.props.parent);
    this.setState({
      content: ''
    });
  };

  onInputChange = (e) => {
    this.setState({
      content: e.target.value
    });
  };

  render() {
    console.log('FlapCreate rendered');
    console.log(this.props);
    
    return (
      <form className="flap-create" onSubmit={this.handleFlapCreate}>
        <textarea className="flap-create-textarea" placeholder="what did you do now..." value={this.state.content} name="content" onChange={this.onInputChange}></textarea>
        <input className="flap-create-submit-button" type="submit" value="Flap!" />
      </form>
    );
  };
};

export default connect(null, { addFlap })(FlapCreate);
