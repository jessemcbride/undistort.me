import Layout from "../../../components/layout";
import Link from "next/link";

import SelectionHighlighter from "react-highlight-selection";

const CatchThoughts = ({ data }) => {
  return (
    <Layout>
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-gray-800">
          Unpacking thoughts
        </h1>
        <p className="text-xl text-gray-800">
          Try highlighting your thoughts to split them up. It's easier to think
          about them one at a time rather than all at once.
        </p>
      </div>
      <div className="overflow-y-scroll max-h-100">
        <div className="my-6">
          <div className="w-full p-2 text-lg h-64 text-gray-900 bg-white border-0">
            {typeof document !== "undefined" ? (
              <SelectionHighlighter
                text={data.thoughts}
                customClass={"bg-purple-300"}
              ></SelectionHighlighter>
            ) : null}
          </div>
        </div>
        <div className="space-x-3">
          <button className="px-3 py-2 font-semibold text-gray-900 bg-gray-200">
            Unpack thoughts
          </button>
          <Link href="/">
            <button className="px-3 py-2 font-semibold text-gray-900 bg-gray-200">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="pr-1 h-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                Start over
              </div>
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default CatchThoughts;
