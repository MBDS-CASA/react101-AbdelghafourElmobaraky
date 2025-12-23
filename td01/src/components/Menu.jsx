import { Routes, Route } from 'react-router-dom';
import CourseList from './CourseList.jsx';
import Grades from './Grades.jsx';
import Students from './Students.jsx';
import Content from './Content.jsx';
s
function Menu() {
   return (
       <>
       <Routes>
           <Route path="/" element={<Content />} />
           <Route path="/grades" element={<Grades />} />
            <Route path="/courses" element={<CourseList />} />
            <Route path="/students" element={<Students />} />
       </Routes>
       </>
   );
}

export default Menu;
