import express from 'express';
import { createBook, deleteBook, getBook, getBooks, updateBook } from '../controllers/books.js'; 

const router = express.Router();

router.get('/:id', getBook);
router.get('/', getBooks);
router.post('/', createBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

export default router; 
