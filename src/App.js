import './App.css';
// import lake from "./image/lake.JPG";
import GallaryFooter from './components/GallaryFooter';
import Images from './components/images';
import Header from './components/header';



function App(props) {
  return (
    <div>
      <Header/>
      <Images/>
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
