import MapComponent from "@/components/MapComponent";
import { Mountain, Compass } from "lucide-react";

export default function Home() {
  return (
    <main className="relative w-full h-screen flex flex-col md:flex-row overflow-hidden bg-gray-50 font-sans">
      {/* sidebar / overlay */}
      <div className="absolute top-0 left-0 w-full md:w-[400px] z-10 p-4 pointer-events-none flex flex-col gap-4 h-full justify-between pb-8">
        {/* header */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl pointer-events-auto border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl">
              <Mountain size={28} />
            </div>
            <div>
              <h1 className="text-2xl font-black text-gray-900 tracking-tight">Nature Lines</h1>
              <p className="text-xs text-gray-500 font-bold tracking-widest uppercase mt-1">Hiking Trails</p>
            </div>
          </div>
          
          <div className="pt-2">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Mount Flora</h2>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">Starting from Berthoud Pass, navigate the scenic ridgeline straight to the 13,136 ft summit.</p>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl shadow-sm">
                <div className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1">Distance</div>
                <div className="text-lg font-black text-gray-900">3.2 mi <span className="text-sm font-medium text-gray-400">one way</span></div>
              </div>
              <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl shadow-sm">
                <div className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1">Elev Gain</div>
                <div className="text-lg font-black text-gray-900">1,770 ft</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* nav details */}
        <div className="bg-gray-900 text-white rounded-2xl p-5 shadow-2xl pointer-events-auto flex items-center justify-between border border-gray-800">
          <div className="flex items-center gap-4">
            <div className="bg-gray-800 p-3 rounded-full">
              <Compass className="text-emerald-400 animate-pulse" size={24} />
            </div>
            <div>
              <div className="font-bold text-sm tracking-wide">Stay on the trail</div>
              <div className="text-gray-400 text-xs mt-1">Tap the crosshairs on the map to track your location.</div>
            </div>
          </div>
        </div>
      </div>

      {/* map */}
      <div className="w-full h-full flex-1 relative z-0">
        <MapComponent />
      </div>
    </main>
  );
}
