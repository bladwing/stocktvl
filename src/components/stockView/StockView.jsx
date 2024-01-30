import React, { useState, useEffect } from "react";
import axios from "axios";

import "./stock.scss";

const StockView = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.example.com/your-data-endpoint"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container">
      <h1 className="my-4">Stock Place</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Label</th>
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
              <td>{item.model}</td>
              <td>{item.serialNumber}</td>
              <td>{item.partNumber}</td>
              <td>{item.type}</td>
              <td>
                <img
                  src={item.imageUrl}
                  alt={item.label}
                  style={{ maxWidth: "100px" }}
                />
              </td>
              <td>{item.location}</td>
              <td>{item.pieces}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockView;
