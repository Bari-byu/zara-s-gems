
import { useAppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const Navbar = () => {
 const { navigate, token } = useAppContext();
 return (
  <nav className="flex justify-between items-center py-6 px-6 md:px-12 xl:px-20">
   <div onClick={()=>navigate("/")} className="cursor-pointer flex items-center gap-3">
      <img src={assets.logo} alt="Zara's Gems Logo" className="w-12 h-12" />
      <div>
        <h1 className="text-3xl font-bold text-teal-800">Zara's Gems</h1>
        <p className="text-xs text-slate-500 tracking-[0.25em]">HEALTH & WELLNESS BLOG</p>
      </div>
   </div>
   <button onClick={()=>navigate("/author")}
    className="bg-gradient-to-r from-teal-700 to-emerald-600 text-white px-8 py-3 rounded-full shadow-lg">
    {token ? "Dashboard" : "Author Login"}
   </button>
  </nav>
 )
}
export default Navbar;
