import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FlightTakeoff from '@material-ui/icons/FlightTakeoff'

import styled from "styled-components";

function ListTrips(props) {
  return(
    <List>
      <ListItem>
        <ListItemIcon>
          <FlightTakeoff/>
        </ListItemIcon>
        <ListItemText>
        </ListItemText>
      </ListItem>
    </List>
  )
}

export default ListTrips;