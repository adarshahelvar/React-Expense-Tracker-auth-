import styled from "styled-components";
import OverviewComponent from './overviewComponent';
import TransactionComponent from './transactionComponent';

const HomeComponent = (props)=>{
    return(
        <Container>
            HomeComponent
            <OverviewComponent />
            <TransactionComponent />
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