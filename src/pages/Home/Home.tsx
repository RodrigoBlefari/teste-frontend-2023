import styled from "styled-components";
import CustomerList from "../../components/CustomerList";
import customers from "../../data/customers";
import tokens from "../../styles/variables.module.scss";

const SectionCustomerList = styled.div`
  padding: ${tokens.spacingXs};
`;

export function Home() {
  return (
    <SectionCustomerList>
      <CustomerList customers={customers}></CustomerList>
    </SectionCustomerList>
  );
}
