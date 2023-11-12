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
    museum: 'museum/museum-page',
    experience: 'experience',
    whats: 'whats-on/whats-on-page',
    Current: 'whats-on/list?filter=current',
    Upcoming: 'whats-on/list?filter=upcoming',
    museumCollection: '/museum/collections-page',
    Category: 'museum/collections/filters/categories',
    Period: 'museum/collections/filters/periods',
    Material: 'museum/collections/filters/material',
    Provenance: 'museum/collections/filters/provenances',
    Gallery: 'museum/collections/filters/gallery',
}
export default endPoints