import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';



function ExpenseItem(props) {
    // //date object creation
    // const expenseDate = props.date;
    // const expenseTitle = 'Car Insurance!!!';
    // const expenseAmount = 294.94;

    const [title, setTitle] = useState(props.title); //react hook (starts with use) - useState(initial value, )
;
    const clickHandler = () => {
        setTitle('Updated');
    }
    
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
            <h2 >
                {title}
            </h2>
            <div className="expense-item__price">
                ${props.amount}
            </div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;