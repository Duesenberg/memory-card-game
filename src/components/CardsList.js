import { Button, Grid, Typography } from '@mui/material';
import React from 'react';

export default function CardsList(props) {
  const handleCardClick = (e) => {
    props.playSound();
    props.checkForGameOver(e);
    props.setCardToClicked(e);
  }

  return(
    <Grid 
      container 
      rowSpacing={3}
      columnSpacing={3}
      style={{
        padding: '0',
        margin: '0',
        width: '100%'
      }}
      align="center"
      justify="center">
        {props.cards.map((card) => {
          return(
          <Grid 
            item xs={6} md={3} key={card.id}
            style={{
              margin: '0',
              padding: '15px',
            }}>
              <Button 
                onClick={handleCardClick}
                variant='contained' 
                color='primary'
                className='grid-item'
                style={{
                  width: '200px',
                  height: '200px',
                }}
                id={card.id}>
                <Typography 
                  variant='h3' 
                  fontWeight={700}
                  id={card.id}>
                    {card.content}
                </Typography>
              </Button>
          </Grid>
          )
        })}
    </Grid>
  )
}