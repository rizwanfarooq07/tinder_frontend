import {
  CloseOutlined,
  Favorite,
  FlashOn,
  Replay,
  Star,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import "./SwipeButtons.css";

const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__repeat">
        <Replay fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__left">
        <CloseOutlined fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__star">
        <Star fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__right">
        <Favorite fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__lightning">
        <FlashOn fontSize="large" />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
