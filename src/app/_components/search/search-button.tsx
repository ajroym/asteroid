'use client'

export default function SearchButton({ showModal }: { showModal: Function }) {
    const handleClick = () => {
        showModal();
    }

    return (
        <div className="flex items-center justify-center">
            <button onClick={handleClick} className="absolute w-64 h-16 cursor-pointer glow bg-linear-to-t from-blue-500 to-cyan-400 active:from-indigo-900 active:to-blue-700 text-cyan-950 text-shadow-2xs text-shadow-cyan-300 active:text-shadow-blue-500 active:text-black active:border-blue-600 rounded-full font-semibold text-2xl border-[1px] border-cyan-400">Measure Fate</button>
        </div>
    )
}