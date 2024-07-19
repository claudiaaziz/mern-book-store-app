import Book from '../models/Book.js';

export const getBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).json({
            count: books.length,
            data: books,
        });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: err.message });
    }
};

export const getBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);

        if (!book) return res.status(404).json({ message: 'Book not found.' });

        return res.status(200).json(book);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: err.message });
    }
};

export const createBook = async (req, res) => {
    try {
        const { title, author, publishYear } = req.body;

        if (!title || !author || !publishYear) {
            return res
                .status(400)
                .json({ message: 'Missing title, author or publish year.' });
        }

        const newBook = { title, author, publishYear };
        const book = await Book.create(newBook);

        return res.status(201).json(book);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: err.message });
    }
};

export const updateBook = async (req, res) => {
    try {
        const { title, author, publishYear } = req.body;

        if (!title || !author || !publishYear) {
            return res.status(400).json({
                message: 'Missing title, author or publish year.',
            });
        }

        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            req.body
        );

        if (!updatedBook) {
            return res.status(404).json({ message: 'Book not found.' });
        } else {
            return res
                .status(200)
                .json({ message: 'Book updated successfully.' });
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: err.message });
    }
};

export const deleteBook = async (req, res) => {
    try {
        const result = await Book.findByIdAndDelete(req.params.id);

        if (!result) {
            return res.status(404).json({ message: 'Book not found.' });
        } else {
            return res
                .status(200)
                .json({ message: 'Book deleted successfully.' });
        }
    } catch (error) {
        console.log(err.message);
        res.status(500).json({ message: err.message });
    }
};
