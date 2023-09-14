import React from "react";
import LinkButton from "../components/LinkButton";

const page = () => {
  return (
    <div className="p-0 text-center h-screen flex flex-col ">
      <h1 className="text-3xl mb-2 mt-3">Links Du Matt</h1>
      <h2 className="text-xl">{`Listen to "Too Loose"`}</h2>
      <div className="flex flex-col m-2 mb-0">
        <div className="mt-0 mb-8">
          <LinkButton
            href="https://open.spotify.com/album/7JeBNnFbiFkSrxSAf4BKeV"
            label="Spotify"
          />
        </div>
        <div className="mt-0 mb-8">
          <LinkButton
            href="https://music.apple.com/us/album/too-loose-single/1706991531"
            label="Apple Music"
          />
        </div>
        <div className="mb-6">
          <LinkButton href="https://youtu.be/DbckiA089bE" label="Youtube" />
        </div>
      </div>
      <h2 className=" mb-0 p-2 text-xl">My blog</h2>
      <div className="mt-0 mb-6">
        <LinkButton
          href="https://paragraph.xyz/@matt"
          label="Le Blog Du Matt"
        />
      </div>
      <h2 className="mb-0 text-xl">My personal website</h2>
      <div className="mb-4 mt-0 p-2">
        <LinkButton href="https://www.mattlee.world/" label="mattlee.world" />
      </div>
    </div>
  );
};

export default page;
