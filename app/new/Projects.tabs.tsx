"use client";


const TABS = ["All", "Websites", "Apps"];

export default function ProjectsTabs({
  tab,
  setTab,
}: {
  tab: number;
  setTab: (v: number) => void;
}) {

  function handleClick(num: number) {
    setTab(num);
    window.scrollTo({
      top: document.getElementById("PROJECTS")?.offsetTop
    })
  }
  
  return (
    <div className="flex mx-auto max-w-[500px] sticky top-0 z-10 bg-white">
      {TABS.map((thisTab, i) => {
        const isActive = tab === i;
        return (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className={`flex-1 px-2 md:px-6 py-3 border border-gray-200 font-medium ${isActive ? "bg-black text-white" : "hover:bg-gray-200"}`}
          >
            <span>{thisTab}</span>
          </button>
        );
      })}
    </div>
  );
}
