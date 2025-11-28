import VideoCard from "./VideoCard";
import videos from "@/data/videos.json";

const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 px-6 py-6">
      {videos.map((video) => (
        <VideoCard key={video.id} {...video} />
      ))}
    </div>
  );
};

export default VideoGrid;
