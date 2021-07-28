import React from "react";
import DataTable from "react-data-table-component";

function DataTableComponent(props) {
  const columns = [
    {
      name: "Name",
      selector: (row) => row.first_name,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (row) => row.last_name,
      sortable: true,
    },
    {
      name: "E-mail",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Phone Number",
      selector: (row) => row.phone,
    },
    {
      name: "",
      cell: (row) => (
        <button onClick={() => props.selectContact(row.id)}>
          View details
        </button>
      ),
    },
  ];

  return props.tableData ? (
    <div className="tableContainer">
      <DataTable columns={columns} data={props.tableData} fixedHeader />
    </div>
  ) : (
    <div className="tableContainer">
      We could't load you contacts, please try to refresh.
    </div>
  );
}

export default DataTableComponent;
