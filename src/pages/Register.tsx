const Register = () => {
    return (
        <>
            <div className="py-44 bg-gray-50">
                <div className="container mx-auto px-5">
                    <h1 className="text-3xl md:text-5xl font-bold font-primary  mb-10 text-center capitalize">signup now</h1>
                    <form>
                        <div className="grid sm:grid-cols-2 gap-5">
                            <div>
                                <label className="font-primary font-medium text-base capitalize block mb-1">
                                    first name
                                </label>
                                <input type="text" className="border-1 border-gray-500 p-3 rounded-lg w-full" required/>
                            </div>
                            <div>
                                <label className="font-primary font-medium text-base capitalize block mb-1">
                                    last name
                                </label>
                                <input type="text" className="border-1 border-gray-500 p-3 rounded-lg w-full" required/>
                            </div>
                            <div>
                                <label className="font-primary font-medium text-base capitalize block mb-1">
                                    address
                                </label>
                                <input type="text" className="border-1 border-gray-500 p-3 rounded-lg w-full" required />
                            </div>
                            <div>
                                <label className="font-primary font-medium text-base capitalize block mb-1">
                                    city
                                </label>
                                <input type="text" className="border-1 border-gray-500 p-3 rounded-lg w-full" required />
                            </div>
                            <div>
                                <label className="font-primary font-medium text-base capitalize block mb-1">
                                    state
                                </label>
                                <input type="text" className="border-1 border-gray-500 p-3 rounded-lg w-full" required/>
                            </div>
                            <div>
                                <label className="font-primary font-medium text-base capitalize block mb-1">
                                    zip code
                                </label>
                                <input type="text" className="border-1 border-gray-500 p-3 rounded-lg w-full" required/>
                            </div>
                            <div>
                                <label className="font-primary font-medium text-base capitalize block mb-1">
                                    country
                                </label>
                                <input type="text" className="border-1 border-gray-500 p-3 rounded-lg w-full" required/>
                            </div>
                            <div>
                                <label className="font-primary font-medium text-base capitalize block mb-1">
                                    email
                                </label>
                                <input type="email" className="border-1 border-gray-500 p-3 rounded-lg w-full" required/>
                            </div>
                            <div>
                                <label className="font-primary font-medium text-base capitalize block mb-1">
                                    phone
                                </label>
                                <input type="number" className="border-1 border-gray-500 p-3 rounded-lg w-full" min={10} max={10} required />
                            </div>
                            <div>
                                <label className="font-primary font-medium text-base capitalize block mb-1">
                                    dietary restrictions
                                </label>
                                <input type="text" className="border-1 border-gray-500 p-3 rounded-lg w-full" required/>
                            </div>
                        </div>
                    </form>
                    <button type="submit" className="font-primary flex justify-center mt-10 mx-auto cursor-pointer capitalize text-white bg-black py-3 px-10 rounded-md  border-1 border-black  text-sm xl:text-base hover:bg-transparent hover:text-black hover:border-black duration-200">
                    register
                </button>
                </div>           
            </div>
        </>
    );
};

export default Register;
