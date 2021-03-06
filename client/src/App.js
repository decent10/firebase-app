import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/RequireAuth";
import Home from "./screens/Home";
import Orders from "./screens/Orders";
import OrderDetail from "./screens/OrderDetail";
import Login from "./screens/Login";
import Navbar from "./components/Navbar";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Navbar />
          <div>
            {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute exact path="/orders" component={Orders} />
              <PrivateRoute exact path="/orders/:id" component={OrderDetail} />
              <Route path="/login">
                <Login />
              </Route>
            </Switch>
          </div>
        </AuthProvider>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
