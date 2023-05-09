import { useEffect, useState } from "react";

export default function MainPage() {
  const [quote, setQuote] = useState({});
  const [filter, setFilter] = useState("All");
  const [quotes, setQuotes] = useState([]);

  const fetchQuotes = async () => {
    try {
      const response = await fetch("/api/records", {
        method: "GET",
      });
      const json = await response.json();
      setQuotes(json.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  useEffect(() => {
    let filteredQuotes = [];

    if (filter === "All") {
      filteredQuotes = quotes;
    } else {
      filteredQuotes = quotes.filter((q) => q.topic === filter);
    }

    if (filteredQuotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
      setQuote(filteredQuotes[randomIndex]);
    }
  }, [filter, quotes]);

  const addRecord = async (record) => {
    try {
      const response = await fetch('/api/records', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(record),
      });

      if (response.ok) {
        const newRecord = await response.json();
        setQuotes([...quotes, newRecord]);
        console.log('Record added successfully');
      }
    } catch (error) {
      console.error('Error adding record:', error);
    }
  };

  const handleNewQuote = () => {
    let filteredQuotes = [];

    if (filter === "All") {
      filteredQuotes = quotes;
    } else {
      filteredQuotes = quotes.filter((q) => q.topic === filter);
    }

    if (filteredQuotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
      setQuote(filteredQuotes[randomIndex]);
    }
  };

  const deleteRecord = async (e) => {
    e.preventDefault();
  
    console.log(e.target.dataset.id);
    const id = e.target.dataset.id;
  
    try {
      await fetch(`/api/records?id=${id}`, {
        method: "DELETE",
      });
  
      setQuotes(quotes.filter((quote) => quote._id !== id));
    } catch (e) {
      console.log(e);
    }
  };
  
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <section style={{ backgroundColor: '#F3F4F6' }}>
  <div style={{ maxWidth: 800, margin: '0 auto', padding: 50 }}>
    <h1 style={{ textAlign: 'center', fontSize: '4rem', fontWeight: 'bold', color: '#20C997', marginBottom: 20 }}>Find your inspiration</h1>
    <p style={{ textAlign: 'center', fontSize: '2rem', color: '#20C997', marginBottom: 40 }}>Explore motivational quotes</p>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <select value={filter} onChange={handleFilterChange} style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#20C997', padding: '10px 20px', marginRight: 20 }}>
        <option value="All">All</option>
        <option value="work">Work</option>
        <option value="motivation">Motivation</option>
        <option value="success">Success</option>
        <option value="happiness">Happiness</option>
        <option value="love">Love</option>
      </select>
      <div style={{ display: 'flex' }}>
        <button type="button" onClick={handleNewQuote} style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#fff', backgroundColor: '#20C997', border: 'none', borderRadius: 4, padding: '10px 20px', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', marginRight: 10 }}>New Quote</button>
      </div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
      <div style={{ backgroundColor: '#fff', borderRadius: 4, padding: 20, boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', marginBottom: 20 }}>
        <p style={{ fontSize: '1.7rem', fontWeight: 'bold', marginBottom: 10, fontStyle: 'italic' }}>{quote.quote}</p>
        <p style={{ fontSize: '1.2rem' }}><i>{quote.author}</i></p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
  <button
    onClick={() => window.location.href = '/insert'}
    style={{ backgroundColor: '#20C997', color: 'white', padding: 10, fontSize: '1.2rem', border: 'none', borderRadius: 4, marginRight: 10, cursor: 'pointer' }}
  > Add Quote </button>
  {quote && (
    <button
      type="button"
      onClick={deleteRecord}
      data-id={quote._id}
      style={{ backgroundColor: 'red', color: 'white', padding: 10, fontSize: '1.2rem', border: 'none', borderRadius: 4, cursor: 'pointer' }}
    > Delete Quote </button>)}
</div>
    </div>
  </div>
</section>

  );
            }  