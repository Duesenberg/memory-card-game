import { Button, Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material';
import React from 'react';

export default function StartMenu(props) {
  const handleStartClick = () => {
    props.createCardArray();
    props.playSound();
    props.startGame();
  }

  const handleDifficultyClick = (e) => {
    props.setGameDifficulty(e);
    props.playSound();
  }

  return(
    <div className='start-menu'>
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
            >Rules:</Typography>
          <Typography variant='paragraph' color='white'>
            Each card contains a number
          </Typography>
          <Typography variant='paragraph' color='white'>
            Allowed to click on a card only once
          </Typography>
          <Typography variant='paragraph' color='white'>
            Click all cards to win the game
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: 'flex',
            gap: '10px',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Button 
            variant='contained' id='easy' onClick={handleDifficultyClick}>
              Easy</Button>
          <Button 
            variant='contained' id='medium' onClick={handleDifficultyClick}>
              Medium</Button>
          <Button 
            variant='contained' id='hard' onClick={handleDifficultyClick}>
              Hard</Button>
        </CardActions>
        <CardActions
          sx={{
            display: 'flex',
            gap: '10px',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Typography variant='paragraph' color='white'>
            Selected: {props.difficulty}
          </Typography>
          <Button 
            variant='contained' id='start' onClick={handleStartClick}>
              Start</Button>
        </CardActions>
      </Card>
    </div>
  )
}