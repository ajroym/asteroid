class ClientRequestError extends Error {
    
    /**
     * Handles 400-level errors a client might encounter
     * while making a request to the NeoWs API. 
     */
    constructor(public statusCode: string, 
                public statusMessage: string) {
        super();
    }
}