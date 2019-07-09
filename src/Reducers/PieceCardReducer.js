let initialState = {
  bookmarked: false,
  like: 0,
  privateBut: "👀",
  private: false,
  selected: false,
}


const pieceCardReducer = (state = initialState, action) => {
  switch(action.type){
    case "FAVORITE_OR_NAH":
    return {
      ...state,
      bookmarked:!state.bookmarked
    }
    case "PRIVATE_OR_NAH":
  if( state.private == true){
    return {
      ...state,
      private: false,
      privateBut: "👀"
    }}if( state.private == false){
      return {
        ...state,
        private: true,
        privateBut: "🔐"
      }
    }


    default:
    return state;
  }
}
 export default pieceCardReducer
