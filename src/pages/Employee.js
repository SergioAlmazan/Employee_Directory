import React from "react";
import axios from "axios";
import EmployeeData from "./EmployeeData";


class Employee extends React.Component {
  state = {
    employeeRecords: [],
  };
  componentDidMount = () => {
    axios
      .get("https://randomuser.me/api/?results=500&nat=us")
      .then((records) => {
        let eData = records.data.results;
        let recordStamp = [];
        for (let i = 0; i < eData.length; i++) {
          let erecord = {
            name: eData[i].name.first + " " + eData[i].name.last,
            email: eData[i].email,
            phone: eData[i].cell,
            dob: eData[i].dob.age,
          };
          recordStamp.push(erecord);
        }
        this.setState({ employeeRecords: recordStamp });
      });
  };

  render() {
    return (
      <div>
        <EmployeeData employees={this.state.employeeRecords} />
      </div>
    );
  }
}

export default Employee;