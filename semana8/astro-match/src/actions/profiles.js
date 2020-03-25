import axios from 'axios'

export const clearSwipes = () => async (dispatch) => {
	await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mackson/clear')
}

// Retorna dados do perfil

export const getProfileToSwipe = () => async (dispatch) => {
	const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mackson/person')

	dispatch(getProfileData(
		response.data.profile
	))
}

export const getProfileData = (profileToSwipe) => ({
		type: "PROFILE_DATA",
		payload: {
			profileToSwipe
		}
});


// Muda match do perfil


export const chooseProfile = (id, choice) => async (dispatch) => {

	await axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mackson/choose-person', 
	{
		id: id,
		choice: choice
	})

	dispatch(getProfileToSwipe())
}

// Recebe todos os matchs

export const getMatches = () => async (dispatch) => {
		const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mackson/matches')

		dispatch(getProfileMatches(
			response.data.matches
		))
}

export const getProfileMatches = (matches) => ({
	type: "MATCHES",
	payload: {
		matches
	}
})