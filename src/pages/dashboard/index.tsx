import { useUser } from "@clerk/clerk-react";
import FinancialRecordForm from "./financial-record-form";
import FinancialRecordList from "./financial-record-list";
import "./financial-record.css";

const Dashboard = () => {
  const { user } = useUser();
  return (
    <div className="dashboard-container flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 ">
      <div className="w-full max-w-4xl flex flex-col items-center justify-center ">
        <div className="text-center text-3xl font-bold text-gray-800 mb-8 ">
          Welcome, {user?.firstName}! Here Are Your Finances
        </div>
        <div className="mb-8 w-full ml-72 ">
          <FinancialRecordForm />
        </div>
        <div className="w-full ml-72">
          <FinancialRecordList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
