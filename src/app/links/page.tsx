import React from "react";
import LinkButton from "../components/LinkButton";

const page = () => {
  return (
    <div className="p-0 text-center h-screen flex flex-col ">
      <h1 className="text-3xl mb-2 mt-3">Links Du Matt</h1>
      <h2 className="text-xl">{`Listen to "All I Can Say"`}</h2>
      <div className="flex flex-col m-2 mb-0">
        <div className="mt-0 mb-8">
          <LinkButton
            href="https://open.spotify.com/album/63cBEWxr6zJGRtlfA265nV?si=A2iwGJk7TZaZcDK1KE8qOQ"
            label="Spotify"
          />
        </div>
        <div className="mt-0 mb-8">
          <LinkButton
            href="https://music.apple.com/us/album/all-i-can-say-single/1717985624"
            label="Apple Music"
          />
        </div>
        {/*  <div className="mb-6">
          <LinkButton href="https://youtu.be/DbckiA089bE" label="Youtube" />
        </div> */}
      </div>
      <h2 className="mb-0 text-xl">Website</h2>
      <div className="mb-4 mt-0 p-2">
        <LinkButton href="https://www.mattlee.world/" label="mattlee.world" />
      </div>

      <h2 className=" mb-0 p-2 text-xl">Blog</h2>
      <div className="mt-0 mb-6">
        <LinkButton
          href="https://paragraph.xyz/@matt"
          label="Le Blog Du Matt"
        />
      </div>
    </div>
  );
};

export default page;
