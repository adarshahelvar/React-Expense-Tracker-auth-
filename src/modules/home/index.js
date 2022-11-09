import { useState } from "react";
import styled from "styled-components";
import OverviewComponent from './overviewComponent';
import TransactionComponent from './transactionComponent';

const HomeComponent = (props)=>{

    const [transation, updatedTransaction] = useState([]);
    const [expense, updatedExpense] = useState([0]);
    const [income, updatedIncome] = useState([0]);

    const addTransaction =(payload)=>{
        const transationArray = [...transation];
        transationArray.push(payload);
        updatedTransaction(transationArray)
    };

    const calculateBalance = ()=>{
        let exp = 0; //Expense =0
        let inc = 0; //Income =0
        transation.map((payload)=>{
            payload.type === "EXPENSE" ? (exp =exp+payload.amount) : (inc =inc+payload.amount)
        })
        updatedExpense(exp);
        updatedIncome(inc);
    };

    return(
        <Container>
            <OverviewComponent addTransaction={addTransaction}/>
            <TransactionComponent transation={transation}/>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  margin:30px 0 10px;
  font-family:Montserrat;
  width: 360px;
`;

export default HomeComponent;