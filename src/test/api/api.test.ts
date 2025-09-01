import { DateService, NEOService, parseDate } from "@/lib/api/api";
import { ApplicationError } from "@/lib/error/ApplicationError";
import { ClientRequestError } from "@/lib/error/ClientRequestError";
import {describe, expect, test} from '@jest/globals';

describe('Checks to see if the date construction functionality works correctly', () => {
    test('Takes a date string of format MM/DD/YYYY and formats it to YYYY-MM-DD', () => {
        expect(parseDate('01/18/2008')).toBe('2008-1-18');
        expect(parseDate('12/11/2013')).toBe('2013-12-11');
        expect(parseDate('05-10-2024')).toBe('2024-5-10');
    });
});

describe('Checks to see if the date construction functionality rejects bad dates', () => {
    test('Throws ApplicationError when given a bad or nonsensical date', () => {
        expect(() => parseDate('1/2/1899')).toThrow(ApplicationError);
        expect(() => parseDate('1/33/1899')).toThrow(ApplicationError);
        expect(() => parseDate('13/33/1899')).toThrow(ApplicationError);
        expect(() => parseDate('dkndfgjknhsdiglkns')).toThrow(ApplicationError);
    });
});

describe('Makes a request to the NeoWs API to retrieve asteroids', () => {
        test('Throws a client request error upon being given a bad response', async () => {
        const badRequest = await NEOService.getAsteroidById('45s4fsd5g4sdg4ds6g');
        expect(badRequest).toBeInstanceOf(ClientRequestError);
    });
});

describe('Makes a request to the NeoWs API to retrieve asteroids or sentry data', () => {
    test('Returns response data to the user upon fulfillment of a request', async () => {
        const response = await DateService.getAsteroidByDate('02/15/2024');
        expect(response).toHaveProperty('element_count');
    })
})