import React from 'react'

function StudentAdmin() {
  function showData(e){
    epreventDefault();
    const sid=e.target.sid.value;
  alert("hiii"+sid);

  const response=await fetch("https://localhost:3005/admmin/show");
         cosnt res=await response.json();

  }
  return (
    <div style={{backgroundColor:'brown',color:'white',fontSize:}}></div>

    <div>
      <button>Search Student</button>
    </div>
    </form>
    <div>
      {
        studentData && studentData.length>0?
        (<table>
          <thead>
            <tr><td>Name</td><td>Email</td></tr>
          </thead>
          <tbody>
            {studentData.map((student,index)=>(
              <tr key={index}>
                <td>{student.name}</td>
              </tr>
            ))
            }
          </tbody>


        </table>
      }
    </div