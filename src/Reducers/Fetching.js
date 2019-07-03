import underscore from 'underscore';

export const fetchthings = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/things")
    .then(res => res.json())
    .then(things => dispatch(savethingsToState(things)))
  }
}

export const savethingsToState = (things) => {
  return {type: "SAVE_thingS_TO_STATE", payload: things}
}

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
      console.log(response, "RESPONSE IN FETCH")
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

export const fetchForPrompt = () => {

  return (dispatch) => {
    fetch("http://localhost:9393/prompts")
    .then(res => res.json())
    .then(prompt =>{
      prompt.map(one=>{
        console.log(one.phrase, "phrase in prompt map")
      })
      // console.log(_.pluck(prompt, prompt.phrase))
      console.log(prompt, "THIS IS MY PROMPT IN MY FETCH *********")
      // dispatch({type: "SAVE_PROMPT_TO_STATE", payload: prompt})
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
