import React, { Component } from 'react';
import {connect} from 'react-redux'
import {handleClick} from '../Reducers/Fetching'
import {deletePiece} from '../Reducers/Fetching'

class PieceCard extends Component {

// handleClick = () => {
//   console.log(this.props.private)
//   return(dispatch) => {
// dispatch({type: "PRIVATE_OR_NAH"})
// }}

  render() {
    console.log(this.props, "<PROPS in PieceCard")
    return (

      <div className="wholecard">

        <div className="yourprompt">

        your prompts<br/>
      <div className="aaa">

      phrase: {this.props.phrase}
      <br/>
      emotion: {this.props.emotion}
        </div>
        </div>
        <br/>
          <div>
          <input class="star" type="checkbox" title="bookmark page"></input>
          </div>
          <div>
            <button onClick={this.props.handleClick
            } className="privatebutton">{this.props.privateBut}</button>
          <br/>
          </div>
          {this.props.piece}
          <br/>
      <div className="userbuttons">
          <button className="littlebutton">edit</button>
          <button className="littlebutton" onClick={(pId)=>{

              this.props.deletePiece(this.props.pId)}}>delete</button>
            <div className="radio">
              </div>


  </div>

      </div>
    );
  }

}

const mapStateToProps = (state) => {
  console.log(state, "I AM STATE IN PIECE CARD")

  return { id:state.user.id, private: state.PieceCardReducer.private, privateBut: state.PieceCardReducer.privateBut, pieceId:state.use, }
}

export default connect(mapStateToProps, {handleClick,deletePiece})(PieceCard)
