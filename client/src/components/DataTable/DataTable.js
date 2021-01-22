import React from "react";
import DataTable from "react-data-table-component";
import PropTypes from "prop-types";
import "./DataTable.scss";

const CustomDataTable = ({ columns, data, title }) => {
  return (
    <div className="data-table-wrapper">
      <DataTable title={title} columns={columns} data={data} striped={true} pagination={true} />
    </div>
  );
};

CustomDataTable.defaultProps = {
  columns: [],
  data: [],
  title: "Results",
};

CustomDataTable.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  title: PropTypes.string,
};

export default React.memo(CustomDataTable);
