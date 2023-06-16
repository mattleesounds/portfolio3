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
          Building POLP(Proof of Listenership Platform). Exploring web3 and
          music tech, contributing to open source projects, and getting better
          all the time.
        </p>
        <div className="py-8 px-4 flex">
          <Link href="https://twitter.com/matt_p_lee" className="p-2">
            <Image src="/2.png" alt="Twitter" width="40" height="40" />
          </Link>
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
          type="Essay"
          date="June 2023"
          link="https://paragraph.xyz/@matt/record-business"
          title="On-chain Music and Social Networks: Unlocking the Digitally Native Record Business"
          description="Decentralized open social protocols could be the game that unlocks the potential of on-chain music and revives the record industry."
        />
        <ProjectCard
          type="Project"
          date="In Progress"
          link="https://www.polp.app/"
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
