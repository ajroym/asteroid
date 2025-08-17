const apiUrl = 'https://www.neowsapp.com/rest/v1'

export const DateService = {
    getAsteroidByDate: function getAsteroidByDate(dateString: string) {
        const date = parseDate(dateString);
        const url = apiUrl + `rest/v1/feed?start_date=${date}&end_date=${date}&detailed=true`
        
        return requestData(url);
    } 
}

export const NEOService = {
    getAsteroidById: function getAsteroidById(id: string) { 
        const url = apiUrl + `/neo/${id}`;
        return requestData(url);
    },
}

async function requestData(url: string) {
    const response = await fetch(url);
    try {
        if (!response.ok) {
            return {
                status: response.status,
                statusText: response.statusText
            };
        }

        const responseData = await response.json();
        return responseData;

    } catch (error) {

    }
} 
/*
    TODO: Actually like. Do something in this function maybe.
*/ 
function parseDate(date: string) {
    try {
        return new Date(date);
    } catch(error) {

    }
}