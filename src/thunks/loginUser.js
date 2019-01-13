import { signIn } from '../actions/index'

export const loginUser = (user) => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://bottd-movie-tracker.herokuapp.com/api/users/", {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json()
      dispatch(signIn(data.data))
    } catch(error) {
      return new Error('Error: something went wrong')
    }
  }
}