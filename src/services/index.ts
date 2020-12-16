import axios from 'axios'
import appConfig from '../appConfig.json'

export async function searchMovie(payload: string) {
    return axios({
        method: 'GET',
        url: 'http://www.omdbapi.com/',
        params: {
            apiKey: appConfig.OMDbApiKey,
            t: payload,
        },
    })
}
