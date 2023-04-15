import React, { useState , useEffect } from 'react';
import Chart from 'chart.js/auto'; import { Bar, Pie, Line } from "react-chartjs-2";
import DashboardLayout from '../components/DashboardLayout';
import styles from '../styles/styles.module.css'

const VisualiseData = () => {

  // Add a new state to store the fetched data
  const [eazyPassportData, setEazyPassportData] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/get_program_eazy_passport_data');
      const data = await response.json();
      setEazyPassportData(data);
    };

    fetchData();
  }, []);

  const handleChange = (event) => {
    setSelectedGroup(event.target.value);
  };

  const barChartData = {
    labels: ['Work Permit', 'Student Permit', 'Tourist Permit', 'Residence Permit'],
    datasets: [
      {
        label: '# of Permits',
        data: [120, 80, 250, 90],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const pieChartData = {
    labels: ['Work Permit', 'Student Permit', 'Tourist Permit', 'Residence Permit'],
    datasets: [
      {
        data: [120, 80, 250, 90],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#A3D1FF'],
      },
    ],
  };

  const lineChartData = {
    labels: Array.isArray(eazyPassportData)
      ? eazyPassportData.map(item => item.tanggal) // Replace 'date_column_name' with the actual column name
      : [],
    datasets: [
      {
        label: '# of Permits',
        data: Array.isArray(eazyPassportData)
          ? eazyPassportData.map(item => item.jumlah) // Replace 'value_column_name' with the actual column name
          : [],
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };
  

  const barChartOptions = {
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'category',
        display: true,
        title: {
          display: true,
          text: 'Permit Types',
        },
      },
      y: {
        type: 'linear',
        display: true,
        title: {
          display: true,
          text: '# of Permits',
        },
        beginAtZero: true,
      },
    },
  };
   

  const renderVisualisation = () => {
    if (selectedGroup === 'izinTinggalKeimigrasian') {
      return (
        <div sclassName={styles.visualisationContainer}>
          <h3>Izin Tinggal Keimigrasian</h3>
           <div className={styles.chartWrapper}><Bar data={barChartData} options={barChartOptions} /></div>
           <div className={styles.chartWrapper}><Pie data={pieChartData} /></div>
          <div className={styles.chartWrapper}><Line data={lineChartData} /></div>
        </div>
      );
    }

    return <div>Please select a group of tables</div>;
  };

  return (
    <DashboardLayout>
      <div>
        <h2>Visualise Data</h2>
        <label>
          Select group of tables:
          <select value={selectedGroup} onChange={handleChange}>
            <option value="">--Please choose an option--</option>
            <option value="izinTinggalKeimigrasian">Izin Tinggal Keimigrasian</option>
            {/* Add more options here */}
          </select>
        </label>
        {renderVisualisation()}
      </div>
    </DashboardLayout>
  );
};

export default VisualiseData;