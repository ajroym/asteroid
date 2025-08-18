class ApplicationError extends Error {
    /**
     * Handles all non-networking related errors,
     * any other error thrown by the application.
     */
    constructor(public message: string,
                public clientMessage: string) {
        super();
    }
}