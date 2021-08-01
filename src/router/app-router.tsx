import { FC } from 'react'
import {
    Redirect,
    Switch, Route
  } from "react-router-dom";
import { Form } from '../components/form';
import { Welcome } from '../components/welcome/index';

/* import IconReact from '../../assets/react.svg'; */
import Burger from '../components/menu/Burger';

const AppRouter:FC = () => {
    return (
        <>
        <Redirect exact to='/' />
        <Burger/>
        <Switch>
        <Route exact path="/:name">
          <Form/>
        </Route>
        <Route exact path="/">
          <Welcome />
        </Route>

      </Switch>
        </>
    )
}

export default AppRouter