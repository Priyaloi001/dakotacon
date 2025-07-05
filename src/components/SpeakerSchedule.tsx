
const scheduleTabData = {
  tab1: [
    {
      name: "Dennis Eger",
      title: "Unveiling the Power of OSINT",
      time: "9:00(Theater)",
      image: "/assets/images/dennis-eger.png",
    },
    {
      name: "Gerry Auger",
      title: "What Game of Thrones Can Teach Us About Cybersecurity",
      time: "10:00(Theater)",
      image: "/assets/images/Gerry-Auger.jpg",
    },
    {
      name: "Gerry Auger",
      title: "What Game of Thrones Can Teach Us About Cybersecurity",
      time: "10:00(Theater)",
      image: "/assets/images/Gerry-Auger.jpg",
    },
    {
      name: "Gerry Auger",
      title: "What Game of Thrones Can Teach Us About Cybersecurity",
      time: "10:00(Theater)",
      image: "/assets/images/Gerry-Auger.jpg",
    },
  ],
  tab2: [
    {
      name: "Dennis Eger",
      title: "Unveiling the Power of OSINT",
      time: "9:00(Theater)",
      image: "/assets/images/bhis.png",
    },
    {
      name: "Gerry Auger",
      title: "What Game of Thrones Can Teach Us About Cybersecurity",
      time: "10:00(Theater)",
      image: "/assets/images/Gerry-Auger.jpg",
    },
    {
      name: "Gerry Auger",
      title: "What Game of Thrones Can Teach Us About Cybersecurity",
      time: "10:00(Theater)",
      image: "/assets/images/Gerry-Auger.jpg",
    },
    {
      name: "Gerry Auger",
      title: "What Game of Thrones Can Teach Us About Cybersecurity",
      time: "10:00(Theater)",
      image: "/assets/images/Gerry-Auger.jpg",
    },
  ],
};


import { useState } from "react";

// 👇 Step 1: Define the type of the keys
type TabKey = keyof typeof scheduleTabData;

// 👇 Step 2: Use that type in useState
const SpeakerSchedule = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("tab1");

  return (
    <section className="py-16 bg-[#f8f8f8] px-5 xl:px-0">
      <h2 className="text-3xl md:text-5xl font-bold font-primary  mb-7 text-center ">
        Speaker Schedule
      </h2>
      <div className="w-full max-w-5xl mx-auto">
        {/* Tabs */}
        <div className="flex justify-center">
          {Object.keys(scheduleTabData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as TabKey)}
              className={`px-4 py-2 font-medium border-b-2 cursor-pointer font-primary text-lg ${
                activeTab === tab
                  ? "text-[#3d35c7] border-[#3d35c7]"
                  : "text-black border-transparent hover:text-[#3d35c7] hover:border-[#3d35c7]"
              }`}
            >
              {tab === "tab1" ? "March 21 - Track 1" : "March 21 - Track 2"}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-10">
          <div className="grid md:grid-cols-2 gap-5 md:gap-10">
            {scheduleTabData[activeTab].map((item, index) => (
              <div className="flex gap-5 font-primary" key={index}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-contain w-16 h-16"
                />
                <div className="space-y-1">
                  <h2 className="font-semibold text-base md:text-lg">{item.title}</h2>
                  <p className="text-xs font-semibold">{item.time}</p>
                  <p className="text-sm md:text-base">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default SpeakerSchedule;
