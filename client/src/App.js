import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import AskModal from "./components/home/askModal";
import BountyModal from "./components/Question/BountyModal";
import PageRender from './customRouter/PageRender';
import Alert from './components/alert/Alert';
import { refreshToken } from './redux/actions/authAction';
import Header from './components/header/Header';
import PrivateRouter from './customRouter/PrivateRouter';
import AdminDashboard from './pages/adminDashboard';

function App() {
  const { auth, askModal, bountyModal, userType } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(refreshToken());

    }, [dispatch]);

  return (
    <Router>
      <Alert />
      <input type="checkbox" id="theme" />
      <div className="App">
        <div className="main">
          {userType === "user" && auth.token && <Header />}
          {askModal && <AskModal />}
          {bountyModal.isOpen && <BountyModal />}
          <Route
            exact
            path="/"
            component={
              userType === "user"
                ? auth.token
                  ? Home
                  : Login
                : auth.token
                ? AdminDashboard
                : Login
            }
          />
          {userType === "user" && (
            <>
              <Route exact path="/register" component={Register} />
              <div className="wrap_page">
                <PrivateRouter exact path="/:page" component={PageRender} />
                <PrivateRouter exact path="/:page/:id" component={PageRender} />
              </div>
            </>
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
