import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col justify-center min-h-200 text-center">
            <header className="text-black text-3xl font-semibold">The page you requested could not be found.</header>
            <p className="text-slate-800">
                Why don't you try heading back to the <Link className="underline" href={'/'}>index page</Link> for now? Go ahead and evaluate earth's fate!  
            </p>
        </div>
    )
}