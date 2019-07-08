import React, { Component } from 'react';
import {connect} from 'react-redux'


class PieceCard extends Component {

  render() {
    console.log(this.props, "<PROPS")
    return (
      <div>
        {this.props.piece}
        <br/>
          <button>edit</button>
          <button>favorite</button>
          <button>delete</button>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  console.log(state, "I AM STATE IN PIECE CARD")

  // return {phrase: state.promptContainer.phrase, character: state.promptContainer.character,setting:state.promptContainer.setting, genre: state.promptContainer.genre, emotion:state.promptContainer.emotion, topic: state.promptContainer.topic, piece: state.user.piece, id:state.user.id}
}

export default connect(mapStateToProps)(PieceCard)
