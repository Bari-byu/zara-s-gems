
import { useRef } from "react";
import heroImage from "../assets/heath-hero.jpeg";
import { useAppContext } from "../context/AppContext";

const Header = () => {
  const { setInput, input } = useAppContext();
  const inputRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setInput(inputRef.current.value);
  };

  return (
    <section className="mx-6 md:mx-12 xl:mx-20">
      <div className="relative overflow-hidden rounded-[32px] min-h-[700px] flex items-center">
        <img src={heroImage} alt="Zara's Gems" className="absolute inset-0 w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-950/90 via-teal-900/70 to-transparent"></div>

        <div className="relative z-10 max-w-3xl p-8 md:p-16 text-white">
          <span className="bg-emerald-400/20 border border-emerald-300/40 px-5 py-2 rounded-full text-sm">
            Trusted Health Insights • Wellness • Prevention
          </span>
          <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
            Zara's Gems
          </h1>
          <p className="mt-6 text-xl text-slate-200 leading-relaxed">
            Discover expert-backed articles on healthy living, nutrition, mental wellness,
            preventive care, and modern healthcare trends. Empowering healthier choices every day.
          </p>

          <form onSubmit={onSubmitHandler} className="mt-10 bg-white rounded-2xl p-2 flex max-w-xl shadow-2xl">
            <input ref={inputRef} type="text" placeholder="Search health articles..."
              className="flex-1 px-5 py-4 text-slate-700 outline-none rounded-xl"/>
            <button className="bg-teal-700 hover:bg-teal-800 text-white px-8 rounded-xl font-semibold">
              Explore
            </button>
          </form>

          {input && <p className="mt-4 text-emerald-200">Showing results for: {input}</p>}
        </div>
      </div>
    </section>
  );
};

export default Header;
