
import React, { useState } from "react";
import { useUser } from "@clerk/clerk-react";

const FinancialRecordForm = () => {
  const [description, setDescription] = useState<string>('');
  const [amount,setAmount] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<string>('');

const {user}=useUser()

  const handleSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();

    const newRecord={
        userId:user?.id,
        date: new Date(),
        description: description,
        amount: parseFloat(amount),
        category: category,
        paymentMethod: paymentMethod
    };

    // addRecord(newRecord)

    setDescription('')
    setAmount('')
    setCategory('')
    setPaymentMethod('')


  }
  return (
    <div className="form-container flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <form className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Add Financial Record</h2>
        <div className="form-field mb-4">
          <label className="block text-gray-700 font-medium mb-2">Description:</label>
          <input
            type="text"
            required
            className="input w-full p-3 border border-gray-300 rounded-lg"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-field mb-4">
          <label className="block text-gray-700 font-medium mb-2">Amount:</label>
          <input
            type="number"
            required
            className="input w-full p-3 border border-gray-300 rounded-lg"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="form-field mb-4">
          <label className="block text-gray-700 font-medium mb-2">Category:</label>
          <select
            required
            className="input w-full p-3 border border-gray-300 rounded-lg"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select a Category</option>
            <option value="Food">Food</option>
            <option value="Rent">Rent</option>
            <option value="Salary">Salary</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-field mb-6">
          <label className="block text-gray-700 font-medium mb-2">Payment Method:</label>
          <select
            required
            className="input w-full p-3 border border-gray-300 rounded-lg"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="">Select a Payment Method</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Cash">Cash</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
        </div>
        <button type="submit" className="button w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-200">
          Add Record
        </button>
      </form>
    </div>
  );
}

export default FinancialRecordForm;
