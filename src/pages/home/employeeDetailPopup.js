import React from "react";

import { Popup, ToolbarItem } from "devextreme-react/popup";

export const EmployeeDetailPopup = (props) => {
   const {visible: popupVisible, data} = props;
  return (
    <div id="container">
      <Popup
        visible={popupVisible}
        dragEnabled={false}
        hideOnOutsideClick={true}
        showTitle={true}
        title="Information"
        container=".dx-viewport"
        width={"1000"}
        height={"500"}
        showCloseButton={true}
        onHiding={props?.onHiding}
      >
        <p>
          Employee Identifier: <span>{data?.employeeId}</span>
        </p>
        <p>
          Employee code: <span>{data?.employeeIdentifier}</span>
        </p>
        <p>
          Employee name: <span>{data?.employeeName}</span>
        </p>
        <p>
          Age: <span>{data?.age}</span>
        </p>
        <p>
          Yos: <span>{data?.yos}</span>
        </p>
        <p>
          Risk: <span>{data?.risk}</span>
        </p>
      </Popup>
    </div>
  );
};

