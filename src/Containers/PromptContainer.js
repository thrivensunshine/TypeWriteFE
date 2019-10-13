import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchForPrompt} from '../Reducers/Fetching'
import {fetchPostPiece} from '../Reducers/Fetching'


class PromptContainer extends Component {

    state = {
      character:"",
      setting:"",
      emotion:"",
      phrase:"",
      genre:"",
      piece:"",
      id:this.props.id
    }

    handleThis = (e) => {
      e.preventDefault()
      console.log(this.props)
      const promptInfo = this.state
      this.props.fetchForPrompt(promptInfo)
      console.log(this.props, "PROPS IN PROMPT AFTER FETCH")
      return <div> hi</div>
    }

    handleSubmit = (e) => {
      e.preventDefault()
      console.log(this.state)
      this.props.fetchPostPiece(this.state.id, this.state.piece, this.state.character, this.state.emotion, this.state.genre, this.state.phrase, this.state.setting)
      this.props.history.push('/mypage')
    }

    handleChange = (e) => {
      e.preventDefault()
      this.setState({
        piece: e.target.value,
        phrase: this.props.phrase,
        emotion: this.props.emotion,
        character:this.props.character,
        setting:this.props.setting,
        genre:this.props.genre

      })
      console.log(this.state, "<STATE BOO")
    }

  render() {
      console.log(this.props, " PROPS IN PROMPT")
      console.log(this.state, "STATE STATE STATE IN PROMPT")
    return (
      <div>
        <div>phrase:{this.props.phrase}<br/> emotion:{this.props.emotion}{}</div>
      <form onSubmit={this.handleSubmit}>

      <button type="checkbox" className="littlebutton" onClick={this.handleThis} >Promptme!</button>

    <br/>
      <textarea name="bodybaby" style={{resize:"none", height:600
    , width:800}}  placeholder="write somethin" onChange={this.handleChange}>
</textarea>
  <br/>
    <input type="submit" />
    </form>
      </div>
    );
  }


}

const mapStateToProps = (state) => {
  console.log(state, "I AM STATE IN PROMPT CONTAINER")

  return {phrase: state.promptContainer.phrase, character: state.promptContainer.character,setting:state.promptContainer.setting, genre: state.promptContainer.genre, emotion:state.promptContainer.emotion, topic: state.promptContainer.topic, piece: state.user.piece, id:state.user.id}
}



export default connect((mapStateToProps), {fetchPostPiece,fetchForPrompt})(PromptContainer)
