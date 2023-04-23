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
            onClick={props.playSound}>
              <PsychologyAltOutlinedIcon fontSize="large" />
          </Button>
      </div>

      <div className="header-right">
        <div className="sound">
          <Typography variant="h5" color="white">Sound:</Typography>
          {props.sound === false ?
            <Button 
              variant="contained" 
              color="primary" 
              onClick={props.toggleSound}>
                <VolumeOffOutlinedIcon fontSize="large" />
            </Button> :
            <Button 
              variant="contained" 
              color="primary" 
              onClick={props.toggleSound}>
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
            textAlign="center">
              {props.score}
          </Typography>
        </div>
      </div>
    </div>
  )
}