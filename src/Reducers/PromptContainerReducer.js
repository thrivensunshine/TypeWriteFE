let initialState = {


    character:"",
    setting:"",
    emotion:"",
    phrase:"",
    genre:""


}

const promptContainerReducer = (state = initialState, action) => {
  switch (action.type) {

    case "SAVE_PROMPT_TO_STATE":
      let promptObj = action.payload
      console.log(promptObj[0].emotionSample, "PAYLOAD BITCHES")
      return {
        ...state,
        // id: promptObj.id,
        character: promptObj[0].characterSample,

        setting: promptObj[0].settingSample,
        emotion: promptObj[0].emotionSample,
        phrase: promptObj[0].phraseSample,
        genre: promptObj[0].genreSample
      }

    default:
      return state;
  }
}

export default promptContainerReducer
