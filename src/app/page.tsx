"use client";
import Tables from "@/components/Tables";
import { Button, Card, Input } from "@nextui-org/react";
import axios from "axios";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

export default function Home() {
  const [inputValue, setInputValue] = useState<string>("");
  const [shortenLink, setShortenLink] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [analytics, setAnalytics] = useState<TablesProps[]>([]);

  console.log(window.location.href);

  const handleSubmit = async () => {
    console.log(inputValue);

    if (inputValue.length) {
      try {
        setisLoading(true);
        const { data } = await axios.post(`${window.location.href}api/url`, {
          url: inputValue,
        });

        // console.log(data);

        setShortenLink(`${window.location.href}${data.shortId}`);
        fetchAnalytics();
        setisLoading(false);
      } catch (err) {
        // setError(true);
        setisLoading(false);
      }
    }
  };

  const fetchAnalytics = async () => {
    const { data } = await axios(`${window.location.href}api/analytics`);
    setAnalytics(data);
    console.log("ana", data);
  };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  return (
    <section className="w-full mt-10 px-10 flex  mx-auto ">
      <Card className="w-full max-w-md h-fit flex flex-col gap-7 p-4 ">
        {/* <h1>UrlShortner 123</h1> */}
        <p className="text-lg font-semibold">
          Put your favorite Link🔗 and we convert🚀 your link into short link🖇️.
        </p>
        <section className="flex gap-6 flex-col items-center ">
          <Input
            type="string"
            label="Link"
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
            placeholder="Enter your favorite Link"
          />
          <Button
            onClick={handleSubmit}
            isLoading={isLoading}
            color="primary"
            className="w-full text-lg font-semibold"
            size="lg"
          >
            Get the Link 🚀
          </Button>
        </section>

        <div className=" w-full h-12  rounded-lg flex items-center justify-between">
          <div className="w-[80%] h-full border-2 border-[#f7c00ae8]  rounded-3xl  m-0">
            <p className="p-2">{shortenLink}</p>
          </div>
          <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
            <Button
              className={`border-2 rounded-3xl p-2 ml-1 text-center bg-[#f7c00ae8] cursor-pointer font-bold ${
                copied ? "bg-white text-[#f7c00ae8]" : ""
              }`}
            >
              Copy
            </Button>
          </CopyToClipboard>
        </div>
      </Card>

      <Card className="w-full max-w-4xl mx-auto flex flex-col items-center gap-5 p-3">
        <h2 className="text-4xl font-bold">Previous short Links</h2>
        <Tables analytics={analytics} />
      </Card>
    </section>
  );
}
