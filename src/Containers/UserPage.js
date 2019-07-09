import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import PieceCard from '../Components/PieceCard'


const  UserPage= (props) => (


  <div>

  <h2>Greetings, {props.name}</h2>
  <img style={{height:300, width:280}} src={props.avatar} alt="hey" />
  <p>You have written:</p>
  {props.pieces.map(piece =>{
    console.log(piece, "ITS A PIECE")
    return < PieceCard key={piece.id} piece={piece} />
  })}
  <button>
<Link to="/promptme">PROMPT ME</Link>
</button>
  </div>
);


const mapStateToProps = (state) => {
  console.log(state.user.pieces.map(one => one.body))
  console.log(state, "STATE IN USER+++++")
  return {username: state.user.username, name:state.user.name, pieces: state.user.pieces, avatar: state.user.avatar, pieces:state.user.pieces.map(one => one.body)}
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
