import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

export default function BookShow() {
    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [book, setBook] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:5006/api/books/${id}`)
            .then((res) => setBook(res.data))
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <div className='p-4'>
            <BackButton />

            {isLoading ? (
                <Spinner />
            ) : (
                <>
                    <div className='flex items-center justify-center'>
                        <h1 className='text-3xl my-4'>{book.title}</h1>
                    </div>

                    <div className='flex flex-col border-2 border-pink-50 rounded-xl w-[600px] p-4 mx-auto'>
                        <div className='my-4'>
                            <span className='text-xl mr-4 text-gray-500'>
                                Id
                            </span>
                            <span>{book._id}</span>
                        </div>
                        <div className='my-4'>
                            <span className='text-xl mr-4 text-gray-500'>
                                Title
                            </span>
                            <span>{book.title}</span>
                        </div>
                        <div className='my-4'>
                            <span className='text-xl mr-4 text-gray-500'>
                                Author
                            </span>
                            <span>{book.author}</span>
                        </div>
                        <div className='my-4'>
                            <span className='text-xl mr-4 text-gray-500'>
                                Publish Year
                            </span>
                            <span>{book.publishYear}</span>
                        </div>
                        <div className='my-4'>
                            <span className='text-xl mr-4 text-gray-500'>
                                Created
                            </span>
                            <span>{new Date(book.createdAt).toString()}</span>
                        </div>
                        <div className='my-4'>
                            <span className='text-xl mr-4 text-gray-500'>
                                Last Updated
                            </span>
                            <span>{new Date(book.createdAt).toString()}</span>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
