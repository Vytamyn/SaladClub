import Sidebar from "./sidebar";
import "./dashboard.css";
import Search from "./search";

function Dashboard() {
  return (
    <div className="main-frame">
      <Sidebar />
      <Search />
    </div>
  );
}

export default Dashboard;
