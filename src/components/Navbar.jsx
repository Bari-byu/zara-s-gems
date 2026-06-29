
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
   <button
    onClick={() => navigate("/author")}
    className="group flex items-center gap-3 rounded-full border border-teal-100 bg-white/90 px-2.5 py-2 shadow-[0_10px_30px_rgba(13,148,136,0.15)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_35px_rgba(13,148,136,0.25)]"
   >
    <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full ring-2 ring-teal-500/20 transition-transform duration-300 group-hover:scale-105">
      <img src={assets.profile_icon} alt="Author profile" className="h-full w-full object-cover" />
    </div>
    <div className="pr-2 text-left">
      <p className="text-sm font-semibold text-slate-800">{token ? "Dashboard" : "Author Login"}</p>
      <p className="text-xs text-teal-700">{token ? "Manage content" : "Access your account"}</p>
    </div>
   </button>
  </nav>
 )
}
export default Navbar;
