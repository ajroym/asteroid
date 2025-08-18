const API_URL = 'https://www.neowsapp.com/rest/v1';

export const DateService = {
    getAsteroidByDate: function getAsteroidByDate(dateString: string) {
        const date = parseDate(dateString);
        const url = API_URL + `rest/v1/feed?start_date=${date}&end_date=${date}&detailed=true`
        
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
            return {
                status: response.status,
                statusText: response.statusText,
                stackTrace: error.stack,
            };
        }
    }
} 

function parseDate(dateString: string) {
    const date = new Date(dateString);
    const currentDate = new Date();

    if (date.getDay() < 0 || 
    (date.getMonth() < 0 || date.getMonth() > 11) || 
    (date.getFullYear() < 1900 || date.getFullYear() > currentDate.getFullYear())) {
        throw new ApplicationError("Invalid date format entered (YYYY-MM-DD).", "Please enter a valid date.")
    }

    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}