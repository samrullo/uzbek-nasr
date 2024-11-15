import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useContext } from "react";
import AppContext from "../AppContext";

function BookContent() {
    const { baseURL,bookTitle } = useContext(AppContext)
    const { fileName } = useParams();
    const [bookContent, setBookContent] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [goToPage,setGoToPage]=useState(1)

    useEffect(() => {
        // Load the book content when the component mounts
        const loadBook = async () => {
            try {
                const theurl = `${baseURL}/data/uzbek_books/${fileName}`
                const response = await fetch(theurl);
                console.log(`will fetch ${theurl}`)
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
    }, [baseURL, fileName]);

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

    //handle go to page
    const handleGoToPage=(event)=>{
        event.preventDefault()
        setCurrentPage(parseInt(goToPage))
    }

    return (<div>
        <h1>{bookTitle}</h1>
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
        <div className="mt-3">
            <form className="form-inline d-flex" onSubmit={handleGoToPage}>
                <input
                    type="number"
                    className="form-control me-2"
                    placeholder="Maxsus betga utish"
                    aria-label="go-to-page"
                    value={goToPage}
                    onChange={(e)=>setGoToPage(e.target.value)}
                />
                <button className="button" type="submit">Utish</button>
            </form>
        </div>
    </div>)
}

export default BookContent;