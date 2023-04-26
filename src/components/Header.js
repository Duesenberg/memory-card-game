import React from "react";
import { Button, Container, Icon, Typography } from '@mui/material';
import PsychologyAltOutlinedIcon from '@mui/icons-material/PsychologyAltOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import VolumeOffOutlinedIcon from '@mui/icons-material/VolumeOffOutlined';


export default function Header(props) {
  const handleAudioClick = () => {
    props.toggleSound();
    props.playSound();
  }

  return(
    <div className="header">
      <div className="header-left">
          <Typography 
            variant="h3" color="white" fontStyle="italic" fontWeight="700">
              Memory Card Game
          </Typography>
          <Button 
            variant="contained" color="primary" 
            href="https://github.com/Duesenberg" target="_blank"
            onClick={props.playSound}
            sx={{height: '100%'}} >
              <PsychologyAltOutlinedIcon 
                fontSize="large" />
          </Button>
      </div>

      <div className="header-right">
        <div className="sound">
          <Typography variant="h5" color="white">Sound:</Typography>
          {props.sound === false ?
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handleAudioClick}
              sx={{flex: 1}}>
                <VolumeOffOutlinedIcon fontSize="large" />
            </Button> :
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handleAudioClick}
              sx={{flex: 1}}>
                <VolumeUpOutlinedIcon fontSize="large" />
            </Button>
          }
        </div>
        <div className="score">
          <Typography 
            variant="h5" 
            color="white">
              Score:
          </Typography>
          <Typography 
            variant="h6" 
            color="white" 
            textAlign="center"
            sx={{
              display: 'flex',
              alignItems: 'center',
              flex: 1
            }}>
              {props.score}
          </Typography>
        </div>
      </div>
    </div>
  )
}