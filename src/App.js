import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Reports from "./components/Reports/Reports";

function App() {

    return (
    <div className="app">
      <Header/>
      <div className="content">
          <Sidebar/>
          <Reports/>
      </div>
    </div>
  );
}

export default App;
