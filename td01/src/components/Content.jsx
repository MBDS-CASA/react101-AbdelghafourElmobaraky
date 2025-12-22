import TodoList from "./Todo.jsx";
function Content() {
    const now = new Date();
  return (
    <>
      <p>
        Bonjour, on est le {now.getDay()}-{now.getMonth()}-{now.getFullYear()} et il est {now.getHours()}:{now.getMinutes()}:{now.getSeconds()} 
      </p>
      <TodoList/>
    </>
  );
}
export default Content;