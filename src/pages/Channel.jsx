// Channel.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useChannel } from "../Hooks/useChannel";
import { AiOutlineClose } from "react-icons/ai";
import ChannelVideoList from "../components/ChannelVideo/ChannelVideoList";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../components/Loading/Loading";
import "../CSS/Channel.css";
import { formatViews } from "../utils/functions";

function Channel() {
  const { channelId } = useParams();
  const {
    category,
    setCategory,
    channelInfo,
    fetchChannelInfo,
    channelVideoList,
    channelPlayLists,
    fetchChanneldata,
    hasMore,
  } = useChannel();
  const [showDesc, setShowDesc] = useState(false);

  const fetchMoreChanneldata = () => {
    fetchChanneldata(channelId, channelVideoList?.nextPageToken);
  };

  useEffect(() => {
    fetchChannelInfo(channelId);
    fetchChanneldata(channelId);
  }, [category, channelId]);

  return (
    <div className="channel-container">
      {showDesc && channelInfo?.description && (
        <div className="description-modal">
          <div className="modal-content">
            <AiOutlineClose
              onClick={() => setShowDesc(false)}
              className="close-icon"
            />
            <p>{channelInfo?.description}</p>
          </div>
        </div>
      )}

      <InfiniteScroll
        next={fetchMoreChanneldata}
        hasMore={hasMore}
        dataLength={channelVideoList?.videos.length || 0}
        loader={<Loading />}
      >
        <div className="channel-wrapper">
          <div className="channel-header">
            <img
              src={channelInfo?.thumbnail}
              className="channel-thumbnail"
              alt=""
            />
            <div className="channel-details">
              <h5>{channelInfo?.title}</h5>
              <div className="channel-stats">
                <h6>{channelInfo?.customUrl}</h6>
                <h6>{formatViews(channelInfo?.subCount)} Subscribers</h6>
                <h6>{channelInfo?.videoCount} Videos</h6>
              </div>
              {channelInfo?.description && (
                <div>
                  <p className="short-description">
                    {channelInfo?.description}
                  </p>
                  <button
                    onClick={() => setShowDesc(true)}
                    className="more-btn"
                  >
                    more
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="category-tabs">
            <button>Videos</button>
          </div>

          <ChannelVideoList channelVideos={channelVideoList?.videos || []} />
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default Channel;
