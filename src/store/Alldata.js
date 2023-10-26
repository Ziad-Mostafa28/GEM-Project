import axios from "axios";

const lang = localStorage.getItem('lang')
const instance = axios.create({
    baseURL: 'https://uat-iconcreations.com/2022/gem/public/api/web/',
    headers: { 'language': lang }
});

export const httpData = instance

const endPoints = {
    home: 'home',
    visit: 'visit',
}
export default endPoints