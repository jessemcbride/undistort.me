import getConfig from "next/config";
import router from "next/router";
import Layout from "../components/layout";

const { publicRuntimeConfig } = getConfig();
const { title } = publicRuntimeConfig.siteMetaData;

const Home = ({ data, setData }) => {
  const advance = () => {
    router.push("/catch-thoughts");
  };
  return (
    <Layout>
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-gray-900">
          What's going through my mind right now?
        </h1>
        <p className="text-lg text-gray-700">
          The{" "}
          <strong className="text-semibold text-gray-800">
            Thought Record
          </strong>{" "}
          is a powerful technique that helps you catch your automatic thoughts,
          recognize the feelings that go along with them, and work on balancing
          out your thinking towards modifying your mood.
        </p>
      </div>
      <div className="overflow-y-scroll max-h-100">
        <div className="my-6">
          <textarea
            placeholder="What led to the unpleasant emotion? What thoughts or distressing physical sensations did you have?"
            name="thoughts"
            cols={30}
            rows={10}
            onChange={(event) => setData({ thoughts: event.target.value })}
            className="w-full max-h-64 p-2 overflow-y-scroll text-lg text-gray-900 border-0"
          >
            {data.thoughts}
          </textarea>
        </div>
        <button
          className="px-3 py-2 font-semibold text-gray-900 bg-gray-200"
          onClick={advance}
        >
          Catch thoughts
        </button>
      </div>
    </Layout>
  );
};

export default Home;
