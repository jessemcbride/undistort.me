import getConfig from "next/config";
import router from "next/router";
import Hero from "../components/hero";
import Layout from "../components/layout";
import CognitiveDistortionCarousel from "../components/carousel";
import Link from "next/link";
const { publicRuntimeConfig } = getConfig();
const { title } = publicRuntimeConfig.siteMetaData;

const Home = ({ data, setData }) => {
  return (
    <div className="min-h-screen bg-gray-100 antialiased">
      <div className="container mx-auto max-w-4xl p-6">
        <header className="mb-14">
          <h1 className="font-bold text-xl text-gray-800 mb-8">undistort.me</h1>
          <div className="flex flex-col sm:flex-row items-center">
            <div className="flex flex-col mb-8">
              <h2 className="text-3xl font-bold text-gray-800">
                Change the way you feel.
              </h2>
              <p className="text-xl font-medium text-gray-800">
                Take control of your moods with powerful cognitive behavioral
                therapy exercises—right from your smart phone.
              </p>
              <div>
                <Link href="/exercises/MoodLog">
                  <a className="text-base bg-indigo-500 rounded-md shadow-base inline-block px-4 py-2 font-semibold text-white">
                    Try the demo
                  </a>
                </Link>
              </div>
            </div>
            <Hero></Hero>
          </div>
        </header>
        <main className="space-y-8">
          <div>
            <h3 className="text-3xl font-bold text-gray-800">
              What is cognitive behavioral therapy?
            </h3>
            <div className="text-lg text-gray-800 pt-2">
              <p>
                Cognitive behavioral therapy (or CBT) is a safe, easy, and
                effective form of psychotherapy that focuses on the
                relationships between thoughts, emotions, and behaviors.
              </p>
              <p>
                You don’t need a diagnosis to try CBT. It can still help you
                manage difficult emotions like anger, sadness, and anxiety.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">
              Your thoughts create your emotions.
            </h3>
            <div className="text-lg text-gray-800 pt-2">
              <p>
                The main insight of CBT is this:{" "}
                <strong className="font-bold">
                  your thoughts, not your circumstances, create all of your
                  feelings.
                </strong>
              </p>
              <p>
                For example, as you read this, if you’re thinking CBT might work
                for you, you might feel excited or optimistic. Or, if you’re
                thinking about techniques you've tried that haven't worked, you
                might be feeling discouraged or hopeless.
              </p>
              <p>
                Thoughts like these create your emotions, not the text itself.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">
              But your thoughts aren't always{" "}
              <span className="italic">true.</span>
            </h3>
            <div className="text-lg text-gray-800 pt-2">
              <p>
                Sometimes our thoughts about a situation don’t line up with
                reality. If we aren’t careful, these mixed up thoughts—or
                <strong className="font-bold"> cognitive distortions</strong>
                —can pass through our minds and start influencing how we feel.
              </p>
              <p>
                The worse we feel, the more likely it is that our thought is
                distorted in some way. Over the years, cognitive behavioral
                psychologists have identified all sorts of them:
              </p>
            </div>
            <div className="flex items-center justify-center py-12">
              <CognitiveDistortionCarousel></CognitiveDistortionCarousel>
            </div>
            <div className="text-lg text-gray-800 pt-2">
              <p>
                Cognitive distortions are totally natural. You have them, we
                have them, and the calmest person you know has them, too.
              </p>
              <p>
                The trick is to notice when they pop up, label them
                appropriately, and then reframe them with more reasonable
                thoughts. If you can get the hang of that, you’ll notice a
                radical improvement in your mood.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-800">
              Start feeling better today.{" "}
            </h3>
            <div className="text-lg text-gray-800 pt-2">
              <p>
                <strong className="font-bold">undistort.me</strong> makes it
                easy to start practicing cognitive behavioral therapy. Equipped
                with a library of exercises, a built-in mood tracker, goal
                setting, and self-assessments, we’re here to help you take
                charge of your moods.
              </p>
            </div>
          </div>
          <div className="bg-gray-200 text-center p-6 rounded flex flex-col items-center">
            <div className="text-2xl text-gray-800 font-bold">
              Sign up for updates
            </div>
            <form className="p-3 flex items-center max-w-full">
              <div>
                <input
                  type="email"
                  placeholder="you@youremail.com"
                  className="bg-gray-100 px-2 py-2 rounded-md rounded-r-none font-medium"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-indigo-500 rounded-md shadow-base inline-block rounded-l-none px-4 py-2 font-semibold text-white"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
          <div className="flex items-center justify-end px-2">
            <a href="#" className="text-lg font-medium text-gray-800">
              <div className="flex items-center space-x-1">
                <span>Try the demo now</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className="h-5 text-gray-500"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </a>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
