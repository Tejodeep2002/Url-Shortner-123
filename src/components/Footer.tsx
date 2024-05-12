import { Link } from "@nextui-org/react";
import { Github } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <section className=" absolute bottom-7  flex justify-center w-full ">
      <div className="w-fit flex flex-col gap-3 ">
        <section className="w-full flex justify-center gap-5">
          <Link
            href="https://github.com/Tejodeep2002"
            className=" w-10 h-10 rounded-2xl flex justify-center items-center  bg-white"
          >
            <Github className="text-black" />
          </Link>
          <Link
            href="https://twitter.com/ttezomon_dev"
            className=" w-10 h-10 rounded-2xl  flex justify-center items-center  bg-black"
          >
            <BsTwitterX className="text-white text-lg" />
          </Link>
         
        </section>
        <p className="text-white text-lg font-semibold">
          Created by Tejodeep Mitra Roy
        </p>
      </div>
    </section>
  );
};

export default Footer;
