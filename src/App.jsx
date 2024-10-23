import { useState } from 'react';
import Header from './components/header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseChart from './components/ExpenseChart';
import BudgetForm from './components/budgetform';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(0);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const calculateTotalExpenses = () => {
    return expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);
  };

  const totalExpenses = calculateTotalExpenses();
  const budgetPercentage = budget > 0 ? (totalExpenses / budget) * 100 : 0;

  return (
    <div className="container">
      <div className="row">
        {/* Left Column - Main Content */}
        <div className="col-md-8">
          {/* Header */}
          <Header />

          {/* Expense Form Card */}
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title">Add an Expense</h2>
              <ExpenseForm onAddExpense={addExpense} />
            </div>
          </div>

          {/* Expense Chart Card */}
          {expenses.length > 0 && (
            <div className="card mb-4">
              <div className="card-body">
                <h2 className="card-title"></h2>
                <ExpenseChart expenses={expenses} />
              </div>
            </div>
          )}
        </div>

        {/* Right Column - Budget Form and Expense List */}
        <div className="col-md-4">
          {/* Budget Form Card */}
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title">Add a Budget</h2>
              <BudgetForm onSetBudget={setBudget} />
              {budget > 0 && (
                <div className="progress my-4">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${budgetPercentage}%` }}
                    aria-valuenow={budgetPercentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {Math.round(budgetPercentage)}% of your budget spent
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Expense List Card */}
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title"></h2>
              <ExpenseList expenses={expenses} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
