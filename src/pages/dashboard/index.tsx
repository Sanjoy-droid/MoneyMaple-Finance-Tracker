import React from 'react';
import { useUser } from "@clerk/clerk-react";
import FinancialRecordForm from './financial-record-form';
import FinancialRecordList from './financial-record-list';

const Dashboard = () => {
  const { user } = useUser();
  return (
    <div className="dashboard-container flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="text-center text-2xl font-semibold text-gray-800">
        Welcome, {user?.firstName}! Here Are Your Finances
      </div>
      <FinancialRecordForm/>
      <FinancialRecordList/>
    </div>
  );
}

export default Dashboard;
