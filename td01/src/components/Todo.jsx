import studentData from '../assets/data.json';

function TodoList() {
  const randomIndex = Math.floor(Math.random() * studentData.length);
  
  const item = studentData[randomIndex];

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
          <tr key={item.unique_id || item.id}>
            <td>{item.unique_id || item.id}</td>
            <td>{item.course}</td>
            <td>{item.student.firstname} {item.student.lastname}</td>
            <td>{item.date}</td>
            <td>{item.grade}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;