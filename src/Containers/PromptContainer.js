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

    handleThis = (e) => {
      e.preventDefault()
      console.log(this.props)
      const promptInfo = this.state
      this.props.fetchForPrompt(promptInfo)
      console.log(this.props, "PROPS IN PROMPT AFTER FETCH")
      return <div> hi</div>
    }

  render() {
      console.log(this.props, "IN PROMPT")
    return (
      <div>
        <div>phrase:{this.props.phrase}<br/> emotion:{this.props.emotion}{}</div>
      <form>

      <button type="checkbox" onClick={this.handleThis} >Promptme!</button>
      {this.state.character}
    <br/>
      <textarea style={{resize:"none", height:600
    , width:800}}  placeholder="write somethin"></textarea>
  <br/>
    <input type="submit" />
    </form>
      </div>
    );
  }


}

const mapStateToProps = (state) => {
  console.log(state.promptContainer, "I AM STATE IN PROMPT CONTAINER")

  return {phrase: state.promptContainer.phrase, character: state.promptContainer.character,setting:state.promptContainer.setting, genre: state.promptContainer.genre, emotion:state.promptContainer.emotion, topic: state.promptContainer.topic }
}



export default connect((mapStateToProps), {fetchForPrompt})(PromptContainer)
