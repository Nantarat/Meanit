import React, { Component } from 'react'
import { Input } from 'antd';
import { Button } from 'antd';
import { Table} from 'antd';

const columns = [
  {
    title: 'Letter',
    dataIndex: 'Letter',
    key: 'Letter',
  },
  {
    title: 'Amount',
    dataIndex: 'Amount',
    key: 'Amount',
  },

];

// const data = [
//   {
//     key: '1',
//     Letter: 'John Brown',
//     Amount: 32,
//   },
//   {
//     key: '2',
//     Letter: 'Jim Green',
//     Amount: 42,
//   },
//   {
//     key: '3',
//     Letter: 'Joe Black',
//     Amount: 32,
//   },
// ];

export default class histogram extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data:[],
      txt:'',
    }
  }
  _enter =(e) =>{
    this.setState({
      txt: e.target.value
      
    })
  }
  _display =()=>{
    console.log(this.state.txt)
  }
  _histogram =()=>{
    const txt = this.state.txt //ประกาศตัวแปร text ให้มีค่า string เท่ากับ JaoSuii 
    const histogram={}//สร้าง obj เปล่า

    for (const c of txt){ //ใช้ forof วนลูป c ทีละตัวใน text
      if ( histogram[c]===undefined )//ถ้า c ใน histogram มีค่าเป็น undefined หรือคือไม่เคยมีตัวอักษรตัวนี้มาก่อนให้นับเป็น 1
        histogram[c]=1
      else//นอกจากนั้นให้บวกเพิ่ม 1
        histogram[c]=histogram[c]+1
    }
    // const input =[2,3,4]
    // const output= input.map(x=>x**2+1)
    // console.log(output)
    console.log(histogram)//โชว์ histogram ผ่านconsole
    console.log(Object.keys(histogram))
    console.log(Object.values(histogram))

    this.setState({
      data: Object.keys(histogram).sort().map(function(c){
        return {
          key:c,
          letter:c,
          amount:histogram[c],

        }})
      
      // data:Object.keys(histogram).map(c=>({//
      //   key:c,
      //   letter:c,
      //   amount:histogram[c],
      // }))
    })
  }
  _columns = [
    {
      title: 'Letter',
      dataIndex: 'letter',
      key: 'letter',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
  
  ];

 

  render() {
    return (
      <div>
        <Input 
          placeholder="Give me some world !!!" 
          onChange={this._enter}
          value={this.state.txt} 
          />
        
        <Button type="primary" onClick={this._histogram}>Enter</Button>
        <Table columns={this._columns} dataSource={this.state.data} />
      </div>
    )
  }
}
