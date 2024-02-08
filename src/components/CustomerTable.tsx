import styled from "styled-components";
import Customer from "../interfaces/Customer";
import tokens from "../styles/variables.module.scss";

interface CustomerTableProps {
  customers: Customer[];
}

const Table = styled.table`
  width: 100%;
  margin: 0px ${tokens.spacingMic};
  background-color: ${tokens.colorNeutralLightest};
`;

const TableHeader = styled.th`
  padding: ${tokens.spacingXs} ${tokens.spacingMicro} ${tokens.spacingMicro}
    ${tokens.spacingMicro};
  border-bottom-width: ${tokens.stroke100};
  border-bottom-color: ${tokens.colorNeutralMedium04};
  border-bottom-style: solid;
  text-transform: uppercase;
  font-size: ${tokens.fontSizeMicro};
  color: ${tokens.colorNeutralMedium02};
`;

const TableRow = styled.tr`
  padding: ${tokens.spacingMicro};
  border-bottom-width: ${tokens.stroke100};
  border-bottom-color: ${tokens.colorNeutralLight};
  border-bottom-style: solid;
`;

const TableCell = styled.td`
  padding: ${tokens.spacingXxxs};
  font-size: ${tokens.fontSizeBase};
  color: ${tokens.colorNeutralMedium01};
`;

const ContainerTable = styled.div`
  padding: 0 ${tokens.spacingXs} ${tokens.spacingXxs} ${tokens.spacingXs};
  border-width: ${tokens.stroke100};
  border-style: solid;
  border-radius: ${tokens.radius300};
  border-color: ${tokens.colorNeutralMedium04};

  @media (max-width: 600px) {
    padding: 0 ${tokens.spacingXs} ${tokens.spacingXs} ${tokens.spacingXs};

    ${Table} {
      padding: 0;
      margin: 0;
    }

    ${TableRow} {
      padding: ${tokens.spacingXs} ${tokens.spacingMicro};
      display: block;
    }

    thead {
      display: none;
      padding: 0;
    }

    ${TableCell},
    ${TableHeader} {
      padding: 0px;
      padding-bottom: ${tokens.spacingXxs};
      display: block;
      text-align: left;

      &:before {
        content: attr(data-label);
        width: 100%;
        padding-bottom: ${tokens.spacingNano};
        float: left;
        text-transform: uppercase;
        font-weight: bold;
        color: ${tokens.colorNeutralMedium02};
      }

      &:after {
        content: "\\A";
      }
    }
    ${TableCell}:last-child {
      padding-bottom: 0;
    }
  }
`;

const CustomerTable: React.FC<CustomerTableProps> = ({ customers }) => {
  return (
    <div>
      <ContainerTable>
        <Table>
          <thead>
            <TableRow>
              <TableHeader data-label="ID">ID</TableHeader>
              <TableHeader data-label="Nome">Nome</TableHeader>
              <TableHeader data-label="Email">Email</TableHeader>
              <TableHeader data-label="Telefone">Telefone</TableHeader>
              <TableHeader data-label="Status">Status</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell data-label="ID">{customer.id}</TableCell>
                <TableCell data-label="Nome">{customer.name}</TableCell>
                <TableCell data-label="Email">{customer.email}</TableCell>
                <TableCell data-label="Telefone">{customer.phone}</TableCell>
                <TableCell data-label="Status">{customer.status}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </ContainerTable>
    </div>
  );
};

export default CustomerTable;
