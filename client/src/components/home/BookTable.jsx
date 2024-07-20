import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function BookTable({ books }) {
    return (
        <table className='w-full border-separate border-spacing-2'>
            <thead>
                <tr>
                    <th className='border border-pink-200 rounded-md'>No</th>
                    <th className='border border-pink-200 rounded-md'>Title</th>
                    <th className='border border-pink-200 rounded-md max-md:hidden'>
                        Author
                    </th>
                    <th className='border border-pink-200 rounded-md max-md:hidden'>
                        Publish Year
                    </th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book, idx) => (
                    <tr key={book._id} className='h-8'>
                        <td className='border border-pink-200 rounded-md text-center'>
                            {idx + 1}
                        </td>
                        <td className='border border-pink-200 rounded-md text-center'>
                            {book.title}
                        </td>
                        <td className='border border-pink-200 rounded-md text-center max-md:hidden'>
                            {book.author}
                        </td>
                        <td className='border border-pink-200 rounded-md text-center max-md:hidden'>
                            {book.publishYear}
                        </td>
                        <td>
                            <div className='flex justify-center gap-x-4'>
                                <Link to={`/books/details/${book._id}`}>
                                    <BsInfoCircle className='text-2xl text-gray-200 hover:text-pink-200' />
                                </Link>
                                <Link to={`/books/update/${book._id}`}>
                                    <AiOutlineEdit className='text-2xl text-amber-200 hover:text-pink-200' />
                                </Link>
                                <Link to={`/books/delete/${book._id}`}>
                                    <MdOutlineDelete className='text-2xl text-red-600 hover:text-pink-200' />
                                </Link>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
