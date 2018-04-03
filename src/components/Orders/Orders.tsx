import * as React from 'react';
import { Table } from 'antd';

const columns = [
  {title: 'Row ID', dataIndex: 'Row ID', width: 100},
  {title: 'Order ID', dataIndex: 'Order ID', width: 100},
  {title: 'Order Date', dataIndex: 'Order Date', width: 150},
  {title: 'Ship Date', dataIndex: 'Ship Date', width: 150},
  {title: 'Ship Mode', dataIndex: 'Ship Mode', width: 150},
  {title: 'Customer ID', dataIndex: 'Customer ID', width: 150},
  {title: 'Customer Name', dataIndex: 'Customer Name', width: 150},
  {title: 'Segment', dataIndex: 'Segment', width: 150},
  {title: 'Country', dataIndex: 'Country', width: 150},
  {title: 'City', dataIndex: 'City', width: 150},
  {title: 'State', dataIndex: 'State', width: 150},
  {title: 'Postal Code', dataIndex: 'Postal Code', width: 150},
  {title: 'Region', dataIndex: 'Region', width: 150},
  {title: 'Product ID', dataIndex: 'Product ID', width: 150},
  {title: 'Category', dataIndex: 'Category', width: 150},
  {title: 'Sub-Category', dataIndex: 'Sub-Category', width: 150},
  {title: 'Product Name', dataIndex: 'Product Name', width: 300},
  {title: 'Sales', dataIndex: 'Sales', width: 100},
  {title: 'Quantity', dataIndex: 'Quantity', width: 100},
  {title: 'Discount', dataIndex: 'Discount', width: 100},
  {title: 'Profit', dataIndex: 'Profit', width: 100}
];

const data = [
  {
    'key': 1,
    'Row ID': 1,
    'Order ID': 'CA-2016-152156',
    'Order Date': '11/8/2016',
    'Ship Date': '11/11/2016',
    'Ship Mode': 'Second Class',
    'Customer ID': 'CG-12520',
    'Customer Name': 'Claire Gute',
    'Segment': 'Consumer',
    'Country': 'United States',
    'City': 'Henderson',
    'State': 'Kentucky',
    'Postal Code': 42420,
    'Region': 'South',
    'Product ID': 'FUR-BO-10001798',
    'Category': 'Furniture',
    'Sub-Category': 'Bookcases',
    'Product Name': 'Bush Somerset Collection Bookcase',
    'Sales': 261.96,
    'Quantity': 2,
    'Discount': 0,
    'Profit': 41.9136
  },
  {
    'key': 2,
    'Row ID': 2,
    'Order ID': 'CA-2016-152156',
    'Order Date': '11/8/2016',
    'Ship Date': '11/11/2016',
    'Ship Mode': 'Second Class',
    'Customer ID': 'CG-12520',
    'Customer Name': 'Claire Gute',
    'Segment': 'Consumer',
    'Country': 'United States',
    'City': 'Henderson',
    'State': 'Kentucky',
    'Postal Code': 42420,
    'Region': 'South',
    'Product ID': 'FUR-CH-10000454',
    'Category': 'Furniture',
    'Sub-Category': 'Chairs',
    'Product Name': 'Hon Deluxe Fabric Upholstered Stacking Chairs, Rounded Back',
    'Sales': 731.94,
    'Quantity': 3,
    'Discount': 0,
    'Profit': 219.582
  },
  {
    'key': 3,
    'Row ID': 3,
    'Order ID': 'CA-2016-138688',
    'Order Date': '6/12/2016',
    'Ship Date': '6/16/2016',
    'Ship Mode': 'Second Class',
    'Customer ID': 'DV-13045',
    'Customer Name': 'Darrin Van Huff',
    'Segment': 'Corporate',
    'Country': 'United States',
    'City': 'Los Angeles',
    'State': 'California',
    'Postal Code': 90036,
    'Region': 'West',
    'Product ID': 'OFF-LA-10000240',
    'Category': 'Office Supplies',
    'Sub-Category': 'Labels',
    'Product Name': 'Self-Adhesive Address Labels for Typewriters by Universal',
    'Sales': 14.62,
    'Quantity': 2,
    'Discount': 0,
    'Profit': 6.8714
  }
];

export default
class OrdersTable extends React.Component {
  render() {
    return (
      <Table columns={columns} dataSource={data} bordered scroll={{ x: 3000, y: 300 }} />
    );
  }
}
