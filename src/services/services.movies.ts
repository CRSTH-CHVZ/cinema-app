import axios from "axios";
import {useSearchStore} from "../store/store";

const API_KEY = "720906cd";
const API_BASE_URL = 'http://www.omdbapi.com';

const client = axios.create({
    baseURL: API_BASE_URL,
    params: {api_key: API_KEY},
});

export const searchMovies = async (title: string, year: string) => {
    try{
        const response = await client.get('/', {
            params: {
                apikey: API_KEY,
                s: title,
                type: "movie",
                y: year
            }
        });

        if(response.data && response.data.results){
            return response.data.results;
        } else {
            console.log("Couldn't get the data");
        }
    }
    catch (error){
        console.error(error);
        return [];
    }
}