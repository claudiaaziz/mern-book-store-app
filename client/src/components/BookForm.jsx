// import { useState } from 'react';
// import BackButton from '../components/BackButton';

// export default function BookForm({ handleFormSubmit, formType }) {
//     const [title, setTitle] = useState('');
//     const [author, setAuthor] = useState('');
//     const [publishYear, setPublishYear] = useState('');

//     return (
//         <div className='p-4'>
//             <BackButton />

//             <div className='flex items-center justify-center'>
//                 <h1 className='text-3xl my-4'>{`${formType} Book`}</h1>
//             </div>

//             <form
//                 onSubmit={handleFormSubmit}
//                 className='flex flex-col border-2 border-pink-50 rounded-xl w-[600px] p-4 mx-auto'
//             >
//                 <div className='my-4'>
//                     <label
//                         htmlFor='title'
//                         className='text-xl mr-4 text-gray-500'
//                     >
//                         Title
//                     </label>
//                     <input
//                         id='title'
//                         type='text'
//                         value={title}
//                         onChange={(e) => setTitle(e.target.value)}
//                         className='mt-2 border-2 border-gray-100 px-4 py-2 w-full rounded-xl'
//                         placeholder='Title'
//                     />
//                 </div>
//                 <div className='my-4'>
//                     <label
//                         htmlFor='author'
//                         className='text-xl mr-4 text-gray-500'
//                     >
//                         Author
//                     </label>
//                     <input
//                         id='author'
//                         type='text'
//                         value={author}
//                         onChange={(e) => setAuthor(e.target.value)}
//                         className='mt-2 border-2 border-gray-100 px-4 py-2 w-full rounded-xl'
//                         placeholder='Author'
//                     />
//                 </div>
//                 <div className='my-4'>
//                     <label
//                         htmlFor='publishYear'
//                         className='text-xl mr-4 text-gray-500'
//                     >
//                         Publish Year
//                     </label>
//                     <input
//                         id='publishYear'
//                         type='number'
//                         value={publishYear}
//                         onChange={(e) => setPublishYear(e.target.value)}
//                         className='mt-2 border-2 border-gray-100 px-4 py-2 w-full rounded-xl'
//                         placeholder='Publish Year'
//                     />
//                 </div>
//                 <button className='p-2 bg-pink-400 m-8 text-white rounded-full'>
//                     Create
//                 </button>
//             </form>
//         </div>
//     );
// }
