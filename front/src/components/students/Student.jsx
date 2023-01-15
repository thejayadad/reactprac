import React, {useState} from 'react'
import students from './data';
import "../Students/student.css"

function Student(){
    const [Jazz] = students;
    const { gradeRange: {highGpa: jazzHighGpa, lowGpa: JazzLowGpa}} = Jazz
    return (
        <div className='container'>
            <h2>Object Destructing</h2>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Highest GPA</th>
                    <th>Lowest GPA</th>

                </tr>
                <tr>
                    <td>{Jazz.name}</td>
                    <td>{jazzHighGpa}</td>
                    <td>{JazzLowGpa}</td>
                </tr>
              </table>
        </div>
    )
}

export default Student;
