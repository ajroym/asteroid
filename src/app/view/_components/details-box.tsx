import { ClientNeo } from "@/lib/entities/clientneo";
import { ClientSentry } from "@/lib/entities/clientsentry";
import NoObjectData from "./no-data";

function HasSentry({ clientSentry }: { clientSentry: ClientSentry | undefined }) {
    if (clientSentry) {
        return (
            <div className="flex flex-col gap-4">
            { Object.entries(clientSentry).map(([key, value]) => (
                    <div key={key}>
                        <span className="text-black"><span className="font-semibold">{ key + ': ' } </span>{ value }</span>
                        <div className="w-full h-[1px] bg-radial from-neutral-400 to-white"></div>
                    </div>
            ))}
            </div>
        )
    }
    return (
        <NoObjectData></NoObjectData>
    )
}

export default function DetailsBox({ clientNeo, clientSentry }: { clientNeo: ClientNeo, clientSentry: ClientSentry | undefined }) {
    return (
        <div className="w-[80%] min-h-96">
            <div className="flex items-center justify-center gap-92 w-full my-8">
                <div>
                    <label className="text-cyan-950 text-3xl font-semibold">Object Details</label>
                    <div className="w-96 h-128 bg-white rounded-md shadow-md shadow-neutral-400 p-6">
                        <div className="flex flex-col gap-4">
                        { Object.entries(clientNeo).map(([key, value]) => (
                                <div key={key}>
                                    <span className="text-black"><span className="font-semibold">{ key + ': ' } </span>{ value }</span>
                                    <div className="w-full h-[1px] bg-radial from-neutral-400 to-white"></div>
                                </div>
                        ))}
                        </div>
                    </div>
                </div>
                <div>
                    <label className="text-cyan-950 text-3xl font-semibold">Sentry Data</label>
                    <div className="w-96 h-128 bg-white rounded-md shadow-md shadow-neutral-400 p-6">
                        <HasSentry clientSentry={clientSentry}></HasSentry>
                    </div>
                </div>
            </div>
        </div>
    )
}