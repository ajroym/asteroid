import { ApplicationError } from "@/lib/error/ApplicationError";
import { ClientRequestError } from "@/lib/error/ClientRequestError";
import { NearEarthObject, NearEarthObjectsByDate } from "../entities/neo";

const API_URL = 'https://www.neowsapp.com/rest/v1';

export const DateService = {
    getAsteroidByDate: async function getAsteroidByDate(dateString: string) {
        const date = parseDate(dateString);
        const url = API_URL + `/feed?start_date=${date}&end_date=${date}&detailed=true`
        
        const response = await requestData(url);
        return findMostHazardousObject(response, date);
    } 
}

export const NEOService = {
    getAsteroidById: function getAsteroidById(id: string) { 
        const url = API_URL + `/neo/${id}`;
        return requestData(url); 
    },
    getSentryById: function getSentryById(id: string) {
        const url = API_URL + `/neo/sentry/${id}`;
        return requestData(url);
    }
}

async function requestData(url: string) {
    const response = await fetch(url);
    try {
        if (!response.ok) {
            throw new ClientRequestError(String(response.status), response.statusText)
        }

        const responseData = await response.json();
        return responseData;

    } catch (error) {
        if (error instanceof ClientRequestError) {
            return error as ClientRequestError;
        }
    }
} 

function findMostHazardousObject(earthObjects: NearEarthObjectsByDate, date: string) {
    let object: NearEarthObject | undefined = undefined;
    const objects = earthObjects.near_earth_objects;

    for (let obj of objects[date]) {
        if (!object) object = obj;

        if (obj.is_potentially_hazardous_asteroid && !object!.is_potentially_hazardous_asteroid ||
           ((obj.is_potentially_hazardous_asteroid && object!.is_potentially_hazardous_asteroid) && 
            Number(obj.close_approach_data[0].miss_distance.kilometers) < Number(object!.close_approach_data[0].miss_distance.kilometers))) 
         {
            object = obj;
         }
    }
    return object;
}

/*
    TODO : FIX THIS LATER
*/
export function parseDate(dateString: string) {
    const date = new Date(dateString);
    const currentDate = new Date();

    if ((date.getDay() <= 0 || !date.getDay()) || 
    (date.getMonth() < 0 || date.getMonth() > 11) || 
    (date.getFullYear() < 1900 || date.getFullYear() > currentDate.getFullYear())) {
        throw new ApplicationError("Invalid date format entered (YYYY-MM-DD).", "Please enter a valid date.");
    }

    const year = String(date.getFullYear());
    let month = String(date.getMonth() + 1);
    let day = String(date.getDate() + 1);

    if (date.getMonth() + 1 < 10) month = '0' + month;
    if (date.getDate() + 1 < 10) day = '0' + day;


    return `${year}-${month}-${day}`;
}