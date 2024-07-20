import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DeleteBook from './pages/DeleteBook';
import UpdateBook from './pages/UpdateBook';
import BookShow from './pages/BookShow';
import CreateBook from './pages/CreateBook';

export default function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/books/create' element={<CreateBook />} />
            <Route path='books/details/:id' element={<BookShow />} />
            <Route path='/books/update/:id' element={<UpdateBook />} />
            <Route path='/books/delete/:id' element={<DeleteBook />} />
        </Routes>
    );
}
