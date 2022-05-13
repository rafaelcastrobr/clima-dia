import './Home.css'
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import ApiProvider from './contexts/ApiProvider';


function Home() {
  
  return (
    <ApiProvider>

      <Header />
      <Body />

    </ApiProvider>
  );
}

export default Home;