import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchForPrompt} from '../Reducers/Fetching'


class PromptContainer extends Component {
    state = {
      character:"",
      setting:"",
      emotion:"",
      phrase:"",
      genre:""
    }

    handleThis = () => {
      console.log(this.props)
      this.props.fetchForPrompt()
    }

  render() {
      console.log(this.state.character, "IN PROMPT")
    return (
      <div>
      <form>
        setting
        <input style={{height:20, width:50}}type="checkbox" onChange={this.handleThis} ></input>
      {this.state.character}
      </form>
      <textarea style={{resize:"none", height:600
    , width:800}}  placeholder="write somethin"></textarea>


      </div>
    );
  }

}




export default connect(null, {fetchForPrompt})(PromptContainer)
