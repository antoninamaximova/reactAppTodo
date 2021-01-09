import React, {useState} from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';
import TextFieldItem from '../TextField/TextField';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Todo = () => {
	const state = {
		items: [
			{	
				value: 'Добавить задание',
				isDone: false,
				id: 1
			}
		],
		count: 1,
		label: 'Все'
	};

	const [items, setItems] = useState(state.items);
	const [count, setCount] = useState(state.count);
	const [label, setLabel] = useState(state.label);
	const [value] = React.useState(0);
	const useStyles = makeStyles({
    root: {
     flexGrow: 1,
    },
  });

  const classes = useStyles(); 

	const itemFilter = () => {
    	if (label === 'Невыполненные') {
      		return items.filter(item => !item.isDone);
    	} if (label === 'Выполненные') {
      		return items.filter(item => item.isDone);
    	}
    	return items;
 	 };

	const OnClickDone = id => {
		const NewItemList = items.map(item => {
			const NewItem = { ...item };
			if (item.id === id) {
				NewItem.isDone = !item.isDone;
				setCount(count - 1)
			}
			if (item.isDone === true) 
				{setCount(count + 1)}
			return NewItem;
		});
		setItems(NewItemList)
	};

	const DeleteSelectedElement = id => {
		const deleteItem = items.filter(item => item.id !==id);
		setItems(deleteItem)
		setCount(count - 1)
	};

	const OnClickAdd = value =>{
		 setItems(
		 	[...items,
		 		{
		 			value,
		 			isDone: false,
		 			id: count + 1
		 		}]);
		 setCount(count + 1)
	}

	const onClickFilter = (name) => {
    	setLabel(name)
  	};

	return (<div><h1 className={styles.title}>Задачи на сегодня</h1>
		<Paper className={classes.root}>
      <Tabs
        value = {value}
        indicatorColor="primary"
        textColor="primary"
        centered
        onChange={itemFilter}
      >
        <Tab label='Все' onClick={() => onClickFilter('Все')}/>
        <Tab label='Выполненные' onClick={() => onClickFilter('Выполненные')}/>
        <Tab label='Невыполненные'onClick={() => onClickFilter('Невыполненные')}/>
      </Tabs>
    </Paper>
		<TextFieldItem  items = { items } OnClickAdd={OnClickAdd}/>
		<ItemList items = { items } OnClickDone={OnClickDone} DeleteSelectedElement={DeleteSelectedElement} itemFilter={itemFilter}/>
		<Footer count = {count}/></div>)
};

Todo.propTypes = {
  isDone: PropTypes.bool,
  id: PropTypes.number,
  value: PropTypes.string

};

export default Todo;