const Navbar = () => {

    return (
        <div>
            <nav className="z-20 w-10 p-8 text-text-heading fixed py-20 top-0 right-0 left-0 " data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
                <div className="text-lg flex justify-between items-center font-medium">
                    <div className="w-6 font-montserrat h-screen gap-10 flex-col items-center py-5 flex">
                        <div className="-rotate-90 text-center  size text-base text-text-heading ">
                            <a href="https://www.linkedin.com/in/erinaa/">LI</a>
                        </div>
                        <div className="-rotate-90 text-center   size text-base text-text-heading ">
                            <a href="https://github.com/gloeserin">GT</a>
                        </div>
                        <div className="-rotate-90 text-center   size text-base text-text-heading ">
                            <a href="mailto:erinfebririan@gmail.com">GM</a>
                        </div>
                        <div className="w-[1px] h-28 bg-text-heading my-10 font-thin">

                        </div>
                        <div className="-rotate-90 text-center    size text-base text-text-heading ">
                            <a href="">©/2024</a>
                        </div>
                    </div>
                </div>
            </nav>            
        </div>
    )
};

export default Navbar;