import React from 'react';
import { Link } from 'react-router-dom';
import './ChannelVideoCard.css';
import { truncateTitle,formatViews,timeAgo,formatVideoDuration } from '../../utils/functions';

function ChannelVideoCard({ item }) {
    return (
        <Link to={`/watch/?v=${item.videoId}`} className="channel-video-card">
            <div className='channel-video-card-container'>
                <div className="channel-thumbnail-container">
                    <div className="channel-video-duration">{formatVideoDuration(item.videoDuration)}</div>
                    <img src={item.videoThumbnail} className="channel-video-thumbnail" alt="Video Thumbnail" />
                </div>
                <div className="channel-video-info">
                    <h5 className='channel-video-title'>{truncateTitle(item.videoTitle)}</h5>
                    <div className="channel-video-meta">
                        <p>{formatViews(item.videoViews)}</p>
                        <p>{timeAgo(item.videoAge)}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ChannelVideoCard;
