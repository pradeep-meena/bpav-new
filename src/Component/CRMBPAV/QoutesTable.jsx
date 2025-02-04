import React, { useEffect, useState } from "react";
import { Table } from "antd";

function QuotesTable({ columns, dataSource, Selection }) {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState(dataSource);

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const handleSearch = (value) => {
    setSearchText(value);
    if (!value) {
      setFilteredDataSource(dataSource);
    } else {
      const filteredData = dataSource.filter((record) =>
        Object.values(record).some((field) =>
          String(field).toLowerCase().includes(value.toLowerCase())
        )
      );
      setFilteredDataSource(filteredData);
    }
  };

  useEffect(() => {
    setFilteredDataSource(dataSource);
  }, [Selection, dataSource]);

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <>
      <div className="table-top-data p-3">
        <input
          type="search"
          className="form-control"
          placeholder="Search All Quotes"
          value={searchText}
          onChange={(e) => handleSearch(e.target.value)}
          style={{ width: "250px" }}
        />
      </div>

      <Table
        className="table datanew"
        rowSelection={rowSelection}
        columns={columns}
        dataSource={filteredDataSource}
        pagination={{
          defaultPageSize: 10,
          showSizeChanger: true,
          pageSizeOptions: ["10", "20", "30"],
        }}
      />
    </>
  );
}

export default QuotesTable;
