// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 390.34,
      date: new Date(2022, 9, 10),
    },
    {
      id: "e2",
      title: "Milk expenses",
      amount: 90.4,
      date: new Date(2022, 9, 6),
    },
    { id: "e3", title: "New Desk", amount: 490.57, date: new Date(2022, 9, 4) },
    {
      id: "e4",
      title: "New Laptop",
      amount: 1000,
      date: new Date(2022, 9, 11),
    },
  ];
  return (
    <div>
      <h2>Lets get started</h2>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
