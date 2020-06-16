import React from 'react';
import styled from 'styled-components';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const CardWrapper = styled(Card)`
  min-height: 300px;
`


function Day(props) {
  return (
    <CardWrapper>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {props.day}
        </Typography>
        <Typography component="ul">
          {props.tasks.map((data, index) => {
            if (data.day === props.day) {
            return <li key={index}>{data.text}</li>
            } else {
              return false
            }
          })}
        </Typography>
      </CardContent>
    </CardWrapper>
  );
}

export default Day;