import { useState } from "react";
import styled from "styled-components";

const TransacationCell = (props)=>{
    return(
    <Cell isExpense={props.payload?.type === "EXPENSE"}>
        <span>{props.payload.description}</span>
        <span>${props.payload.amount}</span>
    </Cell>
    )
}

const TransactionComponent = (props)=>{
    const [searchtxt , updatedsearchtxt] = useState("");
    const [filteredTransaction , updatedTransaction] = useState(props.transation);
    const filterData = ()=>{
        if(!searchtxt || !searchtxt.trim().length){
            updatedTransaction(props.transation);
        }

    let txn = [...props.transation];
    txn = txn.filter((payload)=> payload.description.toLowrCase().includes(searchtxt.toLowerCase().trim()));
    updatedTransaction(txn);
    };

    return(
        <Container>
            Transactions
            <input placeholder="Search" value={searchtxt} onChange={(e)=>updatedsearchtxt(e.target.value)}/>
            {props.filteredTransaction?.length?props.filteredTransaction.map((payload)=> (<TransacationCell payload={payload}/>)): ""}
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction:column;
  align-items:flex-start;
  font-family:Montserrat;
  padding: 10px 22px;
  font-size: 18px;
  width: 100%;
  gap: 10px;
  font-weight: bold;
  & input{
    padding: 10px 20px;
    border-radius: 12px;
    background: #e6e8e6e9;
    outline: none;
    width: 100%;
  }
`;

const Cell = styled.div`
    display:flex;
    flex-direction: row;
    padding: 10px 15px;
    font-size: 14px;
    border-radius: 2px;
    width: 100%;
    align-items: center;
    font-weight: normal;
    justify-content: space-between;
    border: 1px solid #e6e8;
    border-radius: 4px;
    border-right: 4px solid ${(props) =>(props.isExpense ? "red":"green")}
    /* border-left: 4px solid ${(props) =>(props.isExpense ? "red":"green")} */
`;
export default TransactionComponent;