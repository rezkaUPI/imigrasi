import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const DataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/data");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Data Table</h2>
      <table>
        <thead>
          <tr>
            <th>Field 1</th>
            <th>Field 2</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.field1}</td>
              <td>{row.field2}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link href="/visualizeData">
        <button>Visualize Data</button>
      </Link>

    </div>
  );
};

export default DataTable;