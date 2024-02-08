import styled from "styled-components";
import customers from "../../data/customers";
import tokens from "../../styles/variables.module.scss";
import CustomerTable from "../../components/CustomerTable";
import InputText from "../../components/ui/InputText";
import { useState } from "react";
import { InputType } from "../../components/enum/InputTextType";
import Button from "../../components/ui/button";
import { ButtonSize, ButtonType } from "../../components/enum/ButtonType";

const SectionCustomerList = styled.div`
  padding: ${tokens.spacingXs};
`;

const ContainerInput = styled.div`
  margin-bottom: ${tokens.spacingNano};
  display: flex;
  justify-content: space-between;
`;

export function Home() {
  const [filter, setFilter] = useState("");

  const filteredCustomers = customers.filter((customer) =>
    customer.email.includes(filter)
  );
  return (
    <SectionCustomerList>
      <h2>Customers</h2>
      <ContainerInput>
        <Button btnType={ButtonType.SECONDARY} btnSize={ButtonSize.MD}>
          Buscar Customers
        </Button>
        <InputText
          label="Filtrar por e-mail"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
          types={InputType.NORMAL}
        ></InputText>
      </ContainerInput>
      <CustomerTable customers={filteredCustomers}></CustomerTable>
    </SectionCustomerList>
  );
}
