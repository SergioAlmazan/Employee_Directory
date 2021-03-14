import React from "react";
import { MDBDataTable } from "mdbreact";

const EmployeeData = (props) => {
  const data = {
    columns: [
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 300,
      },
      {
        label: "Email Address",
        field: "email",
        sort: "asc",
        width: 300,
      },
      {
        label: "Phone #",
        field: "phone",
        sort: "asc",
        width: 300,
      },
      {
        label: "Age",
        field: "dob",
        sort: "asc",
        width: 250,
      }
    ],
    rows:props.employees
  };
  return <MDBDataTable sorting={true} striped bordered data={data} />;
};

export default EmployeeData;