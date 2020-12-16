import axios from 'axios'
import appConfig from '../appConfig.json'

export async function searchMovie(payload: string) {
    return axios({
        method: 'GET',
        url: 'https://www.omdbapi.com/',
        params: {
            t: payload,
            apikey: appConfig.OMDbApiKey,
        },
    })
}
