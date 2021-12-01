import React from 'react';
import DashLayout from "../../components/dashboardLayout";
import {Form,Input, DatePicker,Upload,Button,Space, InputNumber} from "antd";
import { UploadOutlined } from '@ant-design/icons';


const NewTourView=()=>{
    const onFinish=(values)=>{

        console.log(values);
    }
    return(
      

     
       
              <Form onFinish={onFinish}>
                  <Form.Item
                  name="title"
                  label="Title"
                  rules={[{required:true}]}>
                  <Input/>
                </Form.Item>  
                <Form.Item
                  name="description"
                  label="Why"
                  rules={[{required:true}]}>
                  <Input.TextArea/>
                </Form.Item> 
                <Space> 
                <Form.Item
                  name="dateScheduled"
                  label="Date Scheduled"
                  rules={[{required:true}]}>
                  < DatePicker/>
                </Form.Item>  
                
       
  <Form.Item
                  name="dueDate"
                  label="Due Date"
                  rules={[{required:true}]}>
                  < DatePicker/>
                </Form.Item> 
                </Space> <br/>
                <Space>
              
                <Form.Item
                  name="images"
                  label="Images"
                  rules={[{required:true}]}>
                  <Upload>
    <Button icon={<UploadOutlined />}>Upload Image</Button>
  </Upload>
  </Form.Item> 
 
                <Form.Item
                  name="seats"
                  label="Seats"
                  rules={[{required:true}]}>
                  <InputNumber/>
                </Form.Item> 
                <Form.Item
                  name="price"
                  label="Price ($)"
                  rules={[{required:true}]}>
                  <InputNumber/>
                </Form.Item> 
                </Space><br/>
                <Form.Item
                  name="tripDescription"
                  label="abaout Trip"
                  rules={[{required:true}]}>
                  <Input.TextArea/>
                </Form.Item> 
                <Button htmlType="submit" type="primary">
                    Register
                </Button>
                
              </Form>


           
    )
}
export default NewTourView;