import React from 'react'
import Student from './Student'
import Usestudentstate from './assets/UseStudentState'

const app = () => {
    const h1=<h1>Hello world</h1>
    const mystyle={
      color:'red',
      backgroundColor:'black'
    }
  
    return (
//     <div style={{backgroundColor:'cyan'}}>
//         {h1}

//     <div style={mystyle}>
//       ABES ENGINEERING COLLEGE
//     </div>
//    <div>
//        <Student college="ABES ENGINEERING COLLEGE"
//        name="NIKITA CHAUDHARY"
//        pic={<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj-NK-Q7ElIuxotNPZSuRC8fZfw2Fu_n2mLg&s' height={100} width={100}/>}
//        branch="CSE"
//        roll="2022b0101105"
//        section="B"
//       />

// <Student college="ABES ENGINEERING COLLEGE"
//        name="AVI CHAUDHARY"
//        branch="CSE"
//        roll="2022b0101105"
//        section="B"
//       />

//    </div>
//     </div>
<Usestudentstate/>
  )
}

export default app