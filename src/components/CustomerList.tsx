import React from "react";
import Customer from "../interfaces/Customer";
import CustomerTable from "./CustomerTable";

interface CustomerListProps {
  customers: Customer[];
}

const CustomerList: React.FC<CustomerListProps> = ({ customers }) => (
  <div>
    <CustomerTable customers={customers}></CustomerTable>
  </div>
);

export default CustomerList;
