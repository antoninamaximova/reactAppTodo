import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

const CheckboxItem = ({isDone, OnClickDone}) => (
	<Checkbox
        checked={isDone}
		onClick ={() => OnClickDone(isDone)}
        size="small"
        inputProps={{ 'aria-label': 'checkbox with small size' }}
    />);

export default CheckboxItem;