import { NavLink } from "react-router-dom";
const Hero = () => {
    return (
        <div style={{ backgroundImage: "url('/assets/images/banner1.jpg')" }} className="h-[600px] xl:h-[700px] bg-cover bg-no-repeat px-5 xl:px-0">
            <div className="container mx-auto  h-full items-center content-center text-white">
                <div className="xl:w-[60%] space-y-10">
                    <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold font-primary">
                        Ghana AI Youth Summit 2025
                    </h1>
                    <p className="font-primary font-base leading">
                        Join us for three full days of talks and trainings from the finest peeps in the security world! Come enjoy the benefits of a small conference where you won't get lost in the crowd and you get time to interact directly with the speakers and your security peers. Attending the talks on Friday is FREE, so you have no excuse!
                    </p>
                     <NavLink to="/register" className="font-primary capitalize text-white  border-1 border-white py-3 px-10 rounded-md text-sm md:text-base hover:bg-white hover:text-black hover:border-black duration-200">register</NavLink>
                </div>
            </div>
        </div>
    );
};
export default Hero;