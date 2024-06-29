import { useUser } from "@clerk/clerk-react";
import { createContext, useContext, useEffect, useState } from "react";

const PORT = import.meta.env.VITE_PORT;
interface FinancialRecord {
  id?: string;
  userId: string;
  date: Date;
  description: string;
  amount: number;
  category: string;
  paymentMethod: string;
}

interface FinancialRecordsContextType {
  records: FinancialRecord[];
  addRecord: (record: FinancialRecord) => void;
  //   updateRecord: (id: string, newRecord: FinancialRecord) => void;
  // deleteRecord: (id: string)=>void;
}

export const FinancialRecordsContext = createContext<
  FinancialRecordsContextType | undefined
>(undefined);

export const FinancialRecordsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [records, setRecords] = useState<FinancialRecord[]>([]);

  const { user } = useUser();

  const fetchRecords = async () => {
    if (!user) return;
    try {
      const response = await fetch(
        `${PORT}/financial-records/getAllByUserId/${user?.id}`
      );
      if (response.ok) {
        const records = await response.json();
        console.log(records);
        setRecords(records);
      } else {
        console.error("Failed to fetch records:", response.statusText);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error fetching records:", error.message);
      } else {
        console.error("Unexpected error fetching records:", error);
      }
    }
  };

  useEffect(() => {
    fetchRecords();
  }, [user]);

  const addRecord = async (record: FinancialRecord) => {
    const response = await fetch(`${PORT}/financial-records`, {
      method: "POST",
      body: JSON.stringify(record),
      headers: {
        "Content-Type": "application/json",
      },
    });

    try {
      if (response.ok) {
        const newRecord = await response.json();
        setRecords((prev) => [...prev, newRecord]);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error(error);
      }
    }
  };
  return (
    <FinancialRecordsContext.Provider value={{ records, addRecord }}>
      {children}
    </FinancialRecordsContext.Provider>
  );
};

export const useFinancialRecords = () => {
  const context = useContext<FinancialRecordsContextType | undefined>(
    FinancialRecordsContext
  );
  if (!context) {
    throw new Error(
      "useFinancialRecords must be used within a FinancialRecordsProvider"
    );
  }

  return context;
};
