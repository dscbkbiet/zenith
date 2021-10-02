import Image from "next/dist/client/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function SpeakerCard({ image, name, ilink, tlink, llink }) {
  return (
    <section className="h-60 w-52 bg-[#321051] flex flex-col items-center justify-center border-2 border-[#42255D] mb-10 rounded-xl text-gray-200">
      {/* Image */}
      <div className="flex justify-center">
        <Image
          src={"/my-picture-1.jpg"}
          alt="ramakrishna"
          height={100}
          width={100}
          className="mt-2 rounded-xl"
        />
      </div>
      {/* Name and About */}
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-semibold">Ramakrishna</h1>
      </div>
      {/* socials */}
      <section className="flex items-center">
        {/* <div>
          <a href={ilink}>
            <InstagramIcon />
          </a>
        </div> */}
        <div>
          <a href={tlink}>
            <TwitterIcon />
          </a>
        </div>
        <div>
          <a href={llink}>
            <LinkedInIcon />
          </a>
        </div>
      </section>
    </section>
  );
}

export default SpeakerCard;
