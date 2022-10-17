import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
    const expenseData = (data) => {
        const arr = {
            ...data,
            id: Math.random().toString()
        };
        // console.log(arr);
        props.expenseData(arr);
    };
    return (<div className="new-expense">
        <ExpenseForm expenseData={expenseData}/>
    </div>);
};

export default NewExpense;