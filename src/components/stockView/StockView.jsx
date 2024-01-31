import React, { useState, useEffect } from "react";
import axios from "axios";

import { Api, URL } from "../utils/api";

import "./stock.scss";

const StockView = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        Api + "items.php"
      );
      console.log("Response from API:", response);
      // Check if response status is OK (200)
      if (response.status === 200) {
        // Check if response data is an array
        if (Array.isArray(response.data)) {
          setData(response.data);
        } else {
          console.error("Data fetched is not an array:", response.data);
        }
      } else {
        console.error("Failed to fetch data. Status:", response.status);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        Api + "items.php",
        { data: { id } } // Send item ID in the request body
      );
      console.log("Response from delete API:", response);
      // Check if response status is OK (200)
      if (response.status === 200) {
        // Refresh data after successful deletion
        fetchData();
      } else {
        console.error("Failed to delete item. Status:", response.status);
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Label</th>
          <th>Brand</th>
          <th>Model</th>
          <th>S/N</th>
          <th>P/N</th>
          <th>Type</th>
          <th>IMG</th>
          <th>Location</th>
          <th>Pieces</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.label}</td>
            <td>{item.brand}</td>
            <td>{item.model}</td>
            <td>{item.serialNumber}</td>
            <td>{item.partNumber}</td>
            <td>{item.type}</td>
            <td>
              <img
                src={URL + item.image}
                alt={item.label}
                style={{ maxWidth: "100px", maxHeight: "50px" }}
              />
            </td>
            <td>{item.stock}</td>
            <td>{item.pieces}</td>
            <td>
              <button onClick={() => handleDelete(item.id)} className="btn btn-danger">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StockView;
