const trainingData = [
  {
    title: "Hacking Modern Web Apps",
    instructor: "7ASecurity Abraham Aranguren",
    description:
      "This course is a 100% hands-on deep dive into the OWASP Security Testing Guide and relevant items",
    image: "/assets/images/hacking.png",
  },
  {
    title: "Enterprise Forensics and Response",
    instructor: "Antisyphon Gerry Johansen",
    description:
      "The Enterprise Forensics and Response course is designed to provide students with both an investigative construct",
    image: "/assets/images/cyber-security.png",
  },
  {
    title: "SOC Foundations",
    instructor: "Antisyphon Hayden Covington",
    description:
      "Foundations of SOC will take you from the ground floor of “What is a SOC” to “How to detect and investigate a multi-stage attack”.",
    image: "/assets/images/computer-systems.png",
  },
  {
    title: "Assumed Compromise",
    instructor: "Antisyphon Kent Ickler & Jordan Drysdale",
    description:
      "This course will deep dive into what we call threat optics: auditing endpoints, centralizing logs, and visualizing results.",
    image: "/assets/images/control-center.png",
  },
];
const Training = () => {
  return (
    <div
      style={{ backgroundImage: "url('/assets/images/training-bg.png')" }}
      className="py-20 bg-cover bg-repeat px-5 xl:px-0"
    >
      <div className="container mx-auto h-full items-center content-center text-white space-y-10">
        {/* title */}
        <div className="grid md:grid-cols-2 space-y-5 md:space-y-0">
          <h1 className="text-3xl md:text-5xl font-bold font-primary my-auto mb-5 md:mb-auto">Trainings</h1>
          <p className="font-primary font-base leading-7 my-auto">
            Join us for three full days of talks and trainings from the finest
            peeps in the security world! Come enjoy the benefits of a small
            conference
          </p>
        </div>

        {/* cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-7">
          {trainingData.map((training, index) => (
            <div
              key={index}
              className="flex flex-col h-full bg-[#31422D33] shadow-lg rounded-xl p-5 border border-gray-200 space-y-5"
            >
              <img src={training.image} alt={training.title} />
              <div className="flex flex-col h-full justify-between space-y-3">
                <p className="text-xs px-3 py-1 rounded-full bg-[#ffffff63] font-primary w-fit">
                  {training.instructor}
                </p>
                <h2 className="font-primary font-semibold text-lg text-white">
                  {training.title}
                </h2>
                <p className="font-primary text-sm">{training.description}</p>
              </div>
              <a
                href="#"
                className="inline-block w-max font-primary capitalize text-white border border-[#3d35c7] bg-[#3d35c7] py-3 px-10 rounded-md text-sm md:text-base hover:bg-white hover:text-black hover:border-black duration-200"
              >
                register
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Training;
