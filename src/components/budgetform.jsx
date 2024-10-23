import { useState } from 'react';
import PropTypes from 'prop-types';

const BudgetForm = ({ onSetBudget }) => {
  const [budget, setBudget] = useState('');

  const handleChange = (e) => {
    setBudget(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isNaN(budget) || !budget) {
      alert('Please enter a valid budget amount.');
      return;
    }
    onSetBudget(budget);
    setBudget('');
  };

  return (
    <form onSubmit={handleSubmit} className="my-4">
      <div className="form-group mb-2">
        <input
          type="text"
          className="form-control"
          name="budget"
          value={budget}
          onChange={handleChange}
          placeholder="Set Budget"
        />
      </div>
      <button type="submit" className="btn btn-success">Set Budget</button>
    </form>
  );
};

BudgetForm.propTypes = {
  onSetBudget: PropTypes.func.isRequired,  // Ensure onSetBudget is a function
};

export default BudgetForm;
