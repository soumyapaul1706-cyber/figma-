import TopTabsWidget from "./TopTabsWidget";
import GalleryWidget from "./GalleryWidget";

export default function App() {
  return (
    <div className="flex h-screen">
      <aside className="w-1/2 hidden md:block bg-gray-100"></aside>
      <main className="flex-1 flex flex-col items-center justify-center bg-gray-900">
        <div className="w-full max-w-xl p-6 space-y-6">
          <TopTabsWidget />
          <GalleryWidget />
        </div>
      </main>
    </div>
  );
}
