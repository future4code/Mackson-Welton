import axios from 'axios'

export const clearSwipes = () => async (dispatch) => {
	await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/clear')
}

// Retorna dados do perfil

export const getProfileToSwipe = () => async (dispatch) => {
	const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person')

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


// Muda dados do perfil


export const chooseProfile = (id, choice) => async (dispatch) => {
	await axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person', 
	{
		id: id,
		choice: choice
	})
}