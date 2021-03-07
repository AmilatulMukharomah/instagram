import logo from './logo.svg';
import './App.css';
import img1 from './img/navigation.png'

const App = () => {
  return (
    <div className="navbar">
      <div className="satu">
        INSTAGRAM
      </div>
      <div className="dua">
        <form >
          <img className="cari" src={img1} alt="avatar" />
          <input type="text" placeholder="Search.." name="search" />
        </form>
      </div>
      <div className="tiga">

      </div>

    </div>
  );
}

export default App;
