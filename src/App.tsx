import { useRoutes } from "react-router-dom";
import { all_routes } from "routes/routes";
import { AuthContextProvider } from "contexts/AuthContext";

function App() {
  const all_pages = useRoutes(all_routes);

  return <AuthContextProvider>{all_pages}</AuthContextProvider>;
}

export default App;
