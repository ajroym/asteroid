import { ApplicationError } from "@/lib/error/ApplicationError";
import { ClientRequestError } from "@/lib/error/ClientRequestError";

const API_URL = 'https://www.neowsapp.com/rest/v1';

export const DateService = {
    getAsteroidByDate: async function getAsteroidByDate(dateString: string) {
        const date = parseDate(dateString);
        const url = API_URL + `/feed?start_date=${date}&end_date=${date}&detailed=true`
        
        return requestData(url);
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

export function parseDate(dateString: string) {
    const date = new Date(dateString);
    const currentDate = new Date();

    if ((date.getDay() <= 0 || !date.getDay()) || 
    (date.getMonth() < 0 || date.getMonth() > 11) || 
    (date.getFullYear() < 1900 || date.getFullYear() > currentDate.getFullYear())) {
        throw new ApplicationError("Invalid date format entered (YYYY-MM-DD).", "Please enter a valid date.");
    }

    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}