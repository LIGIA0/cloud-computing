// js/components/InsertPage.jsx
export default function InsertPage() {
const insertRecord = async (e) => {
  e.preventDefault();

  const topic = document.getElementById('topic').value;
  const quote = document.getElementById('quote').value;
  const author = document.getElementById('author').value;

  const data = {
    topic: topic,
    quote: quote,
    author : author
  };
  console.log(data);


  fetch("/api/records", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then( () => {
      console.log("A records has been uploaded")
      document.getElementById('topic').value = '';
      document.getElementById('quote').value = '';
      document.getElementById('author').value = '';

    })
}

return (
  <div style={{ backgroundColor: '#F3F4F6' }}>
<div style={{ maxWidth: 800, margin: '0 auto', padding: 50 }}>
<h1 style={{ textAlign: 'center', fontSize: '4rem', fontWeight: 'bold', color: '#20C997', marginBottom: 20 }}>Find your inspiration</h1>
<p style={{ textAlign: 'center', fontSize: '2rem', color: '#20C997', marginBottom: 40 }}>Add a inspiration quote to inspire yourself and others</p>
<form style={{ maxWidth: 600, margin: '0 auto' }}>
<div style={{ marginBottom: 20 }}>
            <label htmlFor="topic" style={{ display: 'block', fontSize: '1.2rem', color: '#4B5563', fontWeight: 'bold', marginBottom: 10 }}>Choose a topic</label>
            <select id="topic" style={{ display: 'block', width: '100%', padding: 10, fontSize: '1rem', border: '2px solid #CBD5E0', borderRadius: 4, backgroundColor: '#EDF2F7', color: '#4B5563' }}>
              <option value="work">Work</option>
              <option value="motivation">Motivation</option>
              <option value="success">Success</option>
              <option value="happiness">Happiness</option>
              <option value="love">Love</option>
            </select>
          </div>
  <div style={{ marginBottom: 20 }}>
  <label htmlFor="quote" style={{ display: 'block', fontSize: '1.2rem', color: '#4B5563', fontWeight: 'bold', marginBottom: 10 }}>Enter quote</label>
  <textarea id="quote" placeholder="Your quote" required style={{ display: 'block', width: '100%', padding: 10, fontSize: '1rem', border: '2px solid #CBD5E0', borderRadius: 4, backgroundColor: '#EDF2F7', color: '#4B5563', height: 200 }}></textarea>
  </div>
  <div style={{ marginBottom: 20 }}>
  <label htmlFor="author" style={{ display: 'block', fontSize: '1.2rem', color: '#4B5563', fontWeight: 'bold', marginBottom: 10 }}>Enter author</label>
  <textarea id="author" placeholder="Your quote's author" required style={{ display: 'block', width: '100%', padding: 10, fontSize: '1rem', border: '2px solid #CBD5E0', borderRadius: 4, backgroundColor: '#EDF2F7', color: '#4B5563', height: 50 }}></textarea>
  </div>
  <button type="add quote" onClick={insertRecord} style={{ display: 'block', width: '100%', padding: 10, fontSize: '1.2rem', fontWeight: 'bold', color: 'white', backgroundColor: '#20C997', border: 'none', borderRadius: 4, cursor: 'pointer' }}>Submit</button>
</form>
</div>
</div>
)
}