import axios from "axios"

export const BACKENDPOINT="https://restcountries.com/"

export default async function countriesData(){
    try{
        const response= await axios.get(`${BACKENDPOINT}/v3.1/all`)
        return response.data
    }catch(e){
        console.error(e)
    }
}
