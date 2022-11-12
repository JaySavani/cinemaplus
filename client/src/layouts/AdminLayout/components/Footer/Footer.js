import React from 'react';
import { Divider, Typography, Link } from '@material-ui/core';
import useStyles from './styles';

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Divider />
      <Typography className={classes.copyright} variant="body1">
        &copy; Porus Tech. 2022
      </Typography>
      <Typography variant="caption">
        Crafted with love |{' '}
        <Link href="#" target="_blank" rel="noopener">
          Porus Tech
        </Link>
      </Typography>
    </div>
  );
}
