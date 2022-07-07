import { FC } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const AppLayout: FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <Navigation />
      </header>

      {/* Page Content */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
