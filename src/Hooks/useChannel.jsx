import { useState } from "react";
import { getActivities, getChannelInfo, getActvitiesVideos } from "../utils/api";
import { fetchVideosWithChannels } from "../utils/videoDetailsHelper";

export const useChannel = () => {
    const [channelInfo, setChannelInfo] = useState(null);
    const [channelVideoList, setChannelVideoList] = useState({ videos: [], nextPageToken: null });
    const [hasMore, setHasMore] = useState(true);

    const fetchChannelInfo = async (channelId) => {
        const channelInfoResponse = await getChannelInfo(channelId);
        const channelInfoData = {
            id: channelInfoResponse[0].id,
            thumbnail: channelInfoResponse[0].snippet.thumbnails.high.url,
            title: channelInfoResponse[0].snippet.title,
            customUrl: channelInfoResponse[0].snippet.customUrl,
            description: channelInfoResponse[0].snippet.description,
            subCount: channelInfoResponse[0].statistics.subscriberCount,
            videoCount: channelInfoResponse[0].statistics.videoCount,
        };
        setChannelInfo(channelInfoData);
    };

    const fetchChanneldata = async (channelId, pageToken) => {
        const channelVideosResponse = await getActivities(channelId, pageToken);
        const videoIds = channelVideosResponse.items.map(item => 
            item.contentDetails.upload ? item.contentDetails.upload.videoId : item.contentDetails.playlistItem.resourceId.videoId
        );
        const vidResponse = await getActvitiesVideos(videoIds);
        const videosArray = await fetchVideosWithChannels(vidResponse.items);
        setChannelVideoList(prev => ({
            videos: [...prev.videos, ...videosArray],
            nextPageToken: channelVideosResponse.nextPageToken
        }));
        setHasMore(Boolean(channelVideosResponse.nextPageToken));
    };

    return { channelInfo, fetchChannelInfo, channelVideoList, fetchChanneldata, hasMore };
};
