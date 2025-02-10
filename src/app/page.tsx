import Image from "next/image";
import ProjectCard from "./components/ProjectCard";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col md:flex-row">
      <div className="md:w-96 mt-0 bg-[#cbd3d4] pt-16 p-10 flex flex-col items-center">
        <div className="md:flex-col  ">
          <Image
            src="/LinkedInPFP.jpeg"
            alt="Matt Lee"
            width="160"
            height="160"
            className="rounded-full"
          />
          <div className="mx-auto w-max">
            <h1 className="text-5xl p-8 text-left">
              Matt <br /> Lee
            </h1>
          </div>
        </div>
        <p className="pl-3">
          {`I build software. I make music. I ponder. I look around a bit.`}
        </p>
        <div className="py-8 px-4 flex">
          {/* <Link href="/links" className="p-2">
            <Image src="/spotify1.png" alt="Music" width="40" height="40" />
          </Link> */}
          <Link href="https://warpcast.com/mattlee" className="p-2">
            <Image src="/3.png" alt="Farcaster" width="40" height="40" />
          </Link>
          <Link href="https://github.com/mattleesounds" className="p-2">
            <Image src="/icons.png" alt="GitHub" width="40" height="40" />
          </Link>
        </div>
      </div>
      <div className="flex-col md:px-16 w-full justify-center p-8">
        <ProjectCard
          type="Project"
          date="February 2024"
          link="https://www.nfeed.xyz/"
          title="Nfeed.xyz"
          description="A web app that allows users to share their music directly in their Farcaster feed as a frame"
        />
        <ProjectCard
          type="Essay"
          date="January 2024"
          link="https://paragraph.xyz/@matt/dollarhug"
          title="$HUG"
          description="A creation coin experiment"
        />
        <ProjectCard
          type="Project"
          date="December 2024"
          link="https://warpcast.com/hughassle.eth/0x855b05fe"
          title="Color Wars Frame"
          description="Color Wars in a Farcaster frame. Must sign in to test frame."
        />
        <ProjectCard
          type="Project"
          date="November 2024"
          link="https://www.colorwars.fun"
          title="Color Wars"
          description="A game where onchain colors are chosen in one on one matchups with live leaderboard tracking"
        />
        <ProjectCard
          type="Project"
          date="In Progress"
          //link="https://testflight.apple.com/join/OkeZWa7l"
          title="Groovtap for IOS"
          description="A rhythm game like no other for your phone. Available on TestFlight now."
        />
        <ProjectCard
          type="Project"
          date="October 2023"
          link="https://www.groovtap.com/"
          title="Groovtap"
          description="An educational rhythm game based on call-and-response, a style common in Jazz improvization"
        />
        <ProjectCard
          type="Essay"
          date="June 2023"
          link="https://paragraph.xyz/@matt/record-business"
          title="On-chain Music and Social Networks: Unlocking the Digitally Native Record Business"
          description="Decentralized open social protocols could be the game that unlocks the potential of on-chain music and revives the record industry."
        />
        <ProjectCard
          type="Project"
          date="In Progress"
          //link="https://www.polp.app/"
          title="POLP"
          description="Proof of Listenership Platform is a music streaming, discovery, and community management service that helps musicians find their superfans. Currently in private beta."
        />
        <ProjectCard
          type="Project"
          date="March 2023"
          link="https://www.aimusicpromo.com/"
          title="AI Music Promo"
          description="Creates promotional materials for music releases with generative AI"
        />
        <ProjectCard
          type="Project"
          date="February 2023"
          link="https://www.colorchords.xyz/"
          title="Color Chords"
          description="Plays a unique chord and timbre based on a randomly generated color."
        />
        <ProjectCard
          type="Essay"
          date="December 2022"
          link="https://paragraph.xyz/@matt/color-chords"
          title="Generating Sound from Color"
          description="How and why I built Color Chords"
        />
        <ProjectCard
          type="Project"
          date="December 2022"
          link="https://buddhasays.vercel.app/"
          title="Buddha Says"
          description="Chat with The Buddha. Find The Middle Path."
        />
        <ProjectCard
          type="Essay"
          date="December 2022"
          link="https://paragraph.xyz/@matt/how-to-build-a-custom-chatgpt-app-to-revive-the-dead-openai-api"
          title="Reviving the Dead with AI"
          description="How I built Buddha Says"
        />
        <ProjectCard
          type="Essay"
          date="November 2022"
          link="https://zippy-frangollo-058533.netlify.app/"
          title="POLP Whitepaper"
          description="The POLP whitepaper. Ideas for the business as of November 2022."
        />
        <ProjectCard
          type="Essay"
          date="May 2022"
          link="https://paragraph.xyz/@matt/proof-of-listenership-protocol"
          title="Proof of Listenership Protocol"
          description="The origin of POLP. It in now a platform not a protocol and many other things about the idea have changed completely, but the mission of helping musicians find their superfans is still the same."
        />
      </div>
    </main>
  );
}
