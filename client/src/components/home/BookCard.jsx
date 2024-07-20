import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

export default function BookCard({ book }) {
    return (
        <div className='border-2 border-pink-200 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'>
            <h2 className='absolute top-3 right-2 px-4 py-1 bg-pink-400 rounded-lg text-white'>
                {book.publishYear}
            </h2>
            <h4 className='my-2 text-gray-500'>{book._id}</h4>
            <div className='flex justify-start items-center gap-x-2'>
                <PiBookOpenTextLight className='text-red-300 text-2xl' />
                <h2 className='my-1'>{book.title}</h2>
            </div>
            <div className='flex justify-start items-center gap-x-2'>
                <BiUserCircle className='text-red-300 text-2xl' />
                <h2 className='my-1'>{book.author}</h2>
            </div>
            <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
                <BiShow className='text-3xl text-blue-800 hover:text-pink-200 cursor-pointer' />
                <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle className='text-2xl text-gray-200 hover:text-pink-200' />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit className='text-2xl text-amber-200 hover:text-pink-200' />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className='text-2xl text-red-600 hover:text-pink-200' />
                </Link>
            </div>
        </div>
    );
}
