import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const sponsorLogos: string[] = [
    "/assets/images/SBS.jpg",
    "/assets/images/east-river.png",
    "/assets/images/KBR.jpg",
    "/assets/images/SDN.png",
    "/assets/images/AS.png",
    "/assets/images/UND.png",
]

const Sponsors: React.FC = () => {
    const settings: import("react-slick").Settings = {
        dots: true,
        infinite: true,
        speed: 600, // ⬆️ Increase speed for smoother transition
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // ⬅️ Delay between auto scrolls
        cssEase: "ease-in-out", // ⬅️ Smooth easing function
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 2 },
            },
             {
                breakpoint: 480,
                settings: { slidesToShow: 1 },
            },
        ],
    }

    return (
        <section className="max-w-6xl mx-auto py-16 px-5 xl:px-0">
            <style>
                {`
          .slick-track{
              display: flex;
              align-items: center;
          }
              .slick-slide{
                  justify-content: center;
                  display: flex !important;
              }
        `}
            </style>
            <div className="bg-white shadow-lg border border-gray-200 rounded-lg p-10">
                {/* Title */}
                <div className="grid md:grid-cols-2 border-b border-[#ccc] pb-3">
                    <h1 className="text-3xl md:text-5xl font-bold font-primary my-auto mb-5 md:mb-auto">
                        Sponsors
                    </h1>
                    <p className="font-primary font-base leading-7 my-auto">
                        Join us for three full days of talks and trainings from the finest
                        peeps in the security world! Come enjoy the benefits of a small
                        conference.
                    </p>
                </div>

                {/* Slider */}
                <div className="md:pt-5">
                    <Slider {...settings}>
                        {sponsorLogos.map((logo, index) => (
                            <div key={index} className="my-auto">
                                <img
                                    src={logo}
                                    alt={`sponsor-${index}`}
                                    className="w-[120px] object-contain"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Sponsors
