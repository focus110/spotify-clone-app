import React from "react";
import "./Footer.css";
import ShuffleOutlinedIcon from "@mui/icons-material/ShuffleOutlined";
import SkipPreviousOutlinedIcon from "@mui/icons-material/SkipPreviousOutlined";
import SkipNextOutlinedIcon from "@mui/icons-material/SkipNextOutlined";
import PlayCircleFilledOutlinedIcon from "@mui/icons-material/PlayCircleFilledOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import PlaylistAddOutlinedIcon from "@mui/icons-material/PlaylistAddOutlined";
import VolumeDownOutlinedIcon from "@mui/icons-material/VolumeDownOutlined";
import { Grid, Slider } from "@mui/material";
import album from "./album.jpeg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <img className="footer__albumLogo" src={album} alt="" />
        <div className="footer__songInfo">
          <h4>Yeah</h4>
          <p>Yeah</p>
        </div>
      </div>

      <div className="footer__center">
        <ShuffleOutlinedIcon className="footer__green" />
        <SkipPreviousOutlinedIcon className="footer__icon" />
        <PlayCircleFilledOutlinedIcon
          fontSize="large"
          className="footer__icon"
        />
        <SkipNextOutlinedIcon className="footer__icon" />
        <RepeatOutlinedIcon className="footer__green" />
      </div>

      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistAddOutlinedIcon />
          </Grid>
          <Grid item>
            <VolumeDownOutlinedIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
