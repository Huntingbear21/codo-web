import Layout from './components/Layout';
import { Section1, Section2, Section3, Section4, Section5 } from './components/Sections';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </Layout>
    </div>
  );
}

export default App;
