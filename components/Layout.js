import React from 'react';
import {
  AppBar,
  CssBaseline,
  Toolbar,
  IconButton,
  Grid,
  InputBase,
  Typography,
} from '@material-ui/core';

export const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            --
          </IconButton>
          <Typography variant="h6" noWrap>
            Material-UI
          </Typography>
          <div>
            <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          Sidebar
        </Grid>
        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
