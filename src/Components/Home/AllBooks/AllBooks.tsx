import React, { useEffect, useState } from "react";
import "./AllBooks.css";
import PaginationComponent from "../../Pagination/Pagination";
import { useNavigate } from "react-router-dom";
import { ROUTER_URL_CONSTANT } from "../../../Utilities/constants";
import { useSelector } from "react-redux";
import { authSelectors } from "../../../Store/Auth";
import Loader from "../../Loader/Loader";
import { dispatchStore } from "../../../Utilities/common";
import { bookFinderAPICall } from "../../../Services/BookFinder";
import NoPreviewImage from "../../../Assets/nopreview.jpeg";
import { FaSearch } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const AllBooks: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const [bookName, setBookName] = useState("");

  const handleBookNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBookName(event.target.value);
  };

  const submitHandler = (event: any) => {
    event.preventDefault();
    setCurrentPage(1);
    dispatchStore(bookFinderAPICall(bookName));
  };

  useEffect(() => {
    if (bookName != "") {
      dispatchStore(bookFinderAPICall(bookName));
    }
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const FetchBooks = useSelector(authSelectors.getBookState);
  const loadingState = FetchBooks?.loader;
  const error = FetchBooks?.error;
  const Books = FetchBooks?.data?.docs || [];
  const totalPages = Math.ceil(Books.length / itemsPerPage);

  const navigate = useNavigate();
  const handleNavigate = (book: any) => {
    navigate(ROUTER_URL_CONSTANT.VIEW_BOOK, { state: book });
  };

  // Get books for the current page
  const currentBooks = Books.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="all-books-layout">
      <div className="heading-title text-center d-flex flex-column align-items-center">
        <h2 className="title iq-tw-6">Welcome to BookHunt</h2>
        <p className="w-75">
          Discover your next great read in just a few clicks. Whether you're
          searching for a bestseller, a classic, or something new, we make it
          easy to find the perfect book for you. Start exploring now and let
          your next adventure begin!
        </p>
      </div>
      <div className="search-container">
        <form className="search" onSubmit={submitHandler}>
          <input
            type="text"
            value={bookName}
            autoFocus
            onChange={handleBookNameChange}
            placeholder="Enter The Book Title"
          />
          <button
            className="small-but rounded bg-white color-primary"
            onClick={() => setBookName("")}
            type="button"
          >
            <RxCross1 />
          </button>
          <button className="small-but rounded" type="submit">
            <FaSearch />
          </button>
        </form>
      </div>
      {currentBooks?.length > 0 && !loadingState && (
        <p className="text-left w-100" style={{ marginBottom: "-20px" }}>
          Showing <strong>{(currentPage - 1) * itemsPerPage + 1}</strong> -{" "}
          <strong>{Math.min(currentPage * itemsPerPage, Books.length)}</strong>{" "}
          out of <strong>{Books.length}</strong> results for your search.
        </p>
      )}
      {loadingState ? (
        <Loader />
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : !bookName && currentBooks.length == 0 ? (
        <p className="">Try to Search Book By its Title</p>
      ) : currentBooks.length > 0 ? (
        <div className="books-section row">
          {currentBooks.map((book: any, index: number) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6">
              <div className="book-card">
                <div className="image-container d-flex justify-content-center">
                  {book?.cover_i ? (
                    <img
                      src={`https://covers.openlibrary.org/b/id/${book?.cover_i}-L.jpg`}
                      alt={book?.title || "Book Cover"}
                    />
                  ) : (
                    <img src={NoPreviewImage} alt="No Preview" />
                  )}
                </div>
                <div className="d-flex flex-row align-items-center gap-2 justify-content-between">
                  <span className="book-title">
                    {book?.title || "Untitled"}
                  </span>
                </div>
                <span className="book-sub-title">
                  <strong>Author:</strong>{" "}
                  {book?.author_name?.join(", ") || "Unknown"}
                </span>
                <span className="book-sub-title">
                  <strong>Published:</strong>{" "}
                  {book?.first_publish_year || "N/A"}
                </span>
                <button
                  className="small-but"
                  onClick={() => handleNavigate(book)}
                >
                  View Book
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-books-message">No Books Found</p>
      )}
      {Books.length > 0 && (
        <div className="mt-5">
          <PaginationComponent
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

export default AllBooks;
