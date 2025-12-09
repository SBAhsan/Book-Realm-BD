import React from 'react';
import Book from '../Book/Book';

const Books = ({books}) => {

    return (
        <div className='bg-cyan-200 text-5xl p-3'>
            <h1 className='mb-10 text-center font-extrabold'>Books</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;