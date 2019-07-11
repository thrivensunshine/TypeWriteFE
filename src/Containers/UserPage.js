import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import PieceCard from '../Components/PieceCard'


const  UserPage= (props) => (


  <div>

  <div className="userprofile">
  <h2 className="welcomename">Welcome, {props.name}</h2>
  <img className="profilepic" style={{height:450, width:380}} src={props.avatar} alt="hey" />
  <br/>

  <Link className="littlebutton"to="/promptme">PROMPT ME</Link>

  </div>
  <p>You have written:</p>
  <div className="allpieces">
  {props.pieces.map(piece =>{
    console.log(piece, "ITS A PIECE")
    return < PieceCard key={piece.id} piece={piece[0]} pId={piece[1]} phrase={piece[2]} emotion={piece[3]}/>
  })}
  </div>

  </div>
);


const mapStateToProps = (state) => {
  console.log(state.user.pieces.map(one => one.body))
  console.log(state, "STATE IN USER+++++")
  return {username: state.user.username, name:state.user.name, pieces: state.user.pieces, avatar: state.user.avatar, pieces:state.user.pieces.map(one => [one.body, one.id, one.phrase, one.emotion] )}
}

export default connect(mapStateToProps)(UserPage, PieceCard);


// import React, { Component } from 'react';
//
// class UserPage extends Component {
//
//   state={
//     person: "",
//     pieces: [ "lbsdvhsdvhosdhiohioh verihv oirhvohrvovvlnasdvlndalvnalfbvlbvlbv",  "eouhcoACHoCONeouceiwubweivcivcecw"]
//   }
//
//   render() {
//     return (
//       this.state.pieces.map(piece =>(
//       <div>
//       piece
//       </div>
//       ))
//     );
//   }
//
// }
//
// export default UserPage;
