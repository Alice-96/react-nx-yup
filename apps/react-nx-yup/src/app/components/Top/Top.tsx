import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Page from '../Page/Page';

const Top: React.FC = () => {
  return (
    <Page>
      <Typography component="h2" variant="h6" color="primary">
        Links
      </Typography>
      <div>
        <div>
          <Link to="/yup">yup</Link>
        </div>
        <div>
          <Link to="/yupNested">yupNested</Link>
        </div>
      </div>
    </Page>
  );
};

export default Top;
