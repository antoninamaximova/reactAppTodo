  
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import styles from './TextField.module.css';

class TextFieldItem extends React.Component {
  state = {
    inputValue: '', 
    items: [], 
    inputLabel: 'Новая задача'
  };

  onButtonClick = () => {
    this.setState ({
          inputValue: ''
        });
    if(this.state.inputValue === '' || this.props.items.some((item) => this.state.inputValue.toLowerCase() === item.value.toLowerCase())) {
    this.setState ({
          inputLabel: <span className={styles.span}>Введите новую задачу</span>
        });
    } else {
    this.props.OnClickAdd(this.state.inputValue)}
  }
  
  render() {
    return (<Grid>
    <TextField
      id="filled-full-width"
      style={{ marginTop: 8,
      border: ' 3px solid rgba(245, 0, 87, 1)', 
      borderRadius: '5px' }}
      fullWidth
      value={this.state.inputValue}
      label={this.state.inputLabel}
      onChange={event => this.setState({inputValue: event.target.value})}
    />
    <Button 
        color="secondary"
        onClick={this.onButtonClick}>
        Добавить новую задачу
      </Button>
  </Grid>);
  }
};

TextField.propTypes = {
  inputValue: PropTypes.string
};

export default TextFieldItem;