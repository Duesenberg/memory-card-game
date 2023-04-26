import { Button, Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material';
import React from 'react';

export default function GameWon(props) {
  const handleClick = () => {
    props.playSound();
    props.restartGame();
  }
  
  return(
    <div className='game-over'>
      <Card sx={{
        padding: "25px 60px",
        background: "#2196f3",
      }}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <Typography 
            variant='h3' 
            color='white'
            >You Won!</Typography>
        </CardContent>
        <CardActions
          sx={{
            display: 'flex',
            gap: '10px',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Button 
            variant='contained' id='restart' onClick={handleClick}>
              Play Again</Button>
        </CardActions>
      </Card>
    </div>
  )
}