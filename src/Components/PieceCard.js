import React, { Component } from 'react';
import {connect} from 'react-redux'
import {handleClick} from '../Reducers/Fetching'


class PieceCard extends Component {

// handleClick = () => {
//   console.log(this.props.private)
//   return(dispatch) => {
// dispatch({type: "PRIVATE_OR_NAH"})
// }}

  render() {
    console.log(this.props, "<PROPS in PieceCard")
    return (
      <div>
        {this.props.piece}
        <br/>
          <button>edit</button>
          <button>favorite</button>
          <button>delete</button>
            <div className="radio">

      <div>Favorite
      <input class="star" type="checkbox" title="bookmark page"></input>
      </div>
      <div>
        <button onClick={this.props.handleClick
          }>{this.props.privateBut}</button>
      </div>

  </div>

      </div>
    );
  }

}

const mapStateToProps = (state) => {
  console.log(state, "I AM STATE IN PIECE CARD")

  return { id:state.user.id, private: state.PieceCardReducer.private, privateBut: state.PieceCardReducer.privateBut }
}

export default connect(mapStateToProps, {handleClick})(PieceCard)
