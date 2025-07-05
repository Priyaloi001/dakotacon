const scheduleData = [
  {
    date: "March 21",
    events: [
      {
        title: "Social/Reception",
        time: "~6:00",
        location: "Madison",
        description: "Meal is provided. Please register in advance.",
        imgSrc: "/assets/images/logo_cal.png",
      },
      {
        title: "Conference Begins",
        time: "~9:00",
        location: "Theater & Conference Center",
        description:
          "Join us for two tracks of great talks from experts in the industry! Check back a little later for the detailed schedule.",
        imgSrc: "/assets/images/logo_cal.png",
      },
    ],
  },
  {
    date: "March 22 - March 23",
    events: [
      {
        title: "Dakota Conquest Begins",
        time: "10:00",
        location: "Conference Center",
        imgSrc: "/assets/images/logo_cal.png",
      },
      {
        title: "Trainings Begin",
        time: "~9:00",
        location: "Various Locations",
        description:
          "Our two-day trainings will be held Saturday and Sunday March 22-23",
        imgSrc: "/assets/images/logo_cal.png",
      },
    ],
  },
];

const Schedule = () => {
  return (
    <section className="py-16 px-5 xl:px-0" id="schedule">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-5">
          {scheduleData.map((day, index) => (
            <div key={index}>
              <div className="h-full bg-white shadow-lg rounded-xl p-5 border border-gray-200">
                <div className="flex gap-2 border-b border-b-gray-300 pb-2 mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="rgba(61,53,199,1)"
                  >
                    <path d="M17 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9V3H15V1H17V3ZM4 9V19H20V9H4ZM6 11H8V13H6V11ZM6 15H8V17H6V15ZM10 11H18V13H10V11ZM10 15H15V17H10V15Z" />
                  </svg>
                  <span className="font-primary text-base font-semibold">
                    {day.date}
                  </span>
                </div>

                <div className="space-y-5">
                  {day.events.map((event, idx) => (
                    <div className="flex gap-5 font-primary" key={idx}>

                      <img
                        src={event.imgSrc}
                        alt=""
                        className="object-contain w-10 h-10 md:w-16 md:h-16"
                      />
                      <div className="space-y-1">
                        <h2 className="font-semibold text-base md:text-lg">{event.title}</h2>
                        <p className="text-xs font-semibold">{event.time}</p>
                        <p className="text-xs font-semibold">{event.location}</p>
                        {event.description && (
                          <p className="text-sm md:text-base">{event.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Schedule;
