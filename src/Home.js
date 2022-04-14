import './Home.css'
import Header from './components/Header/Header';
import Capitais from './api/api';


function Home() {
  return (
    <>
      <Header />
      
      <Capitais />
    </>
  );
}

export default Home;