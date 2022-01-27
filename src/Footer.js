import React from 'react';

import {
  Container,
  Typography,
  Link
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

function Copyright() {
  
  return (
  
    <Typography>
    
      {"Copyright "}
    
      <Link href="https://crari.net">
          Crari
      </Link>
    
      {" " + new Date().getFullYear()}
    
    </Typography>
    
  );
}

const useStyles = makeStyles((theme) => ({
  
  footer: {
    padding: theme.spacing(6) 
  } 
  
}));

export default function Footer() {
  
  const classes = useStyles();
  
  return (
  
    <footer className={classes.footer}>
    
      <Container>
    
        <Typography variant="h6">
            Crari International
        </Typography>
    
        <Typography variant="subtitle1" color="textSecondary">
          Please join us on our social media channels
        </Typography>
    
        <Copyright />
    
      </Container> 
    
    </footer>
    
  );
  
}