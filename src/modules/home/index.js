import { useState } from "react";
import styled from "styled-components";
import OverviewComponent from './overviewComponent';
import TransactionComponent from './transactionComponent';

const HomeComponent = (props)=>{

    const [transation, updatedTransaction] = useState([]);

    const addTransaction =(payload)=>{
        const transationArray = [...transation];
        transationArray.push(payload);
        updatedTransaction(transationArray)
    };

    return(
        <Container>
            HomeComponent
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