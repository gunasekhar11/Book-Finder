import React from "react";
import { useLocation } from "react-router-dom";
import "./ViewBook.css";
import NoPreviewImage from "../../../Assets/nopreview.jpeg";

const ViewBook: React.FC = () => {
  const location = useLocation();
  const { state } = location;
  const Book_Details = state;

  console.log(Book_Details);

  if (!Book_Details) {
    return (
      <div className="view-article-layout">
        <h1>No Book Details Available</h1>
      </div>
    );
  }

  return (
    <div className="row view-book-section mb-5">
      <div className="image-container d-flex justify-content-center col-lg-3 col-md-4 col-sm-12">
        {Book_Details?.cover_i ? (
          <img
            src={`https://covers.openlibrary.org/b/id/${Book_Details?.cover_i}-L.jpg`}
            alt={Book_Details?.title || "Book Cover"}
          />
        ) : (
          <img src={NoPreviewImage} alt="No Preview" />
        )}
      </div>
      <div className="view-article-layout col-lg-9 col-md-8 col-sm-12">
        <span className="small-heading-font color-primary">
          {Book_Details.title || "No Title Available"}
        </span>
        <div className="book-meta d-flex flex-column">
          <p>
            <strong>Author:</strong>{" "}
            {Book_Details.author_name?.join(", ") || "Unknown"}
          </p>
          <p>
            <strong>Publisher:</strong>{" "}
            {Book_Details.publisher?.join(", ") || "Unknown"}
          </p>
          <p>
            <strong>Publish Year:</strong>{" "}
            {Book_Details.publish_year?.join(", ") || "Unknown"}
          </p>
        </div>
        <div className="book-details">
          <p>
            <strong>Subjects:</strong>{" "}
            {Book_Details.subject?.join(", ") || "Not Specified"}
          </p>
          <p>
            <strong>Places:</strong>{" "}
            {Book_Details.place?.join(", ") || "Not Specified"}
          </p>
          <p>
            <strong>Ratings:</strong>{" "}
            {Book_Details.ratings_average || "Not Rated"}/5
          </p>
          <p>
            <strong>Pages:</strong>{" "}
            {Book_Details.number_of_pages_median || "Unknown"}
          </p>
          <p>
            <strong>Format:</strong>{" "}
            {Book_Details.format?.join(", ") || "Unknown"}
          </p>
          <p>
            <strong>Language:</strong>{" "}
            {Book_Details.language?.join(", ") || "Unknown"}
          </p>
          <a
            href={`https://openlibrary.org/books/${Book_Details?.edition_key[0]}`}
            target="_blank"
          >
            <button className="but color-white">View More About this Book</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ViewBook;
