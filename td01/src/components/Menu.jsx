    function Menu() {
  const menuItems = ["Notes", "Etudiants", "Matières", "A propos"];

  const handleClick = (item) => {
    alert(item);
  };

  return (
    <nav className="main-menu">
      <ul>
        {menuItems.map((item) => (
          <li key={item} onClick={() => handleClick(item)}>
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;