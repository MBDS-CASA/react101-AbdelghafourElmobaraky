import mbdslogo from '../images/image.png'

function Header() {
  return (
    <div>
      <img src={mbdslogo} className="logo" alt="Vite logo" />
            <h1>Introduction à React</h1>
      <h2>
        A la découverte des premières notions de React
      </h2>
    </div>
  );
}

export default Header;