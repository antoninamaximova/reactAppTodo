import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import PropTypes from 'prop-types';

const ItemList = ({id, items, OnClickDone, DeleteSelectedElement, itemFilter}) => (
  <ul className={styles.list}>
  {itemFilter().map(item =><li key = {item.value}>
  	<Item 
  	value = { item.value } 
  	isDone = { item.isDone } 
  	id = { item.id }
  	OnClickDone = {OnClickDone}
  	DeleteSelectedElement = {DeleteSelectedElement} />
  	</li>)}
  </ul>
)

ItemList.defaultProps = {
    isDone: false
  };

ItemList.propTypes = {
  items: PropTypes.array
};

export default ItemList;