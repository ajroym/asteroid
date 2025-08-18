import { NearEarthObject, NearEarthObjectsByDate } from "./neo";

export interface NeoResponseBody {
    links: {
        next: string,
        previous: string,
        self: string
    }

    element_count: number,
    near_earth_objects: NearEarthObjectsByDate
}


