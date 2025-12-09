import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ book }) => {
  const { bookId, bookName, author, image, tags, rating, category, yearOfPublishing } =
    book;

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-cyan-500 shadow-sm pt-6">
        <figure className="p-4 bg-cyan-200 w-80 h-70 mx-auto rounded-md">
          <img className="h-[166px]" src={image} alt="Books" />
        </figure>
        <div className="card-body">
          <div className="card-actions justify-start">
            {tags.map((tag) => (
              <div className="badge badge-outline">{tag}</div>
            ))}
          </div>
          <h2 className="card-title my-2">
            {bookName}
            <div className="badge badge-warning">{yearOfPublishing}</div>
          </h2>
          <p className="pb-2">
            Author: <span className="font-bold">{author}</span>
          </p>
          <div className="flex justify-between border-t-2 border-dotted pt-3">
            <p>{category}</p>
            <div className="card-actions justify-end">
              <p>{rating}</p>
              <FaStar />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
