export function timeAgo(isoString) {
  const time = new Date(isoString);
  const now = new Date();
  const diff = Math.floor((now - time) / 1000);

  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "week", seconds: 604800 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(diff / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
    }
  }
  return "just now";
}

export function truncateText(text, maxLength = 80) {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
}

export function formatViews(viewCount) {
  if (viewCount >= 1e9) {
    return (viewCount / 1e9).toFixed(1).replace(/\.0$/, "") + "B views";
  }
  if (viewCount >= 1e6) {
    return (viewCount / 1e6).toFixed(1).replace(/\.0$/, "") + "M views";
  }
  if (viewCount >= 1e3) {
    return (viewCount / 1e3).toFixed(1).replace(/\.0$/, "") + "K views";
  }
  return viewCount + " views";
}

export function truncateTitle(title, maxLength = 30) {
  if (title.length > maxLength) {
    return title.substring(0, maxLength) + "...";
  }
  return title;
}

export const formatVideoDuration = (duration) => {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

  if (!match) return "00:00";

  const hours = (match[1] || "0H").slice(0, -1);
  const minutes = (match[2] || "0M").slice(0, -1);
  const seconds = (match[3] || "0S").slice(0, -1);

  const formattedTime = [
    hours > 0 ? hours.padStart(2, "0") : null,
    minutes.padStart(2, "0"),
    seconds.padStart(2, "0"),
  ]
    .filter(Boolean)
    .join(":");

  return formattedTime;
};


