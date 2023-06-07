import { Link } from "react-router-dom";

const Book = ({ book }) => {
  return (
    <Link to={`../book/${book.isbn13}`}>
      <div className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded-lg shadow-2xl hover:shadow-2xl">
        <img
          src={book.image}
          alt="book cover"
          className="object-cover w-full h-56 md:h-64 xl:h-80"
        />
        <div className=" bg-black bg-opacity-80 opacity-0 hover:opacity-100 text-gray-50 absolute inset-0 px-6 py-4  transition-opacity duration-200 hover:cursor-pointer">
          <p>{book.title}</p>
          <br />
          <p>{book.subtitle}</p>
          <br />
          <p className="absolute bottom-5">Price:{book.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Book;
