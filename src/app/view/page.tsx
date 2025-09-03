'use client'

import { useSearchParams } from "next/navigation"
import Image from "next/image";

import exampleImg from "../../../assets/example-img.jpg"
import DetailsBox from "./_components/details-box";
import { useEffect, useState } from "react";
import { DateService } from "@/lib/api/api";
import { NearEarthObject } from "@/lib/entities/neo";
import { ClientNeo } from "@/lib/entities/clientneo";

export default function ViewResults() {
    const [neoClientObject, setNeoClientObject] = useState<ClientNeo>({
        neoRefId: '0',
        name: 'undefined_object',
        estimatedDiameterMeters: 0.0,
        missDistance: '0',
        closeApproachDate: '01/01/1900',
        orbitingBody: 'N/A',
        firstObservationDate: '01/01/1900',
        lastObservationDate: '01/01/1900',
    })
    const [riskLevel, setRiskLevel] = useState<string>('NONE');

    const queryParams = useSearchParams();
    const dateParam = queryParams.get('date');

    const date = new Date(dateParam!);

    const evaluateRiskLevel = (neo: NearEarthObject) => {
        if (neo.is_potentially_hazardous_asteroid && !neo.is_sentry_object) {
            setRiskLevel('LOW');
        }
    }

    useEffect(() => {
        const fetchObjectByDate = async () => {
          DateService.getAsteroidByDate(dateParam!).then((response) => {
            setNeoClientObject({
                neoRefId: response!.neo_reference_id,
                name: response!.name,
                estimatedDiameterMeters: response!.estimated_diameter.meters.estimated_diameter_min,
                missDistance: response!.close_approach_data[0].miss_distance.kilometers,
                closeApproachDate: response!.close_approach_data[0].close_approach_date,
                orbitingBody: response!.close_approach_data[0].orbiting_body,
                firstObservationDate: response!.orbital_data.first_observation_date,
                lastObservationDate: response!.orbital_data.last_observation_date,
            })
            evaluateRiskLevel(response!);
          })
        }
        fetchObjectByDate();
    }, [])

    return (
        <div className="w-full min-h-screen flex flex-col items-center px-8 gap-16">
            <div className="w-full flex flex-col items-center justify-center gap-12">
                <div className="w-[90%]">
                    <div className="w-full text-cyan-950 text-3xl ml-2">
                        { neoClientObject.name }, { date.toLocaleDateString() }
                    </div>
                    <div className="w-full h-128">
                        <Image src={exampleImg} alt="example meteor image" className="w-full h-full border-[1px] border-neutral-400 rounded-lg object-cover object-top shadow-md shadow-neutral-500"></Image>
                    </div>
                    <div className="text-sm text-neutral-400">
                        Example image only. Not an actual image of the near-earth object.
                    </div>
                </div>
                <div className="flex flex-col w-full items-center gap-4">
                    <div className="text-cyan-950 text-4xl font-semibold text-shadow-lg">
                        RISK LEVEL:
                    </div>
                    <div className={(riskLevel == 'NONE' ? 'text-cyan-500' : '') + 
                                    (riskLevel == 'LOW' ? 'text-emerald-500' : '') +
                                    (riskLevel == 'MEDIUM' ? 'text-orange-500' : '') + 
                                    (riskLevel == 'HIGH' ? 'text-red-500' : '') + "  text-5xl font-semibold text-shadow-lg/30"}>
                        { riskLevel }
                    </div>
                </div>
                <DetailsBox clientNeo={neoClientObject}></DetailsBox>
            </div>
        </div>
    )
}