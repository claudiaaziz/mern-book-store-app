import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';

export default function DeleteBook() {
    const { id } = useParams();

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);

    const handleDeleteBook = () => {
        if (isLoading) return;

        setIsLoading(true);

        axios
            .delete(`http://localhost:5006/api/books/${id}`)
            .then(() => navigate('/'))
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false));
    };

    return (
        <div className='p-4'>
            <BackButton />

            <div className='flex items-center justify-center'>
                <h1 className='text-3xl my-4'>Delete Book</h1>
            </div>

            {isLoading ? <Spinner /> : ''}

            <div className='flex flex-col items-center border-2 border-pink-200 rounded-xl w-[600px] p-8 mx-auto'>
                <h3 className='text-2xl'>
                    Are you sure you want to delete this book?
                </h3>

                <button
                    className='p-4 w-full bg-red-600 m-8 text-white rounded-full'
                    onClick={handleDeleteBook}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}
