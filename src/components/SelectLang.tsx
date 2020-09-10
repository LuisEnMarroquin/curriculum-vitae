import React from 'react';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

interface ISelectLang {
  language: number;
  change: Function;
}

function SelectLang({ language, change }:ISelectLang) {
  return (
    <div className='selectLang'>
      <FormControl fullWidth>
        <Select value={language} variant="outlined" onChange={e => change(Number(e.target.value))} inputProps={{ 'aria-label': 'Change language' }}>
          <MenuItem value={1}>English</MenuItem>
          <MenuItem value={2}>Español</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectLang;
