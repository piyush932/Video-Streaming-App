export const parseVideos = (items) => {
    return items.map((item) => ({
        videoId: item.id,
        videoTitle: item.snippet.title,
        videoDescription: item.snippet.description,
        videoThumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url,
        videoDuration: item.contentDetails.duration,
        videoViews: item.statistics.viewCount,
        videoLikes: item.statistics.likeCount,
        videoAge: item.snippet.publishedAt,
        channelInfo: {
            id: item.snippet.channelId,
            name: item.snippet.channelTitle,
        }
    }));
};

export const parseComments = (items) => {
    return items.map((comment) => ({
        commentId: comment.id,
        authorChannelId: comment.snippet.topLevelComment.snippet.authorChannelId.value,
        authorProfile: comment.snippet.topLevelComment.snippet.authorProfileImageUrl,
        authorName: comment.snippet.topLevelComment.snippet.authorDisplayName,
        commentText: comment.snippet.topLevelComment.snippet.textOriginal,
        commentLikes: comment.snippet.topLevelComment.snippet.likeCount,
        commentRepliesCount: comment.snippet.totalReplyCount
    }));
};

export const parseReplies = (items) => {
    return items.map((item) => ({
        commentId: item.id,
        authorChannelId: item.snippet.authorChannelId.value,
        authorProfile: item.snippet.authorProfileImageUrl,
        authorName: item.snippet.authorDisplayName,
        commentText: item.snippet.textOriginal,
        commentLikes: item.snippet.likeCount,
    }));
};

