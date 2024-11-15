import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from '../AppContext';

function BooksList() {
  const { baseURL,bookTitle, setBookTitle } = useContext(AppContext);
  const [works, setWorks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchWorks() {
      const response = await fetch(`${baseURL}/data/uzbek_works.json`);
      const data = await response.json();
      setWorks(data);
    }
    fetchWorks();
  }, [baseURL]);

  const filteredWorks = works.filter(work =>
    work.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    work.work.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleWorkClick = (work) => {
    setBookTitle(`${work.author} ${work.work}`)
    navigate(`/book/${work.filename}`);
  };

  return (
    <div>
      <h1>Hammasi bo'lib {works.length} ta asardan bahramand bo'ling</h1>
      <input className='form-control'
        type="text"
        placeholder="Qidirish..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className='list-group'>
        {filteredWorks.map((work, index) => (
          <li className='list-group-item' key={index} onClick={() => handleWorkClick(work)}>
            <strong>{work.author}</strong> - {work.work}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BooksList;
