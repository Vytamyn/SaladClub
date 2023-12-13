import Sidebar from "./sidebar";
import "./dashboard.css";
import Search from "./search";
import Sales from "./sales";
import Orders from "./orders";

function Dashboard() {
  return (
    <div className="main-frame">
      <Sidebar />
      <div className="secondary-frame">
        <div className="mainsearch">
          <Search />
        </div>
        <div className="left-side">
          <Sales />
          <Orders />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
