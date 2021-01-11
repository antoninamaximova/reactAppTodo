import React from 'react';
import styles from './App.module.css';
import Todo from '../Todo/Todo';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import About from '../About/About';

const App = () => {
	return (<Router className={styles.color}>
				<div className={styles.wrap}>
					<MenuList className={styles.menu}>
			          <Link to ='/reactAppTodo' className={styles.link}><MenuItem className={styles.menuItem} >About</MenuItem></Link>
			          <Link to ='/todo'className={styles.link}><MenuItem className={styles.menuItem} >Task List</MenuItem></Link>
			        </MenuList>
					<div className={styles.inner}>
						<Route path ='/reactAppTodo' component={About}/>
						<Route path ='/todo' component={Todo}/>
					</div>
				</div>
				</Router>)
};

export default App;
