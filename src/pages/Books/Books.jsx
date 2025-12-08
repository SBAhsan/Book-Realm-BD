import React from 'react';
import Book from '../Book/Book';

const Books = ({books}) => {

    return (
        <div>
            <h1>This is books</h1>
            <div className='grid grid-cols-3 gap-8'>
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;