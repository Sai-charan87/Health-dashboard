import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DashboardMainContent from "./components/DashboardMainContent";
function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar />
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;
