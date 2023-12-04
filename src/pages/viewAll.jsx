import React from 'react'
import { useEffect, useState } from 'react';
import Search from '../components/Search';


export default function viewAll() {
  const [column, setColumn] = useState([])
  const [records, setRecords] = useState([])
  const getFilteredItems = (searchTerm) => {
    let filterItems = records.filter(item =>
      item.Name && item.Name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setRecords(filterItems)
  };
  useEffect(()=> {
    fetch('http://localhost:5173/data.json')
    .then(res => res.json())
    .then(data => {
      setColumn(Object.keys(data.items[0]))
      setRecords(data.items)
    })
  }, [])
  return (
    <div>
      <table className='w-full border-collapse mt-5'>
        <thead className='bg-sky-500'>
          <tr className="">
            {column.map((c, i) => (
              <th className='p-3 text-left' key ={i}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody className=''>
          {
            records.map((records, i) =>(
              <tr className='border-b-[1px] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300' key={i}>
                  <td>{records.ID}</td>
                  <td>{records.Name}</td>
                  <td>{records.Type1}</td>
                  <td>{records.Type2}</td>
                  <td>{records.Total}</td>
                  <td>{records.HP}</td>
                  <td>{records.Attack}</td>
                  <td>{records.Defense}</td>
                  <td>{records.SpAtk}</td>
                  <td>{records.SpDef}</td>
                  <td>{records.Speed}</td>
                  <td>{records.Generation}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <Search getFilteredItems={getFilteredItems}></Search>
    </div>
  )
}

