import newsData from "../../public/assets/newsData.json";

const TextSlider = () => {
  return (
    <>
      <div className="text-slider absolute flex flex-col animate-slide left-[93px]">
        {newsData.map((m) => (
          <a
            href="#"
            className="w-[300px] inline-block font-medium ml-4 truncate hover:underline"
            key={m.id}
          >
            {m.message}
          </a>
        ))}
      </div>
    </>
  );
};

export default TextSlider;