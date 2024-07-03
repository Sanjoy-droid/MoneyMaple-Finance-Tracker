import { useUser } from "@clerk/clerk-react";
import FinancialRecordForm from "./financial-record-form";
import FinancialRecordList from "./financial-record-list";
import "./financial-record.css";
import { useFinancialRecords } from "../../contexts/financial-record-context";
import { useMemo } from "react";

const Dashboard = () => {
  const { records } = useFinancialRecords();
  const { user } = useUser();

  const totalMonthly = useMemo(() => {
    let totalAmount = 0;
    records.forEach((record) => {
      totalAmount += record.amount;
    });
    return totalAmount;
  }, [records]);
  return (
    <div className="dashboard-container flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 ">
      <div className="w-full max-w-4xl flex flex-col items-center justify-center ">
        <div className="text-center text-3xl font-bold text-gray-800 mb-8 ">
          Welcome, {user?.firstName}! Here Are Your Finances
        </div>
        <div className="mb-8 w-full  ">
          <FinancialRecordForm />
        </div>
        {/* Total Amount */}
        <div>Total Amount : 💲{totalMonthly} </div>
        <div className="w-full ">
          <FinancialRecordList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
