// pages/inputData.js
import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import ProtectedRoute from "../components/ProtectedRoute";

const InputData = () => {
  return (
    <DashboardLayout>
      <ProtectedRoute roles={["superuser", "a", "b", "c"]}>
      <div>
        <h2>How to use this app</h2>
        <h3>Input Data</h3>
        <p>
          To input data, click on the 'Input Data' menu on the left sidebar. You will see a list of submenu items representing different tables. Click on the specific submenu item to go to the corresponding input data form.
        </p>
        <h3>Visualize Data</h3>
        <p>
          To visualize the data, click on the 'Visualise Data' menu on the left sidebar. This will lead you to a page with various data visualization options. Choose the desired visualization to analyze the data.
        </p>
      </div>
      </ProtectedRoute>
    </DashboardLayout>
  );
};

export default InputData;
