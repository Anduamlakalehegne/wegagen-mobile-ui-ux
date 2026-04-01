import { RouterProvider } from 'react-router';
import { router } from './routes';

export default function App() {
  return (
    <div className="w-full h-screen bg-[#f2f4f7] dark:bg-neutral-950 flex items-center justify-center overflow-hidden font-sans">
      <div className="scale-[0.88] lg:scale-[0.9] origin-center flex items-center justify-center transition-all duration-700 ease-out animate-in fade-in zoom-in-95">

        {/* Modern Device Frame (iPhone 14 Pro style geometry) */}
        <div className="relative w-[400px] h-[844px] bg-white dark:bg-neutral-900 rounded-[3.5rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.25)] border-[8px] border-[#1a1a1a] ring-[4px] ring-black/5 ring-inset">

          {/* Internal Application Layer */}
          <div className="w-full h-full overflow-y-auto overflow-x-hidden no-scrollbar relative z-0">
            <RouterProvider router={router} />
          </div>

          {/* Home Indicator (Subtle bottom bar) */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[5px] bg-[#1a1a1a]/10 dark:bg-white/10 rounded-full z-[100]" />
        </div>
      </div>
    </div>
  );
}
