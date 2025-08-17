/*
    Renders a collection of particles. Total particle
    count is determined through props.
*/ 

// TODO: Validate number passed in through prop.
export default function Particles({ particleCount }: { particleCount: number }) {
    const particles = Array.from({ length: particleCount }, (_, i) => i + 1 )
    return (
        <div className="">
            {particles.map(item => (
                <div key={item} className="particle bg-neutral-100 shadow-sm shadow-neutral-200 absolute inset-0 w-[7px] h-[7px] rounded-full">

                </div>
            ))}
        </div>
    )
}