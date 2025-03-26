import { getChannelInfo } from "./api";
import { parseVideos } from "./parseData";

export const fetchVideosWithChannels = async (items) => {
  const videoData = parseVideos(items);

  const channelIds = videoData.map((video) => video.channelInfo.id).join(",");

  const channelResponse = await getChannelInfo(channelIds);

  const channelData = {};

  channelResponse.forEach((channel) => {
    channelData[channel.id] = {
      image: channel.snippet.thumbnails.default.url,
      subCount: channel.statistics.subscriberCount,
    };
  });

  const videos = videoData.map((video) => ({
    ...video,
    channelInfo: {
      ...video.channelInfo,
      image: channelData[video.channelInfo.id].image,
      subCount: channelData[video.channelInfo.id].subCount,
    },
  }));

  return videos;
};
