import React from 'react';
import styles from './Footer.module.css';
import PropTypes from 'prop-types';

const Footer = ({count, onClickFooter}) => (<div className={styles.title}>
 
Number of tasks to complete: {count} 
 </div>) 

Footer.propTypes = {
	count: PropTypes.number
};

export default Footer;