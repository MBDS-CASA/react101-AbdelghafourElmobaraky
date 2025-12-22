import { useState } from 'react';
import studentData from '../assets/data.json';

function TodoList() {
    const [index, setIndex] = useState(0);

    const currentUser = studentData[index];

    return (
        <div id="tab-content">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Cours</th>
                        <th>Étudiant</th>
                        <th>Date</th>
                        <th>Note</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={currentUser.unique_id || currentUser.id}>
                        <td>{currentUser.unique_id || currentUser.id}</td>
                        <td>{currentUser.course}</td>
                        <td>{currentUser.student.firstname} {currentUser.student.lastname}</td>
                        <td>{currentUser.date}</td>
                        <td>{currentUser.grade}</td>
                    </tr>
                </tbody>
            </table>
            <div>
            <button onClick={() => {
                setIndex((index + 1) % studentData.length);
            }}>
                changer d'étudiant
            </button>
            </div>
        </div>
    );
}

export default TodoList;