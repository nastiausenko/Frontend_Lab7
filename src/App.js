import './App.css';
import Header from './components/taskone/Header';
import Content from './components/taskone/Content';
import Image from './components/taskone/Image';
import Buttons from './components/taskone/Buttons';
import Gallery from './components/tasktwo/Gallery';

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Image />
      <Buttons />

      <h1>Галерея товарів</h1>
      <Gallery />
    </div>
  );
}

export default App;
