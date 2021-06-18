// Core
import React, {useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

//Nav
import Header from "./components/Header";

//Page
import Home from "./page/Home";
import Register from "./auth/Register";
import UpdateUser from "./page/UpdateUser";

//Actions
import {loadingUsers} from "./_actions";

//Redux
import {connect} from "react-redux";

//Utils
import {routes} from "./_utils/Routes";

//Function
import {getUsers} from "./function";

//Style
import {ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Spinner from "./components/Spinner";

const App = ({loadingUsers, isLoading}) => {

    useEffect(() => {
        getUsers()
            .then(res => loadingUsers(res.data))
            .catch(err => console.log(err))
    }, [loadingUsers])


    return (
    <div className="container">
      <Header />
      <ToastContainer />
        {
            isLoading ? (
                <Switch>
                    <Route exact path="/" render={() => (<Redirect to={routes.home} />)} />
                    <Route exact path={routes.home} component={ () => <Home />} />
                    <Route exact path={routes.register} component={ () => <Register />} />
                    <Route exact path={`${routes.updateUser}/:id`} component={ () => <UpdateUser />} />
                </Switch>
            ) : <Spinner />
        }
    </div>
  )
}

const mapStateToProps = ({userReducer: {isLoading}}) => {
    return {isLoading}
}

export default connect(mapStateToProps, {loadingUsers})(App);