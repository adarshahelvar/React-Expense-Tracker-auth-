import { useState } from "react";
import styled from "styled-components";

const AddTransactionView =(props)=>{

    const [amount, setAmount] = useState();
    const [description, setDescription] = useState();
    const [type, setType] = useState("EXPENSE");

    const addTransation = ()=>{
        props.addTransaction({amount:Number(amount),description,type, id: Date.now()});
        props.toggleAddTransactionVisible();
    };

    return (
        <AddTransactionContainer>
            <input placeholder="Amount" type="number" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
            <input placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
            <RadioBox>
                <input type="radio" id="expense" name="type" value="EXPENSE" checked={type==='EXPENSE'} onChange ={(e)=>setType(e.target.value)}/>
                <label htmlFor="expense">Expense</label>
                <input type="radio" id="income" name="type" value="INCOME" checked={type==='INCOME'} onChange ={(e)=>setType(e.target.value)}/>
                <label htmlFor="expense">Income</label>
            </RadioBox>
            <AddTransaction onClick={addTransation}>Add Transaction</AddTransaction>
        </AddTransactionContainer>
    )
};

const OverviewComponent = (props)=>{

    const [isAddTransactionVisible, toggleAddTransactionVisible] = useState(false);

    return(
        <Container>
            <BalanceBox>
                Available Balance is ₹ {props.income-props.expense}
                <AddTransaction onClick={()=>toggleAddTransactionVisible(!isAddTransactionVisible)}>{isAddTransactionVisible ? "Cancel" : "Add"}</AddTransaction>
            </BalanceBox>
            {isAddTransactionVisible && <AddTransactionView toggleAddTransactionVisible={toggleAddTransactionVisible} addTransaction={props.addTransaction}/>}
            <ExpenseContainer>
                <ExpenseBox isIncome={false}>
                    Expense <span>₹{props.expense}</span>
                </ExpenseBox>
                <ExpenseBox isIncome={true}>
                    Income <span>₹{props.income}</span>
                </ExpenseBox>
            </ExpenseContainer>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  margin: 10px;
  font-family:Montserrat;
  width: 100%;
`;

const BalanceBox = styled.div`
    display: flex;
    flex-direction:column; 
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    width: 100%;
    font-weight: bold;
`;

const AddTransaction = styled.div`
    background: black;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    font-weight: bold;
    font-size: 15px;
`;

const AddTransactionContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #e6e8e9;
    gap: 10px;
    width: 100%;
    padding: 15px 20px;
    margin:  20px;
    & input{
        outline:none;
        padding: 10px 20px;
        border-radius: 4px;
        border: 1px solid #e6e8;
    }
`;

const RadioBox = styled.div`
    display: flex;
    flex-direction:row; 
    width: 100%;
    align-items: center;
    & input{
        width: unset;
        margin: 0 10px;
    }
`;

const ExpenseContainer = styled.div`
    display:flex;
    flex-direction: row;
    gap: 12px;
    margin: 20px;
`;

const ExpenseBox = styled.div`
    display:flex;
    flex-direction: column;
    border: 1px solid #e6e8e6;
    padding: 15px 20px;
    width: 135px;
    font-size: 14px;
    & span{
        font-weight: bold;
        font-size: 20px;
        color:${props => props.isIncome ? 'green' : 'red'}
    }
`;
 

export default OverviewComponent;