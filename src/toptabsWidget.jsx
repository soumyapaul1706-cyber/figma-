import { useState } from "react";

const TABS = ["About Me", "Experiences", "Recommended"];
const CONTENT = {
  "About Me": "Hello! I’m Dave, your sales rep from Salesforce. I’ve been working at this awesome company for 3 years now. I was born and raised in Albany, NY. I’ve been living in Scotia with my wife Tiffany and my 4-year-old twin daughters—Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM.",
  "Experiences": "Experience section content.",
  "Recommended": "Recommended section content.",
};

export default function TopTabsWidget() {
  const [active, setActive] = useState(TABS[0]);

  return (
    <div className="bg-gray-800 rounded-lg shadow p-4">
      <div className="flex gap-2 mb-4">
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-4 py-2 rounded ${
              active === tab ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="text-gray-100">{CONTENT[active]}</div>
    </div>
  );
}
