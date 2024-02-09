import axios from "axios";
import {useMovieDetails, useMovieResults,} from "../store/store";

const API_KEY = "720906cd";
const API_BASE_URL = 'http://www.omdbapi.com';

const client = axios.create({
    baseURL: API_BASE_URL,
    params: {apiKey: API_KEY},
});
export const populateMovieDetail = async (id: string) => {
    try{
        const response = await client.get('/', {
            params: {
                i: id,
                plot: "full",
            }
        });
        if(response.data.Response){
        //     search and asign the movie to the state movieResults on full
            useMovieDetails.setState({movieDetail: [...movieDetail, response.data]});


        } else {
            console.log("Couldn't get the data");
        }
    }
    catch (error){
        console.error(error);
        return [];
    }

}
export const searchMovies = async (title: string, year: string) => {
    try{
        const response = await client.get('/', {
            params: {
                apikey: API_KEY,
                s: title,
                type: "movie",
                y: year,
                plot: "plot",
            }
        });
        if(response.data.Response){
            useMovieResults.setState({movies: response.data.Search});
        } else {
            useMovieResults.setState({movies: []});
            console.log("Couldn't get the data");
        }
    }
    catch (error){
        console.error(error);
        return [];
    }
}