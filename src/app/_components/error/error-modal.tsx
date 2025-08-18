import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

export default function ClientErrorModal({ message, closeModal }: { message: string, closeModal: Function }) {

    const handleClick = () => {
        closeModal();
    }

    return (
        <div className="fixed bg-red-500 w-64 h-18 z-3000 border-[1px] border-red-400 rounded-lg bottom-0 left-0 m-4 px-1 shadow-md">
            <div className='w-full flex justify-end items-start'>
                <button onClick={handleClick} className="cursor-pointer">
                    <FontAwesomeIcon className='fa-xs' icon={faX}></FontAwesomeIcon>
                </button>
            </div>
            <div className='w-full items-center ml-2 font-semibold'>
                {message}
            </div>
        </div>
    )
}