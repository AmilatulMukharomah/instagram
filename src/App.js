import logo from './logo.svg';
import './App.css';
import img1 from './img/navigation.png'
import img2 from './img/home.png'
import img3 from './img/dm.png'
import img4 from './img/like.png'
import img5 from './img/profile.png'

const App = () => {
  return (
    <div >
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
          <img className="iconnav" src={img2} alt="avatar" />
          <img className="iconnav" src={img3} alt="avatar" />
          <img className="iconnav" src={img1} alt="avatar" />
          <img className="iconnav" src={img4} alt="avatar" />
          <img className="iconnav" src={img5} alt="avatar" />
        </div>
      </div>
      <div className="konten">

      </div>
    </div>

  );
}

export default App;
