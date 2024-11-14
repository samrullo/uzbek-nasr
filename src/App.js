// 1. Install React and create the project
// npx create-react-app book-viewer

// 2. Replace the content in src/App.js with the code below:

import React, { useEffect, useState } from "react";
import "./App.css"; // Move your CSS here

function App() {
  const [bookContent, setBookContent] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Load the book content when the component mounts
    const loadBook = async () => {
      try {
        const response = await fetch(
          "/data/oybek_mukammal_asarlar_to_plami_20_jildlik_5_jild_qutlug_qon_roman_start_400_whole_ocr.txt"
        );
        const text = await response.text();

        // Tokenize and split text into pages
        const tokens = tokenize(text);
        const pages = splitIntoPages(tokens);
        setBookContent(pages);
      } catch (error) {
        console.error("Error loading book content:", error);
      }
    };

    loadBook();
  }, []);

  // Tokenize the text
  const tokenize = (text) =>
    text.match(/[\w\u0400-\u04FF]+|\n|[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/g) || [];

  // Split tokens into pages
  const splitIntoPages = (tokens, pageSize = 1000) => {
    const pages = [];
    for (let i = 0; i < tokens.length; i += pageSize) {
      pages.push(tokens.slice(i, i + pageSize).join(" "));
    }
    return pages;
  };

  // Render the current page
  const renderPage = () => bookContent[currentPage - 1] || "Page not found.";

  // Go to previous page
  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Go to next page
  const nextPage = () => {
    if (currentPage < bookContent.length) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="container">
      <div className="title">Book Viewer</div>

      <div className="content-box">{renderPage()}</div>

      <div className="page-number">
        Page {currentPage} of {bookContent.length || 1}
      </div>

      <div className="button-container">
        <button className="button" onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button
          className="button"
          onClick={nextPage}
          disabled={currentPage === bookContent.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
