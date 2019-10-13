let initialState = {
  current_user: null,
  id: "",
  username: "",
  selectedPiece: {},
  token:"",
  password: "",
  name:"",
  pieces:[],
  groups:[],
  bio:"",
  avatar: ""

}

const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case "SAVE_USER_TO_STATE":
      let userObj = action.payload.user
      return {
        ...state,
        id: userObj.id,
        username: userObj.username,
        token: action.payload.jwt,
        name: userObj.name,
        pieces: userObj.pieces,
        avatar: userObj.avatar,
        bio: userObj.bio
      }

    case "REMOVE_PIECE":
    let numId = action.payload
    let pieceIndex = state.pieces.map(x=>{ return x.id}).indexOf(numId)

    let newState = state.pieces.splice(pieceIndex)
    console.log(state.pieces)
    return{
      ...state,
      pieces: newState
    }


    default:
      return state;
  }
}

export default userReducer
