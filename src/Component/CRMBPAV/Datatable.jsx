import React, { useEffect, useState } from "react";
import { Table, Modal } from "antd";
import CompaniesCard from "./CompaniesCard";

const Datatable = ({ columns, dataSource, Selection }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selections, setSelections] = useState(true);
  const [filteredDataSource, setFilteredDataSource] = useState(dataSource);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);

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

  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedCompany(null);
  };

  useEffect(() => {
    setSelections(!selections);
    setFilteredDataSource(dataSource);
  }, [Selection, dataSource]);

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  // Add render logic for company name column
  const updatedColumns = columns.map((col) => {
    if (col.dataIndex === "companyName") {
      return {
        ...col,
        render: (text, record) => (
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => handleCompanyClick(record)}
          >
            {text}
          </span>
        ),
      };
    }
    return col;
  });

  return (
    <>
      <div className="table-top-data">
        <div className="row p-3">
          <div className="col-sm-12 col-md-6">
            <div className="dataTables_length" id="DataTables_Table_0_length"></div>
          </div>
          <div className="">
            <div
              id="DataTables_Table_0_filter"
              className="d-flex"
              style={{
                justifyContent: "space-between",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <label className="position-relative flex-right-1">
                <input
                  type="search"
                  className="form-control form-control-sm"
                  placeholder="Search"
                  aria-controls="DataTables_Table_0"
                  value={searchText}
                  onChange={(e) => handleSearch(e.target.value)}
                />
                <i
                  className="bi bi-search position-absolute"
                  style={{ right: "12px", top: "50%", transform: "translateY(-50%)" }}
                ></i>
              </label>
              <div className="search-actions d-flex flex-wrap gap-2">
                <button className="btn btn-outline-secondary">
                  Create report <i className="bi bi-box-arrow-up-right"></i>
                </button>
                <button className="btn btn-outline-secondary">Export</button>
                <button className="btn btn-outline-secondary">Edit columns</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {!selections ? (
        <Table
          className="table datanew dataTable no-footer"
          columns={updatedColumns}
          rowHoverable={false}
          dataSource={filteredDataSource}
          pagination={{
            locale: { items_per_page: "" },
            nextIcon: <i className="ti ti-chevron-right" />,
            prevIcon: <i className="ti ti-chevron-left" />,
            defaultPageSize: 10,
            showSizeChanger: true,
            pageSizeOptions: ["10", "20", "30"],
          }}
        />
      ) : (
        <Table
          className="table datanew dataTable no-footer"
          rowSelection={rowSelection}
          columns={updatedColumns}
          rowHoverable={false}
          dataSource={filteredDataSource}
          pagination={{
            locale: { items_per_page: "" },
            nextIcon: <i className="ti ti-chevron-right" />,
            prevIcon: <i className="ti ti-chevron-left" />,
            defaultPageSize: 10,
            showSizeChanger: true,
            pageSizeOptions: ["10", "20", "30"],
            showTotal: (total, range) =>
              `Showing ${range[0]} - ${range[1]} of ${total} entries`,
          }}
        />
      )}

      {/* Modal for CompaniesCard */}
      <Modal
        title="Company Details"
        visible={isModalVisible}
        onCancel={handleModalClose}
        footer={null}
      >
        {selectedCompany && <CompaniesCard company={selectedCompany} />}
      </Modal>
    </>
  );
};

export default Datatable;
