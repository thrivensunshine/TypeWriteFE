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



export const sendTokenBackToPersist = (token) => {
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
      const phrasePluck = _.pluck(prompt,'phrase')
      const phraseSample = _.sample(phrasePluck)

      const settingPluck = _.pluck(prompt,'setting')
      const settingSample = _.sample(settingPluck)

      const emotionPluck = _.pluck(prompt,'emotion')
      const emotionSample = _.sample(emotionPluck)

      const characterPluck = _.pluck(prompt,'character')
      const characterSample = _.sample(characterPluck)

      const genrePluck = _.pluck(prompt,'genre')
      const genreSample = _.sample(genrePluck)

      const topicPluck = _.pluck(prompt,'topic')
      const topicSample = _.sample(topicPluck)
      const promptsRando = [{phraseSample,settingSample, emotionSample, characterSample, genreSample, topicSample}]
      // promptsRando.push(phraseSample,settingSample, emotionSample, characterSample, genreSample, topicSample)

      // console.log(promptsRando, "SAMPLE")


        dispatch({type: "SAVE_PROMPT_TO_STATE", payload: promptsRando})



      // console.log(prompt, "THIS IS MY PROMPT IN MY FETCH *********")

    })
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
