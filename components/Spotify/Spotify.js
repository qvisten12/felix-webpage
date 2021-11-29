import React from "react";
import useSWR from "swr";
import { SiSpotify } from "react-icons/si";

const Spotify = () => {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/spotify", fetcher);
  return (
    <>
      <div className="flex items-center justify-center w-full ">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={
            data?.isPlaying
              ? data.songUrl
              : "https://open.spotify.com/user/6xoyy47wge2t20pajw9d5awj7"
          }
          className="relative flex items-center mt-3 md:mt-0 p-2 space-x-4 transition-shadow border rounded-md hover:shadow-md w-80 md:w-720"
        >
          <div className="w-16 text-gray-400 hover:text-gray-600">
            {data?.isPlaying ? (
              <img
                className="w-16 shadow-sm"
                src={data?.albumImageUrl}
                alt={data?.album}
              />
            ) : (
              <SiSpotify size={30} />
            )}
          </div>

          <div className="flex-1">
            {data?.isPlaying ? <p className="font-bold">Now Playing:</p> : ""}
            <p className="font-semibold text-sm">
              {data?.isPlaying ? data.title : "Not Listening"}
            </p>
            <div className="flex justify-between">
              <p className="text-xs font-dark">
                {data?.isPlaying ? data.artist : "Spotify"}
              </p>
              {data?.isPlaying ? (
                <div className="self-end">
                  <SiSpotify size={20} color={"#1ED760"} />
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default Spotify;
