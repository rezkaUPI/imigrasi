import React, { useState, useEffect } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import useSWR from 'swr';
import styles from '../styles/dashboard.module.css';
import * as XLSX from 'xlsx';
import ProtectedRoute from "../components/ProtectedRoute";

const fetcher = (url) => fetch(url).then((res) => res.json());

const UrusanKepegawaianDanUmum = () => {
  const [selectedTable, setSelectedTable] = useState('');
  const { data: tableData, error } = useSWR(selectedTable ? `/api/query?table=${selectedTable}` : null, fetcher);
  const [inputData, setInputData] = useState({});
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    if (tableData && tableData.length > 0) {
      setColumns(Object.keys(tableData[0]));
    }
  }, [tableData]);

  const handleTableChange = (e) => {
    setSelectedTable(e.target.value);
  };

  const handleInputChange = (e, columnName) => {
    setInputData({ ...inputData, [columnName]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/addData?table=${selectedTable}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputData),
      });
      const result = await response.json();
      console.log(result);
      setInputData({});
    } catch (error) {
      console.error('Error submitting new data:', error);
    }
  };

  const handleExportToExcel = () => {
    if (!tableData || tableData.length === 0) {
      return;
    }

    const worksheet = XLSX.utils.json_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, `table_${selectedTable}.xlsx`);
  };

  // Add a new state for the modal visibility
  const [showModal, setShowModal] = useState(false);

  // ... existing useEffect and functions

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  if (error) {
    console.error('Error fetching table data:', error);
  }

  return (
    <DashboardLayout>
      <ProtectedRoute roles={["superuser", "a"]}>
      <div>
        <h2>Urusan Kepegawaian dan Umum</h2>
        <label>
          Select a table:
          <select value={selectedTable} onChange={handleTableChange}>
            <option value="">--Select a table--</option>
            <option value="penerbitan_paspor_indonesia">penerbitan_paspor_indonesia</option>
            <option value="permohonan_aplikasi_m_paspor">permohonan_aplikasi_m_paspor</option>
            <option value="program_eazy_passport">program_eazy_passport</option>
          </select>
        </label>
        <button onClick={handleExportToExcel}>
          <img src="/excel_icon.png" alt="Export to Excel" className={styles.exportToExcelIcon} />
        </button>
        {tableData && tableData.length > 0 && (
          <>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    {Object.keys(tableData[0]).map((column, index) => (
                      <th key={index}>{column}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {Object.values(row).map((value, index) => (
                        <td key={index}>{value}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button onClick={openModal}>Add Data</button>

            {showModal && (
              <div className={styles.modal} onClick={closeModal}>
                <div
                  className={styles.modalContent}
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3>Add Data</h3>
                  <form onSubmit={handleSubmit}>
                    {columns.map((column, index) => (
                      <div key={index} className={styles.inputWrapper}>
                        <label htmlFor={`input-${column}`} className={styles.inputLabel}>
                          {column}:
                        </label>
                        <input
                          id={`input-${column}`}
                          type="text"
                          className={styles.inputField}
                          value={inputData[column] || ''}
                          onChange={(e) => handleInputChange(e, column)}
                        />
                      </div>
                    ))}
                    <button type="submit">Submit</button>
                  </form>
                  <button onClick={closeModal}>Close</button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
      </ProtectedRoute>
    </DashboardLayout>
  );
};

export default UrusanKepegawaianDanUmum;