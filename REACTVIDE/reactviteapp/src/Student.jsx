import React from 'react'
import './student.css';

function Student(props) {


  return (
    <div className='icard'>
       <table>
        <tbody>
            <tr><td colSpan={2}>{props.college}</td></tr>
            <tr><td colSpan={2}>{props.pic}</td></tr>
            <tr>
                <td>NAME:</td><td>{props.name}</td></tr>
                <tr><td>BRANCH:</td><td>{props.branch}</td></tr>
                <tr><td>ROLL NUMBER:</td><td>{props.roll}</td></tr>
                <tr><td>SECTION:</td><td>{props.section}</td></tr>
            
        </tbody>
       </table>
           
        </div>
  )
}

export default Student