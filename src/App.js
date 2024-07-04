import logo from './logo.svg';
import './App.css';
import Data from './data.json'
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(5);
  const lastIndex = currentPage * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;
  const currentData = Data.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(Data.length / dataPerPage);
  const pageNumbers = [...Array(totalPages + 1).keys()].slice(1);
  const prevPage = () => {
    if(currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  const nextPage = () => {
    if(currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  } 
  return (
    <div className="App">
     <table>
      <thead>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
      </thead>
      <tbody>
        {currentData.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
     </table>
     <nav>
      <ul className="pagination" style={{display:"flex", cursor:"pointer", justifyContent:"space-around" }}>
        <div style={{display:"flex", cursor:"pointer"}}>
          <a onClick={prevPage}>Prev</a>
        </div>
        {pageNumbers.map((number) => (
          <div style={{display:"flex", cursor:"pointer"}} key={number} className={currentPage === number ? "page-item active" : "page-item"}>
            <a onClick={() => setCurrentPage(number)} className="page-link">
              {number}
            </a>
          </div>
        ))}
        <div style={{display:"flex", cursor:"pointer"}}>
          <a onClick={nextPage}>Next</a>
        </div>
      </ul>
     </nav>
    </div>
  );
}

export default App;
