import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useSnackbar } from 'notistack';

export default function UpdateBook() {
    const { id } = useParams();

    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const [isLoading, setIsLoading] = useState(true);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');

    useEffect(() => {
        axios
            .get(`http://localhost:5006/api/books/${id}`)
            .then((res) => {
                setTitle(res.data.title);
                setAuthor(res.data.author);
                setPublishYear(res.data.publishYear);
            })
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false));
    }, []);

    const handleUpdatedBook = (e) => {
        e.preventDefault();

        if (isLoading) return;

        setIsLoading(true);

        const updatedBook = {
            title,
            author,
            publishYear,
        };

        axios
            .put(`http://localhost:5006/api/books/${id}`, updatedBook)
            .then(() => {
                enqueueSnackbar('Book updated successfully', {
                    variant: 'success',
                });
                navigate('/');
            })
            .catch((err) => {
                enqueueSnackbar(`Error: ${err.response.data.message}`, {
                    variant: 'error',
                });
                console.log(err);
            })
            .finally(() => setIsLoading(false));
    };

    return (
        <div className='p-4'>
            <BackButton />

            <div className='flex items-center justify-center'>
                <h1 className='text-3xl my-4'>Update Book</h1>
            </div>

            {isLoading && <Spinner />}

            <form
                onSubmit={handleUpdatedBook}
                className='flex flex-col border-2 border-pink-50 rounded-xl w-[600px] p-4 mx-auto'
            >
                <div className='my-4'>
                    <label
                        htmlFor='title'
                        className='text-xl mr-4 text-gray-500'
                    >
                        Title
                    </label>
                    <input
                        id='title'
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='mt-2 border-2 border-gray-100 px-4 py-2 w-full rounded-xl'
                        placeholder='Title'
                    />
                </div>
                <div className='my-4'>
                    <label
                        htmlFor='author'
                        className='text-xl mr-4 text-gray-500'
                    >
                        Author
                    </label>
                    <input
                        id='author'
                        type='text'
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className='mt-2 border-2 border-gray-100 px-4 py-2 w-full rounded-xl'
                        placeholder='Author'
                    />
                </div>
                <div className='my-4'>
                    <label
                        htmlFor='publishYear'
                        className='text-xl mr-4 text-gray-500'
                    >
                        Publish Year
                    </label>
                    <input
                        id='publishYear'
                        type='number'
                        value={publishYear}
                        onChange={(e) => setPublishYear(e.target.value)}
                        className='mt-2 border-2 border-gray-100 px-4 py-2 w-full rounded-xl'
                        placeholder='Publish Year'
                    />
                </div>

                <button className='p-2 bg-pink-400 m-8 text-white rounded-full'>
                    Update
                </button>
            </form>
        </div>
    );
}
