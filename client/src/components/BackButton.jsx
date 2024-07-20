import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

export default function BackButton({ destination = '/' }) {
    return (
        <div className='flex'>
            <Link
                to={destination}
                className='text-pink-400 hover:text-pink-500 py-1 rounded-lg w-fit'
            >
                <BsArrowLeft className='text-4xl' />
            </Link>
        </div>
    );
}
