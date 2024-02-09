import { useState } from "react";
import styled from "styled-components";
import tokens from "../../styles/variables.module.scss";
import CustomerTable from "../../components/CustomerTable";
import { getCustomers } from "../../api/customers";
import Button from "../../components/ui/Button";
import InputText from "../../components/ui/InputText";
import { InputType } from "../../components/enum/InputTextType";
import { ButtonSize, ButtonType } from "../../components/enum/ButtonType";
import Customer from "../../interfaces/Customer";
import customersMockup from "../../data/customers";

const SectionCustomerList = styled.div`
  padding: ${tokens.spacingXs};
`;

const ContainerInput = styled.div`
  margin: ${tokens.spacingNano} 0px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
    input {
      margin-top: ${tokens.spacingNano};
    }
  }
`;

const ErrorMessage = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${tokens.colorNeutralLightest};
  background: ${tokens.colorAlertError};
  position: relative;
  font-size: ${tokens.fontSizeMicro};
  padding: ${tokens.spacingXxs};
`;

const CloseButton = styled(Button)`
  float: right;
`;

export function Home() {
  const [filter, setFilter] = useState("");
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleButtonClick = async () => {
    const { data, error } = await getCustomers();
    if (error) {
      setCustomers(customersMockup);
      setError(
        `Ocorreu um erro ao buscar na API: ${error}. Para fins de entrevista foi populada tabela usando mock.`
      );
    } else {
      setCustomers(data);
      setError(null);
    }
  };

  const filteredCustomers = customers.filter((customer: Customer) =>
    customer.email.includes(filter)
  );

  return (
    <SectionCustomerList>
      {error && (
        <ErrorMessage>
          <p>{error}</p>
          <CloseButton
            btntype={ButtonType.SECONDARY}
            btnsize={ButtonSize.SM}
            onClick={() => setError(null)}
            aria-label="Fechar mensagem de erro"
            data-testid="close-error-button"
          >
            Fechar
          </CloseButton>
        </ErrorMessage>
      )}
      <h2>Customers</h2>
      <ContainerInput>
        <Button
          btntype={ButtonType.SECONDARY}
          btnsize={ButtonSize.MD}
          onClick={handleButtonClick}
          aria-label="Buscar Customers"
          data-testid="fetch-customers-button"
        >
          Buscar Customers
        </Button>
        <InputText
          label="Filtrar por e-mail"
          aria-label="Filtrar por e-mail"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
          types={InputType.NORMAL}
          data-testid="filter-input-textbox"
        />
      </ContainerInput>
      <CustomerTable
        customers={filteredCustomers}
        data-testid="customer-table"
      />
    </SectionCustomerList>
  );
}
