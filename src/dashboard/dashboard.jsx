import Sidebar from "./sidebar";
import "./dashboard.css";
import Search from "./search";
import Sales from "./sales";

function Dashboard() {
  return (
    <div className="main-frame">
      <Sidebar />
      <div className="secondary-frame">
        <div className="mainsearch">
          <Search />
        </div>
        <div className="chart">
          <Sales />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
