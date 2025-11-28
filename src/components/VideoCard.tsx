interface VideoCardProps {
  title: string;
  channel: string;
  views: string;
  timestamp: string;
  duration: string;
  thumbnail: string;
  channelAvatar: string;
}

const VideoCard = ({
  title,
  channel,
  views,
  timestamp,
  duration,
  thumbnail,
  channelAvatar,
}: VideoCardProps) => {
  return (
    <div className="flex flex-col gap-3 cursor-pointer group">
      <div className="relative aspect-video rounded-xl overflow-hidden bg-muted">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
        <span className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded font-medium">
          {duration}
        </span>
      </div>

      <div className="flex gap-3">
        <img
          src={channelAvatar}
          alt={channel}
          className="w-9 h-9 rounded-full bg-muted flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-sm line-clamp-2 mb-1 group-hover:text-foreground/80">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">{channel}</p>
          <p className="text-sm text-muted-foreground">
            {views} views • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
