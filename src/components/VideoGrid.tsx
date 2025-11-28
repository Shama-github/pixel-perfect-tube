import VideoCard from "./VideoCard";
import videos from "@/data/videos.json";
import { useSearch } from "@/hooks/use-search";

const VideoGrid = () => {
  const { query } = useSearch();

  const normalizedQuery = query.trim().toLowerCase();

  const filteredVideos = normalizedQuery
    ? videos.filter((video) => {
        const title = (video.title ?? "").toLowerCase();
        const channel = (video.channel ?? "").toLowerCase();
        return (
          title.includes(normalizedQuery) || channel.includes(normalizedQuery)
        );
      })
    : videos;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 px-6 py-6">
      {filteredVideos.map((video) => (
        <VideoCard key={video.id} {...video} />
      ))}
    </div>
  );
};

export default VideoGrid;
