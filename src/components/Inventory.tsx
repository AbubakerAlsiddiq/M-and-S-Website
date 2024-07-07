import React, { useState, useEffect } from "react";
import "./Inventory.css";

interface Item {
  [key: string]: number;
}

interface CategoryItems {
  [key: string]: Item;
}

const API_URL =  "http://localhost:8080/inventory";

const Inventory: React.FC = () => {
  const [inventory, setInventory] = useState<CategoryItems>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await fetch(`${API_URL}`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: CategoryItems = await response.json();
        setInventory(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching inventory:", error);
        setError("Failed to load inventory. Please try again later.");
        setIsLoading(false);
      }
    };

    fetchInventory();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (Object.keys(inventory).length === 0) {
    return <div>No inventory items found.</div>;
  }

  return (
    <>
    <div className="inventory-page-container">
      <h1>Inventory</h1>
      <div className="inventory-container">
        {Object.entries(inventory).map(([category, items]) => (
          <div key={category} className="category" id={`category-${category}`}>
            <h2>{category}</h2>
            {Object.entries(items).map(([item, price]) => (
              <div key={item} className="item">
                {item}: ${price.toFixed(2)}
              </div>
            ))}
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default Inventory;
