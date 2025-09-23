import React from "react";
import GradualBlur from "../components/UI/react-bits/GradualBlur";
import DecryptedText from "../components/UI/react-bits/DecryptedText";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AnimatedContent from "../components/UI/react-bits/AnimatedContent";
import AOS from "aos";
import "aos/dist/aos.css";

function BasePage() {
  const heroText = ["Hello, Everyone", "Welcome to", "Grizzly bunch!"];
  useEffect(() => {
    AOS.init({ duration: 2000, once:true });
  }, []);

  return (
    <>
      <div className="flex flex-col items-center min-h-screen relative">
        <div className="flex flex-col items-center w-full  relative">
          <div className="bg-[url(/page-img/hero_image.jpg)] bg-cover bg-[position:50%_50%] w-full h-128 text-5xl relative">
            <div className="bg-black/50 w-full h-full flex flex-col gap-5 text-8xl font-bold p-15">
              {heroText.map((e) => (
                <DecryptedText
                  text={e}
                  animateOn="view"
                  speed={50}
                  maxIterations={20}
                />
              ))}
              <div
                className="absolute right-50 top-50 flex flex-col items-center font-semibold"
                data-aos="fade"
              >
                <div className="text-3xl">
                  <h2>Join us now</h2>
                </div>
                <Link to="/login">
                  <button className="text-2xl bg-blue-500 px-3 py-2 rounded-xl shadow-lg font-bold">
                    Login Now
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white w-full h-128 text-5xl flex justify-center items-center">
            <div className="bg-black/30 w-full h-96 p-5 shadow-xl mx-2">
              <AnimatedContent>
                <div className=" text-black flex flex-col gap-10 font-bold">
                  <div className="flex-wrap flex gap-1 ">
                    <h1>
                      Share your stories. <br /> Connect with others.
                    </h1>
                    <h1>
                      Grizzly Bunch — your go-to social blogging platform.
                    </h1>
                  </div>
                  <p className="text-2xl font-normal">
                    Discover, write, and engage with a community that loves
                    ideas as much as you do. <br /> From personal stories, tips,
                    and experiences to trending topics and creative insights,
                    Grizzly Bunch is your space to share thoughts, spark
                    conversations, and connect with like-minded readers and
                    writers. Whether you’re here to read inspiring content,
                    write your own blogs, or interact through comments and
                    likes, every story matters, and every voice is heard.
                  </p>
                </div>
              </AnimatedContent>
            </div>
          </div>

          <div className="bg-white w-full h-128 text-5xl">
            <div className="bg-black/20 w-full h-118 mt-10 text-black p-5">
              <AnimatedContent>
                <h1 className="font-bold">About Grizzly Bunch</h1>
                <p className="text-xl mt-5">
                  Grizzly Bunch isn’t just another blogging platform — it’s a
                  community built around voices, ideas, and experiences. We
                  believe that everyone has a story worth sharing, and this is
                  the place to let yours be heard. <br /> <br /> Whether you’re
                  writing about personal journeys, creative insights, lifestyle
                  tips, or the latest trends, Grizzly Bunch gives you the tools
                  to publish, express, and reach people who care. As a reader,
                  you’ll discover fresh perspectives every day — thoughtful
                  articles, relatable stories, and content that inspires,
                  informs, or entertains. <br />
                  But Grizzly Bunch goes beyond just posting and reading. It’s
                  about interaction and connection. Comment on posts, share your
                  thoughts, and engage in meaningful discussions. Like what
                  resonates with you, and support fellow writers who are putting
                  their ideas out into the world. <br />
                  <br />
                  Here, every voice matters — whether you’re an experienced
                  writer, a casual blogger, or someone who just loves to explore
                  new ideas. Grizzly Bunch is where creativity meets community,
                  and where your stories find their audience. <br />
                  <br />
                  So start exploring, start writing, and most importantly —{" "}
                  <Link>start connecting.</Link> Welcome to Grizzly Bunch.
                </p>
              </AnimatedContent>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 left-0 w-full pointer-events-none z-0">
          <GradualBlur
            target="parent"
            position="bottom"
            height="6rem"
            strength={3}
            divCount={5}
            curve="bezier"
            exponential={true}
            opacity={1}
          />
        </div>
      </div>
    </>
  );
}

export default BasePage;
