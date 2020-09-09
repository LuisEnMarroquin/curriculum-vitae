import React from 'react';

import Typography from '@material-ui/core/Typography';

interface ISimpleList {
  title: string;
  content: Array<string>;
}

function SimpleList({ title, content }:ISimpleList) {
  return (
    <div>
      <Typography variant="subtitle1" align='justify'>{title}</Typography>
      {
        content.map((item, index) => {
          let isLast = content.length === (index + 1) ? true : false
          return <Typography key={`${title}-${index}`} variant="subtitle2" align='justify' gutterBottom={isLast}>* {item}</Typography>
        })
      }
    </div>
  );
}

export default SimpleList;
