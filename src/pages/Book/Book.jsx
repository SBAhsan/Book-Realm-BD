import React from "react";

const Book = ({ book }) => {
  const { bookName, author, image } = book;

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={image}
          alt="Books"
        />
      </figure>
      <div className="card-body">
        <div className="card-actions justify-start">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
        <h2 className="card-title">
          {bookName}
          {/* <div className="badge badge-secondary">NEW</div> */}
        </h2>
        <p>
          Author: <span className="font-bold">{author}</span>
        </p>
        
      </div>
    </div>
  );
};

export default Book;
