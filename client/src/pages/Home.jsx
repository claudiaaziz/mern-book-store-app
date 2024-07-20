import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { IoIosAdd } from "react-icons/io";
import Spinner from '../components/Spinner';

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:5006/api/books')
            .then((res) => setBooks(res.data.data))
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <div className='p-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl my-8'>Book List</h1>
                <Link to='/books/create'>
                    <IoIosAdd className='text-pink-200 text-5xl' />
                </Link>
            </div>
            {isLoading ? (
                <Spinner />
            ) : (
                <table className='w-full border-separate border-spacing-2'>
                    <thead>
                        <tr>
                            <th className='border border-pink-200 rounded-md'>
                                No
                            </th>
                            <th className='border border-pink-200 rounded-md'>
                                Title
                            </th>
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
                                            <BsInfoCircle className='text-2xl text-green-800' />
                                        </Link>
                                        <Link to={`/books/update/${book._id}`}>
                                            <AiOutlineEdit className='text-2xl text-yellow-600' />
                                        </Link>
                                        <Link to={`/books/delete/${book._id}`}>
                                            <MdOutlineDelete className='text-2xl text-red-600' />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
