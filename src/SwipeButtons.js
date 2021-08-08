import React from 'react';
import './SwipeButtons.css';
import ReplayRoundedIcon from '@material-ui/icons/ReplayRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import FlashOnRoundedIcon from '@material-ui/icons/FlashOnRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import { IconButton } from '@material-ui/core';

export default function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton>
                <ReplayRoundedIcon />
            </IconButton>
            <IconButton>
                <CloseRoundedIcon />
            </IconButton>
            <IconButton>
                <StarRoundedIcon />
            </IconButton>
            <IconButton>
                <FavoriteRoundedIcon />
            </IconButton>
            <IconButton>
                <FlashOnRoundedIcon />
            </IconButton>
        </div>
    )
}
