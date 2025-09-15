const MILLISECONDS_BEFORE_SEVENTY: number = -2207520000000;

/**
 * Should return a random date between now and 1970 or
 * 1900 and 1970.
 */
function generateRandomDate() {
    let scaleFactor = MILLISECONDS_BEFORE_SEVENTY;
    if (Math.random()) {
        scaleFactor = Date.now();
    }

    return Math.floor(Math.random() * (scaleFactor + 1));
}