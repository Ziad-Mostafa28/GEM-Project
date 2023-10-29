import axios from "axios";

const language = localStorage.getItem('language')

const instance = axios.create(
    {
        baseURL: 'https://uat-iconcreations.com/2022/gem/public/api/web/',
        headers: {
            "Content-Type": "application/json",
            'language': language
        }
    });

export const httpData = instance

const endPoints = {
    home: 'home',
    visit: 'visit',
}
export default endPoints