import React, { useState, useEffect } from "react";

interface Item {
  [key: string]: number;
}

interface CategoryItems {
  [key: string]: Item;
}

const API_URL = "http://127.0.0.1:5000";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [suggestedItems, setSuggestedItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchInventory = async () => {
      if (searchInput === "") {
        setSuggestedItems([]);
        return;
      }
      const response = await fetch(`${API_URL}/inventory`);
      const data: CategoryItems = await response.json();
      const items = Object.values(data).flat();
      const filteredItems = items.filter((item) => {
        const itemName = Object.keys(item)[0];
        return itemName.includes(searchInput);
      });
      setSuggestedItems(filteredItems);
    };
    fetchInventory();
  }, [searchInput]);

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = event.target.value;
    setSearchInput(inputValue);
  };

  return (
    <form className="d-flex" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search our Inventory!"
        aria-label="Search"
        value={searchInput}
        onChange={handleSearchInputChange}
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
      <ul>
        {suggestedItems.map((item) => {
          const itemName = Object.keys(item)[0];
          return <li key={itemName}>{itemName}</li>;
        })}
      </ul>
    </form>
  );
};

export default SearchBar;
