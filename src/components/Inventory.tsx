import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import "./Inventory.css";

interface Item {
  key: string;
  price: number;
  category: string;
}

interface CategoryItems {
  [key: string]: Item[];
}

const Inventory: React.FC = () => {
  const [inventory, setInventory] = useState<CategoryItems>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  }, []);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/inventory");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: { [key: string]: { [key: string]: number } } =
          await response.json();

        const transformedData: CategoryItems = Object.entries(data).reduce(
          (acc, [category, items]) => {
            acc[category] = Object.entries(items).map(([key, price]) => ({
              key,
              price,
              category,
            }));
            return acc;
          },
          {} as CategoryItems
        );

        setInventory(transformedData);
      } catch (error) {
        console.error("Error fetching inventory:", error);
        setError("Failed to load inventory. Please try again later.");
      }
    };

    fetchInventory();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (Object.keys(inventory).length === 0) {
    return <div>No inventory items found.</div>;
  }

  return (
    <div>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <div className="inventory-page-container">
            <h1>Inventory</h1>
            <div className="inventory-container">
              {Object.entries(inventory).map(([category, items]) => (
                <div key={category} className="category">
                  <Link to={`/category/${encodeURIComponent(category)}`}>
                    <h2>{category}</h2>
                  </Link>
                  <p>{items.length} items</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Inventory;
