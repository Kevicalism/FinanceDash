import { useState } from 'react';
import PropTypes from 'prop-types';

const ExpenseForm = ({ onAddExpense }) => {
  const [expense, setExpense] = useState({
    amount: '',
    category: '',
    date: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setExpense({
      ...expense,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Input validation
    if (!expense.amount || isNaN(expense.amount)) {
      setError('Please enter a valid amount.');
      return;
    }
    if (!expense.category || !expense.date) {
      setError('All fields are required.');
      return;
    }

    // Clear error and add expense
    setError('');
    onAddExpense(expense);
    setExpense({ amount: '', category: '', date: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="my-4">
      {error && <div className="alert alert-danger">{error}</div>}
      
      <div className="form-group mb-2">
        <input
          type="text"
          className="form-control"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
          placeholder="Amount"
        />
      </div>
      
      {/* Drop-down for Category */}
      <div className="form-group mb-2">
        <select
          className="form-control"
          name="category"
          value={expense.category}
          onChange={handleChange}
        >
          <option value="">Select a Category</option>
          <option value="Food">Food</option>
          <option value="Transportation">Transportation</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Rent">Rent</option>
          <option value="Utilities">Utilities</option>
          <option value="Other">Other</option>
        </select>
      </div>
      
      <div className="form-group mb-2">
        <input
          type="date"
          className="form-control"
          name="date"
          value={expense.date}
          onChange={handleChange}
        />
      </div>
      
      <button type="submit" className="btn btn-primary">Add Expense</button>
    </form>
  );
};

ExpenseForm.propTypes = {
  onAddExpense: PropTypes.func.isRequired,  // Ensures onAddExpense is a function
};

export default ExpenseForm;
