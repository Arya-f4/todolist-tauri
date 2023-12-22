import { useState, useEffect } from 'react';

const QuotesFetch = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  useEffect(() => {
    fetch('https://api.api-ninjas.com/v1/quotes?category=dreams', {
      method: "GET",
      headers: {
        'X-Api-Key': 'FhqUdMs5oFLdWpT4JyeJ+A==8jpoyAlwqXxebtI2rrrrr'
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error:', response.status);
        }
      })
      .then(data => {

        setQuote(data[0].quote);
        setAuthor(data[0].author);
      })
      .catch(error => {
        console.error('Request failed:', error);
      });
  }, []);

  return (
    <div style={{ width: '500px' }}>
      {<p className="text-slate-800 text-s font-normal font-['Nunito'] tracking-tight" style={{ overflowWrap: 'break-word', whiteSpace: 'normal' }}>"{quote}"</p>}
      {<p className="text-slate-800 text-s font-bold font-['Nunito'] tracking-tight" style={{ overflowWrap: 'break-word', whiteSpace: 'normal' }}>~{author}</p>}
    </div >
  );
};

export default QuotesFetch;