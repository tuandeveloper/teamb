import "./home.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";
import myData from "./employee.json";
import DataGrid, { Column, Pager, Paging } from "devextreme-react/data-grid";
import { Button } from "devextreme-react/button";
import { EmployeeDetailPopup } from "./employeeDetailPopup";

export default function Home() {
  const [employees, setEmployees] = useState(myData);
  const [popupVisible, setPopupVisible] = useState();
  const [currentEmployee, setCurrentEmployee] = useState(null);

  useEffect(() => {
    // axios
    //   .get("https://dummy.restapiexample.com/api/v1/employees")
    //   .then((response) => {
    //     console.log(response);
    //   });
  }, []);

  const viewEmployeeDetail = (input) => {
    setCurrentEmployee(input.data);
    setPopupVisible(true);
  };

  const onHiding = () => {
    setPopupVisible(false);
  };

  return (
    <div style={{ padding: 10 }}>
      <DataGrid
        dataSource={employees}
        showBorders={true}
        onRowDblClick={viewEmployeeDetail}
        id="gridContainer"
      >
        <Column
          dataField="employeeId"
          caption="Employee Identifier"
          dataType="string"
        />
        <Column dataField="employeeIdentifier" caption="Employee Code" dataType="string" />
        <Column
          dataField="employeeName"
          caption="Employee Name"
          dataType="string"
        />
        <Column dataField="age" caption="Age" dataType="number" />
        <Column dataField="yos" caption="Yos" dataType="number" />
        <Column dataField="risk" caption="Risk" dataType="number" />

        <Pager allowedPageSizes={10} showPageSizeSelector={true} />
        <Paging defaultPageSize={10} />
      </DataGrid>
      <EmployeeDetailPopup
        visible={popupVisible}
        data={currentEmployee}
        onHiding={onHiding}
      />
    </div>
  );
}
