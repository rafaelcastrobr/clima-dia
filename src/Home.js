import './Home.css'
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Api from './api/api';


function Home() {
  return (
    <Api>
      <Header />
      <Body />
    </Api>
  );
}

export default Home;