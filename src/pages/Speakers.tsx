// components/SpeakersGrid.tsx
import  { useState } from "react";

interface Speaker {
    name: string;
    title: string;
    image: string;
    shortInfo: string;
    fullInfo: string;
    Bio: string;
}

const speakers: Speaker[] = [
    {
        name: "Gaurav Khanna",
        title: "Keynote Address: Dr. Jekyll and Mr. AI: When good models go bad",
        image: "/assets/images/gaurav-khanna.jpg",
        shortInfo: "Artificial Intelligence has long been heralded as a force for progress, but what happens when our most advanced models take an unexpected turn?",
        fullInfo: `Artificial Intelligence has long been heralded as a force for progress, but what happens when our most advanced models take an unexpected turn? Dr. Jekyll and Mr. AI: When good models go bad explores the dual nature of GenAI—its potential for innovation and its risks when misaligned, manipulated, or misunderstood. Through real-world examples, Dr. G will examine how AI models can go astray, from bias amplification to security vulnerabilities, and what these challenges reveal about the future of AI development, regulation, and ethical responsibility.`,
        Bio:
            `Dr. G has been a pioneer in designing and implementing predictive and generative AI systems in Sales at Cisco. Teaching and mentoring students have been core aspects of his various roles during his 25-year tenure at the company. In addition to leading a solutions engineering team, he is actively involved in teaching AI, fostering strategic partnerships within Cisco and the industry, and guiding companies on their overall AI strategy. In his current role, he is focused on talking to our customers and partners about AI, using it to drive organizational transformation and being an advisor on overall AI strategy. He also teaches a foundational AI/ML course at Stanford Continuing Studies. Originally from New York, he has been a long-time resident of San Jose, CA, with his wife and two teenage children. He received his B.S. in Physics from Yale and his Ph.D. in Materials Science and Engineering from Stanford University.`,
    },
    {
        name: "Gerry Auger",
        title: "What Game of Thrones Can Teach Us About Cybersecurity",
        image: "/assets/images/Gerry-Auger.jpg",
        shortInfo: "In a realm where threats loom at every corner, where trust is a currency, and where the smallest oversight can lead to catastrophe",
        fullInfo: `In a realm where threats loom at every corner, where trust is a currency, and where the smallest oversight can lead to catastrophe, there is much to glean from the intricate tapestry of Westeros and the rich world of Game of Thrones.
Drawing from two decades in the cybersecurity arena, this keynote presentation delves deep into the parallels between the worlds of 'Game of Thrones' and today's cyber ecosystems. Just as the Houses of Westeros must continuously adapt to political and martial threats, organizations today must be agile in response to an ever-evolving cyber landscape.
Participants will embark on a journey through the Seven Kingdoms, using pivotal moments and iconic characters from the series to illuminate key lessons in cybersecurity, and communicate valuable cybersecurity principles.
In the realms of Westeros and cybersecurity alike, the night is dark and full of terrors – but with preparation and wisdom, one can navigate and overcome them.`,
        Bio:
            `Dr. Auger is a 20+ year cybersecurity professional, academic, and author. He has been the cybersecurity architect at MUSC, a multi-billion dollar academic medical center. He has built cybersecurity programs from the ground up, educates as Adjunct Faculty in The Citadel Military College Cyber Sciences department, and fulfills the role of Chief Content Creator on the successful YouTube channel Simply Cyber.

Dr. Auger is passionate about cybersecurity and has educated 10's of thousands of students on the discipline. Dr. Auger holds a PhD in cyber operations and two Masters in Computer Science and Information Assurance.`,
    },
    // Add more speakers here...
];

const SpeakersGrid = () => {
    const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

    return (
        <div className="py-36 bg-gray-50">
            <div className="container mx-auto px-5 xl:px-0">
                <h2 className="text-3xl font-bold text-center mb-12 xl:mt-10">Meet Our Speakers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 font-primary">
                    {speakers.map((speaker) => (
                        <div
                            key={speaker.name}
                            className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-lg transition"
                        >
                            <img
                                src={speaker.image}
                                alt={speaker.name}
                                className="w-24 h-24 rounded-full mx-auto object-cover mb-4"
                            />
                            <h3 className="text-xl font-semibold ">{speaker.name}</h3>
                            <p className="text-xs font-semibold">{speaker.title}</p>
                            <p className="mt-2 text-sm">{speaker.shortInfo}</p>
                            <button
                                onClick={() => setSelectedSpeaker(speaker)}
                                className="mt-4  underline font-medium text-[#3d35c7] cursor-pointer"
                            >
                                Read More
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedSpeaker && (
                <div className="fixed inset-0 z-50 bg-[#000000b0]  flex items-center justify-center p-4">
                    <div className="bg-white max-w-5xl w-full rounded-2xl p-10 relative shadow-lg font-primary h-[100%] lg:h-max overflow-y-scroll lg:overflow-y-auto">
                        <button
                            className="absolute top-3 right-4 text-gray-600 hover:text-black text-2xl cursor-pointer"
                            onClick={() => setSelectedSpeaker(null)}
                        >
                            &times;
                        </button>
                        <div className="space-y-5">
                            <p className="text-base">{selectedSpeaker.fullInfo}</p>
                            <p className="text-base font-bold">
                                Biography
                            </p>
                            <p className="text-base">{selectedSpeaker.Bio}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SpeakersGrid;
