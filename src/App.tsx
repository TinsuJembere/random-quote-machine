import { useState } from 'react';
import './App.css';
import { FaTwitter, FaTumblr, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import quotes from './assets/quotes.json';

interface Quote {
  quote: string;
  author: string;
  image: string;
}

// Function to get a random quote
const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

function App() {
  // State for the current quote and background
  const [quote, setQuote] = useState<Quote>(getRandomQuote());

  const handleNewQuote = () => {
    setQuote(getRandomQuote()); 
  };

  return (
    <div
      className="app-container"
      style={{
        backgroundImage: `url(${quote.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <div id="quote-box">
        <div className="quote-content">
          <FaQuoteLeft size={24} style={{ marginRight: 10 }} />
          <h2 id="text">{quote.quote}</h2>
          <FaQuoteRight size={24} style={{ marginLeft: 10 }} />
          <h4 id="author">- {quote.author}</h4>
        </div>
        <div className="buttons">
          <a
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              `"${quote.quote}" - ${quote.author}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <FaTwitter />
          </a>
          <a
            id="tumblr-quote"
            href="https://www.tumblr.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <FaTumblr />
          </a>
          <button id="new-quote" className="btn" onClick={handleNewQuote}>
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
