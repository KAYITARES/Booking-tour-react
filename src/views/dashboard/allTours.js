import React from "react";
import ReactDOM from "react-dom";
import '../home.css'
import "antd/dist/antd.css";
import { Table,Space } from "antd";
import DashLayout from "../../components/dashboardLayout";
import allAvailabletours from "../../assets/constants/tours.json";
import AllInfoUsers from "../../assets/constants/users.json";
import{EyeOutlined,EditOutlined,DeleteOutlined}  from '@ant-design/icons'

const Column = [
  {
    title:"Title",
    dataIndex:"title",
    key: "title",
  },
  {
    title: "Date Scheduled",
    dataIndex: "dateScheduled",
    key: "dateScheduled",
  },
  {
    title: "Seats",
    dataIndex: "seats",
    key: "seats",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  
  {
    title: "Action",
    dataIndex: "action",
    render: (text,record)=>(
        <Space size="middle">
            <a><EyeOutlined/></a>
            <a><EditOutlined/></a>
            <a><DeleteOutlined/></a>
        </Space>
    )
  },
];
const ColumnTwo=[
    
  {
    title: "First-Name",
    dataIndex: "first-name",
    key: "first-name",
  },
  {
    title: "Last-Name",
    dataIndex: "last-name",
    key: "last-name",
  },
  
  {
    title: "Phone",
    dataIndex: "phone-number",
    key: "phone-number",
  },
  ,
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Action",
    dataIndex: "action",
    render: (text,record)=>(
        <Space size="middle">
            <a style={{color:"green"}}>Accept</a>
            <a style={{color:"red"}}>Decline</a>
           
        </Space>
    )
  },
    
    
]
const AllTour = () => {
  return (
      <>
          <div className="allTours">
              <h1>All Tours</h1>
          <Table columns={Column}  dataSource={allAvailabletours }/>
              </div>
              <div className="allUsers">
              <h1>All USers</h1>
              <Table columns={ColumnTwo}  dataSource={AllInfoUsers}/>

                  </div>

      
  
 
  </>
  );
};
export default AllTour;
