import React, { useEffect, useState } from "react";
import { Table } from "antd";


function QuotesTable({ columns, dataSource, Selection }) {
     const [selectedRowKeys, setSelectedRowKeys] = useState([]);
      const [searchText, setSearchText] = useState("");
      const [selections, setSelections] = useState(true);
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
        setSelections(!selections);
        setFilteredDataSource(dataSource);
      }, [Selection, dataSource]);
    
      const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
      };
  return (
   <>
         <div className="table-top-data">
           <div className="row p-3">
             <div className="col-sm-12 col-md-6">
               <div className="dataTables_length" id="DataTables_Table_0_length"></div>
             </div>
             <div className="">
               <div id="DataTables_Table_0_filter" className=" d-flex  ">
                 <label className=" position-relative flex-right-1  " style={{
                  marginRight:"10px"
                 }}>
                   <input
                     type="search"
                     style={{
                        width:"250px",
                        padding:"6px 5px"
                     }}
                     className="form-control form-control-sm"
                     placeholder="Search All Quotes"
                     aria-controls="DataTables_Table_0"
                     value={searchText}
                     onChange={(e) => handleSearch(e.target.value)}
                   />
                    <i className="bi bi-search position-absolute" style={{ right: "12px", top: "50%", transform: "translateY(-50%)" }}></i>
                 </label>
                 <div className="search-actions d-flex flex-wrap ">
            <p>Status: <button className="btn " style={{color:"#00aeff", fontWeight:"bold"}}>All <i className="bi bi-box-arrow-up-right"></i></button></p>
            <p>Owner:  <button className="btn" style={{color:"#00aeff" ,fontWeight:"bold"}}>All Users <i className="bi bi-box-arrow-up-right"></i></button></p>
            <p>Achive Status:  <button className="btn " style={{color:"#00aeff" ,fontWeight:"bold"}}>Active <i className="bi bi-box-arrow-up-right"></i></button></p>
           </div>
               </div>
             </div>
           </div>
         </div>
   
         {!selections ? (
           <Table
             className="table datanew dataTable no-footer"
             columns={columns}
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
             columns={columns}
             rowHoverable={false}
             dataSource={filteredDataSource}
             pagination={{
               locale: { items_per_page: "" },
               nextIcon: <i className="ti ti-chevron-right" />,
               prevIcon: <i className="ti ti-chevron-left" />,
               defaultPageSize: 10,
               showSizeChanger: true,
               pageSizeOptions: ["10", "20", "30"],
               showTotal: (total, range) => `Showing ${range[0]} - ${range[1]} of ${total} entries`,
             }}
           />
         )}
       </>
  )
}

export default QuotesTable