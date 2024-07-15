import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  const [input, setInput] = useState<string[]>([]);

  const fetchSuggestions = async (input: string) => {
    try {
      const response = await fetch("http://localhost:8000/api/search");
      const data = await response.json();

      const filteredResults = data.filter((item: string) => {
        return item.toLowerCase().includes(input.toLowerCase());
      });

      console.log(filteredResults);
      // Update the state with the filtered results
      setInput(filteredResults);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInput([inputValue]);
    fetchSuggestions(inputValue);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Search Our Inventory!"
        value={input.join(", ")} // Display the filtered results as a comma-separated list
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
