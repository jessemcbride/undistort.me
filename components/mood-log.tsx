import { useState } from "react";

const Feeling = ({ feeling }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="rounded-full relative hover:shadow-lg group-hover:border group-hover:border-10 group-hover:border-indigo-800 h-10 w-10 flex items-center justify-center bg-gray-200 text-2xl">
        {feeling.icon}
        {feeling.selected ? (
          <div className="absolute top-0 right-0 mr-1 h-4 w-4 my-1 border-2 rounded-full border-white bg-indigo-500 z-2"></div>
        ) : (
          ""
        )}
      </div>
      <span className="font-medium text-gray-800 text-center">
        {feeling.name}
      </span>
    </div>
  );
};
const MoodLog = ({ data, setData }) => {
  const MOODS = [
    {
      name: "Joy",
      feelings: [
        {
          name: "Happy",
          icon: "😃",
          selected: false,
        },
        {
          name: "Excited",
          icon: "🤪",
          selected: false,
        },
        {
          name: "Hopeful",
          icon: "🙏",
          selected: false,
        },
        {
          name: "Content",
          icon: "😊",
          selected: false,
        },
        {
          name: "Elated",
          icon: "😂",
          selected: false,
        },
      ],
    },
    {
      name: "Surprise",
      feelings: [
        {
          name: "Moved",
          icon: "😭",
          selected: false,
        },
        {
          name: "Stunned",
          icon: "😳",
          selected: false,
        },
        {
          name: "Confused",
          icon: "😕",
          selected: false,
        },
        {
          name: "Amazed",
          icon: "😮",
          selected: false,
        },
      ],
    },
    {
      name: "Sadness",
      feelings: [
        {
          name: "Sad",
          icon: "🙁",
          selected: false,
        },
        {
          name: "Disappointed",
          icon: "😞",
          selected: false,
        },
        {
          name: "Hurt",
          icon: "🤕",
          selected: false,
        },
        {
          name: "Grief",
          icon: "💔",
          selected: false,
        },
      ],
    },
  ];

  const [moods, setMoods] = useState(MOODS);

  const toggleFeeling = (feeling) => {
    feeling.selected = !feeling.selected;

    const newMoods = moods.slice();
    newMoods.map((mood) => mood.feelings.map((feeling) => feeling));
    setMoods(newMoods);

    setData({
      feelings: newMoods.flatMap((mood) =>
        mood.feelings.filter((feeling) => feeling.selected)
      ),
    });
  };

  return (
    <div className="space-y-8">
      {moods.map((mood) => (
        <div className="flex flex-col space-y-3">
          <h3 className="text-lg font-bold text-gray-800">{mood.name}</h3>
          <div className="flex flex-wrap space-x-4 items-center overflow-x-auto">
            {mood.feelings.map((feeling) => (
              <button
                className="focus:outline-none"
                onClick={(e) => toggleFeeling(feeling)}
              >
                <Feeling feeling={feeling} />
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoodLog;
