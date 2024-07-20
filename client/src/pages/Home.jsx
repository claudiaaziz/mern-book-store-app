import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { IoIosAdd } from 'react-icons/io';
import Spinner from '../components/Spinner';
import BookTable from '../components/home/BookTable';
import BookCards from '../components/home/BookCards';

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [books, setBooks] = useState([]);
    const [displayType, setDisplayType] = useState('cards');

    useEffect(() => {
        axios
            .get('http://localhost:5006/api/books')
            .then((res) => setBooks(res.data.data))
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <div className='p-4'>
            <div className='flex justify-center items-center gap-x-4'>
                <button
                    className='bg-pink-200 hover:bg-pink-300 px-4 py-1 rounded-full'
                    onClick={() => setDisplayType('cards')}
                >
                    Cards
                </button>
                <button
                    className='bg-pink-200 hover:bg-pink-300 px-4 py-1 rounded-full'
                    onClick={() => setDisplayType('table')}
                >
                    Table
                </button>
            </div>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl my-8'>Books</h1>
                <Link to='/books/create'>
                    <IoIosAdd className='text-pink-400 hover:text-pink-500 text-5xl' />
                </Link>
            </div>
            {isLoading ? (
                <Spinner />
            ) : displayType === 'table' ? (
                <BookTable books={books} />
            ) : (
                <BookCards books={books} />
            )}
        </div>
    );
}
