const DISTORTIONS = [
  {
    name: "All-or-nothing Thinking",
    icon: "🌓",
  },
  {
    name: "Catastrophizing",
    icon: "🌋",
  },
  {
    name: "Labelling",
    icon: "🏷",
  },
];

function CognitiveDistortionCarousel() {
  return (
    <div className="flex items-baseline content-around w-full md:w-3/4 justify-around">
      {DISTORTIONS.map((distortion) => (
        <div className="flex space-y-2 flex-col items-center">
          <div className="rounded-full bg-gray-200 py-3 text-2xl px-4">
            {distortion.icon}
          </div>
          <span className="font-bold text-gray-800 w-28 text-center">
            {distortion.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default CognitiveDistortionCarousel;
