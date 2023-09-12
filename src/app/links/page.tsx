import React from "react";
import LinkButton from "../components/LinkButton";

const page = () => {
  return (
    <div className="p-4 text-center h-screen flex flex-col ">
      <h1 className="text-3xl mb-8 mt-8">Links Du Matt</h1>
      <h2 className="text-xl">{`Listen to "Too Loose"`}</h2>
      <div className="flex flex-col flex-grow m-2 mb-0">
        <div className="mt-0 mb-8">
          <LinkButton href="/link1" label="Spotify" />
        </div>
        <div className="mt-0 mb-8">
          <LinkButton href="/link2" label="Apple Music" />
        </div>
        <div className="mb-8">
          <LinkButton href="/link3" label="Youtube" />
        </div>
      </div>
      <h2 className=" mb-0 p-2 text-xl">My blog</h2>
      <div className="mt-0 mb-16">
        <LinkButton
          href="https://paragraph.xyz/@matt"
          label="Le Blog Du Matt"
        />
      </div>
      <h2 className="mb-0 text-xl">My personal website</h2>
      <div className="mb-32 mt-0 p-2">
        <LinkButton href="https://www.mattlee.world/" label="mattlee.world" />
      </div>
    </div>
  );
};

export default page;
