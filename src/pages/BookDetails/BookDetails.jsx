import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToDB } from "../../components/utilities/addToDB";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const books = useLoaderData();
  const book = books.find((book) => book.bookId === bookId);
  const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = book;
  console.log(id);

  const handleMarkAsRead = id => {
    addToDB(id);
  }

  return (
    <div className="md:flex items-center gap-10 p-10">
      <div className="bg-cyan-500 p-10 shadow-2xl rounded-xl">
        <div className="p-10 rounded-xl md:mb-10">
          <img src={image} alt="" className="h-2/4" />
        </div>
      </div>
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-extrabold">{bookName}</h1>
        <p className="text-xl py-5">By : {author}</p>
        <p className="py-2 text-xl border-y-2 border-dotted">{category}</p>
        <p className="w-96 py-6"><span className="font-bold">Review : </span>{review}</p>
        <p><span className="font-bold mr-2">Tags</span>
            {
            tags.map((tag) => (
              <div className="badge badge-outline bg-amber-300 mx-1">#{tag}</div>
            ))}
        </p>
        <div className="mt-5 py-5 border-t-2 border-dotted">
            <p className="pb-3">Number of pages: <span className="font-bold pl-3">{totalPages}</span></p>
            <p className="pb-3">Publisher: <span className="font-bold pl-3">{publisher}</span></p>
            <p className="pb-3">Year of Publishing: <span className="font-bold pl-3">{yearOfPublishing}</span></p>
            <p className="pb-3">Rating: <span className="font-bold pl-3">{rating}</span></p>
        </div>
        <button onClick={() => handleMarkAsRead(id)} className="px-5 py-2 bg-black text-amber-300 rounded-xl mr-2">Mark As Read</button>
        <button className="px-5 py-2 bg-amber-300 rounded-xl">Add To Wishlist</button>
      </div>
    </div>
  );
};

export default BookDetails;
