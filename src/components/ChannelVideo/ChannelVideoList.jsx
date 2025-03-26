import React from 'react';
import ChannelVideoCard from './ChannelVideoCard';
import './ChannelVideoList.css';

function ChannelVideoList({ channelVideos }) {
    return (
        <div className="channel-video-list">
            {channelVideos &&
                channelVideos.map((item, ind) => (
                    <ChannelVideoCard key={ind} item={item} />
                ))
            }
        </div>
    );
}

export default ChannelVideoList;
