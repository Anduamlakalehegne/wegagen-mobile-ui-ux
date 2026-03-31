import { RouterProvider } from 'react-router';
import { router } from './routes';

export default function App() {
  return (
    <div className="w-full bg-[#f4f2f6] dark:bg-neutral-950 flex items-center justify-center sm:py-8 sm:px-4 p-[100px]">
      <div className="relative w-full h-full min-h-screen sm:min-h-0 sm:w-[400px] sm:h-[844px] bg-background sm:rounded-[3rem] overflow-hidden sm:shadow-2xl sm:border-[8px] border-neutral-900">

        <div className="w-full h-full overflow-y-auto overflow-x-hidden no-scrollbar">
          <RouterProvider router={router} />
        </div>
      </div>
    </div>
  );
}

// import { RouterProvider } from 'react-router';
// import { router } from './routes';

// export default function App() {
//   return (
//     <div className="w-full h-screen bg-[#f4f2f6] dark:bg-neutral-950 flex items-center justify-center overflow-hidden sm:py-4">
//       {/* Miniaturized Mock Device Frame (Scaled to mimic 90% zoom) */}
//       <div className="relative w-full h-full min-h-screen sm:min-h-0 sm:w-[360px] sm:h-[760px] bg-background sm:rounded-[3rem] overflow-hidden sm:shadow-2xl sm:border-[12px] border-neutral-900 group">
        
//         {/* Scrollable Container Layer */}
//         <div className="w-full h-full overflow-y-auto overflow-x-hidden no-scrollbar">
//           <RouterProvider router={router} />
//         </div>
//       </div>
//     </div>
//   );
// }

