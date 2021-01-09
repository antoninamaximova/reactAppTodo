import React from 'react';
import styles from './Item.module.css';
import classnames from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class Item extends React.Component {

	render() {
		const { value, isDone, OnClickDone, id, DeleteSelectedElement } = this.props;
		return (<span className={
	classnames({
		[styles.item]: true,
		[styles.done]: isDone

	})
}>
	<Checkbox
        checked={isDone}
		onClick ={() => OnClickDone(id)}
        size="small"
        inputProps={{ 'aria-label': 'checkbox with small size' }}
    />
	{ value }
	  	<div className={styles.button}>
	  	<IconButton aria-label="delete"onClick ={() => DeleteSelectedElement(id)}>
          <DeleteIcon fontSize="small" />
        </IconButton></div></span>);
	}
}


	export default Item;