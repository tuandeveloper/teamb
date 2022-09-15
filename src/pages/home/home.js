import "./home.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";
import myData from "./employee.json";
import DataGrid, {
  Column,
  Grouping,
  GroupPanel,
  Pager,
  Paging,
} from "devextreme-react/data-grid";

export default function Home() {
  console.log(myData);
  const [employees, setEmployees] = useState(myData);
  useEffect(() => {
    axios
      .get("https://dummy.restapiexample.com/api/v1/employees")
      .then((response) => {
        console.log(response);
      });
  }, []);
  return (
    <div style={{padding: 10}}>
      <DataGrid
        dataSource={employees}
        allowColumnReordering={true}
        rowAlternationEnabled={true}
        showBorders={true}
      >
        <Column dataField="employeeId" caption="Employee Identifier" dataType="string" />
        <Column dataField="employeeIdentifier" dataType="string" />
        <Column dataField="employeeName" caption="Employee Name" dataType="string" />
        <Column dataField="age" caption="Age" dataType="number" />
        <Column dataField="yos" caption="Yos" dataType="number" />
        <Column dataField="risk" caption="Risk" dataType="number" />

        <Pager allowedPageSizes={10} showPageSizeSelector={true} />
        <Paging defaultPageSize={10} />
      </DataGrid>
    </div>
  );
}
