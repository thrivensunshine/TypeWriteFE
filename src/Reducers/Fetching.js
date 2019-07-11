import underscore from 'underscore';
var _ = require('lodash')




export const loginFetch = (loginInformation={}) => {
  return (dispatch) => {
    fetch("http://localhost:9393/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(loginInformation)
    })
    .then(res => res.json())
    .then((response) => {
      // console.log(response, "RESPONSE IN FETCH")
      if (!response.error) {
        localStorage.setItem("token", response.jwt)
        dispatch({type: "SAVE_USER_TO_STATE", payload: response})
      }
    })
  }
}

export const fetchTokenPersit = (token) => {
  return (dispatch) => {
    fetch("http://localhost:3000/persist", {
      method: "GET",
      headers: {
        "Authorization": token
      }
    })
    .then(res => res.json())
    .then(response =>{
      dispatch({type: "SAVE_USER_TO_STATE", payload: response})
    })
  }
}

export const fetchForPrompt = (promptInfo={}) => {

  return (dispatch) => {
    fetch("http://localhost:9393/prompts")
    .then(res => res.json())
    .then(prompt =>{
      // const promptsRando = [
      const phrasemap = _.map(prompt,'phrase')
      const phraseSample = _.sample(phrasemap)

      const settingmap = _.map(prompt,'setting')
      const settingSample = _.sample(settingmap)

      const emotionmap = _.map(prompt,'emotion')
      const emotionSample = _.sample(emotionmap)

      const charactermap = _.map(prompt,'character')
      const characterSample = _.sample(charactermap)

      const genremap = _.map(prompt,'genre')
      const genreSample = _.sample(genremap)

      const topicmap = _.map(prompt,'topic')
      const topicSample = _.sample(topicmap)
      const promptsRando = [{phraseSample,settingSample, emotionSample, characterSample, genreSample, topicSample}]
      // promptsRando.push(phraseSample,settingSample, emotionSample, characterSample, genreSample, topicSample)

      // console.log(promptsRando, "SAMPLE")


        dispatch({type: "SAVE_PROMPT_TO_STATE", payload: promptsRando})



      // console.log(prompt, "THIS IS MY PROMPT IN MY FETCH *********")

    })
  }
  }

export const fetchPostPiece = (theId, dBody, dCharacter, dEmotion, dGenre, dPhrase, dSetting) => {
  return (dispatch) => {
  fetch(`http://localhost:9393/pieces`, {
    method: 'POST',
    headers: {
      "Content-type":"application/json",
      "Accepts":"application/json",
      "Authorization": localStorage.token
    },
    body: JSON.stringify({
      body:dBody,
      user_id: theId,
      character: dCharacter,
      emotion: dEmotion,
      genre: dGenre,
      phrase: dPhrase,
      setting: dSetting

    })
  })
  .then(res => res.json())
  .then(response =>{
    dispatch({type: "SAVE_PIECE_TO_DB", payload: theId, dBody, dCharacter, dEmotion, dGenre, dPhrase, dSetting})
console.log(response, "RESPPPOONNNSE")

  })
}
}

export const fetchDeletePiece = (id) =>{
    fetch(`http://localhost:9393/pieces/${id}`,{
      method: 'delete'
    })
}


export const handleClick = () => {
  console.log("hi hi hih hi")
  return(dispatch) => {
dispatch({type: "PRIVATE_OR_NAH"})
}}

export const deletePiece = (id) => {
    console.log("THIS IS DELETE HANDLER", id)
fetchDeletePiece(id)
return(dispatch)=>{
  dispatch({type:"REMOVE_PIECE", payload: id})
 }

}

// export const fetchthingIDToBackend = (id) => {
//   return (dispatch, getState) => {
//     const applicationState = getState()
//     fetch(`http://localhost:3000/things/${id}/buy`, {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//         "Accepts": "application/json",
//         "Authorization": applicationState.user.token
//       }
//     })
//     .then(res => res.json())
//     .then(thing => {
//       dispatch({type: "SAVE_thing_TO_USER", payload: thing})
//     })
//   }
// }
