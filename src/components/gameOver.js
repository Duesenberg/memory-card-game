import { Button, Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material';
import React from 'react';

export default function GameOver(props) {
  const restartTheGame = () => {
    props.playSound()
    setTimeout(window.location.reload.bind(window.location), 250)
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
            >Game Over</Typography>
        </CardContent>
        <CardActions
          sx={{
            display: 'flex',
            gap: '10px',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Button 
            variant='contained' id='restart' onClick={restartTheGame}>
              Play Again</Button>
        </CardActions>
      </Card>
    </div>
  )
}