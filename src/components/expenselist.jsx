import PropTypes from "prop-types";

const ExpenseList = ({ expenses }) => {
  return (
    <div className="mt-4">
      <h3>Your Expenses</h3>
      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        <ul className="list-group">
          {expenses.map((expense, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between">
              <span>{expense.category}</span>
              <span>${expense.amount} on {expense.date}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

ExpenseList.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,  // or Date depending on how you store it
    })
  ).isRequired,
};

export default ExpenseList;
