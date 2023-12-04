import React from 'react';
import { useEffect, useState } from 'react';

export default function Search({ getFilteredItems }) {
  // const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // useEffect(() => {
  //   // Fetch data when the component mounts
  //   fetch('/data.json')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log('Received data:', data);

  //       // Check if 'items' property exists in the data object
  //       if (data && data.items) {
  //         setItems(data.items);
  //       } else {
  //         console.error('Invalid data structure:', data);
  //       }
  //     })
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []);

  // useEffect(() => {
  //   // Log the searchTerm and filtered items
  //   console.log('Search term:', searchTerm);
  //   console.log('Filtered items:', getFilteredItems());
  //   setItems(getFilteredItems())
  // }, [searchTerm]);

  // const getFilteredItems = () => {
  //   return items.filter(item =>
  //     item.Name && item.Name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  // };
  

  // const filteredItems = items.filter(item =>
  //   item.Name && item.Name.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  function handleChange(e){
    setSearchTerm(e.target.value)
    getFilteredItems(e.target.value)
  }
  return (
    <div>
      <input
        className='text-black bg-orange-950 border border-solid border-indigo-500 absolute right-40 top-6 w-36 p-1' 
        type='text' 
        placeholder='Search Pokémon'
        onChange={handleChange}
      />
      
    </div>
  );
}
