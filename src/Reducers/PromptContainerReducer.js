let initialState = {

    id:"",
    character:"",
    setting:"",
    emotion:"",
    phrase:"",
    genre:""


}

const PromptContainerReducer = (state = initialState, action) => {
  switch (action.type) {

    case "SAVE_USER_TO_STATE":
      let userObj = action.payload.user
      return {
        ...state,
        id: userObj.id,
        character: userObj.character,

        setting: userObj.setting,
        emotion: userObj.emotion,
        phrase: userObj.phrase,
        genre: userObj.genre
      }

    default:
      return state;
  }
}

export default PromptContainerReducer
