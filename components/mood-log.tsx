const MOODS = [
  {
    name: "Joy",
    moods: [
      {
        name: "Happy",
        icon: "😃",
      },
      {
        name: "Excited",
        icon: "🤪",
      },
      {
        name: "Hopeful",
        icon: "🙏",
      },
      {
        name: "Content",
        icon: "😊",
      },
      {
        name: "Elated",
        icon: "😂",
      },
    ],
  },
  {
    name: "Surprise",
    moods: [
      {
        name: "Moved",
        icon: "😭",
      },
      {
        name: "Stunned",
        icon: "😳",
      },
      {
        name: "Confused",
        icon: "😕",
      },
      {
        name: "Amazed",
        icon: "😮",
      },
    ],
  },
  {
    name: "Sadness",
    moods: [
      {
        name: "Sad",
        icon: "🙁",
      },
      {
        name: "Disappointed",
        icon: "😞",
      },
      {
        name: "Hurt",
        icon: "🤕",
      },
      {
        name: "Grief",
        icon: "💔",
      },
    ],
  },
];

function MoodLog() {
  return (
    <div className="space-y-8">
      {MOODS.map((mood) => (
        <div className="flex flex-col space-y-3">
          <h3 className="text-lg font-bold text-gray-800">{mood.name}</h3>
          <div className="flex items-center space-x-12">
            {mood.moods.map((mood) => (
              <button className="focus:outline-none">
                <div className="flex flex-col justify-center items-center">
                  <div className="rounded-full h-10 w-10 flex items-center justify-center bg-gray-200 text-2xl">
                    {mood.icon}
                  </div>
                  <span className="font-medium text-gray-800 text-center">
                    {mood.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MoodLog;
