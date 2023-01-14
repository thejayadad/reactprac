import React, {useState} from 'react'
import students from './data';
import "../Students/student.css"

function Student(){
const [Jazz, Jada, Jace, Jack ] = students;

const {gradeRange: {highGpa: jazzhighGpa, lowGpa: jazzLowGpa}} = Jazz
const {gradeRange: {highGpa: jadahighGpa, lowGpa: jadaLowGpa}} = Jada
const {gradeRange: {highGpa: jacehighGpa, lowGpa: jaceLowGpa}} = Jace
const {gradeRange: {highGpa: jackhighGpa, lowGpa: jackLowGpa}} = Jack

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
                    <td>{jazzhighGpa}</td>
                    <td>{jazzLowGpa}</td>
                </tr>
                <tr>
                    <td>{Jada.name}</td>
                    <td>{jadahighGpa}</td>
                    <td>{jadaLowGpa}</td>
                </tr>
                <tr>
                    <td>{Jace.name}</td>
                    <td>{jacehighGpa}</td>
                    <td>{jaceLowGpa}</td>
                </tr>
                <tr>
                    <td>{Jack.name}</td>
                    <td>{jackhighGpa}</td>
                    <td>{jackLowGpa}</td>
                </tr>
            </table>
        </div>
    )
}

export default Student;
