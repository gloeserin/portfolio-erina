import { useNavigate } from 'react-router-dom';


const NavbarContent = () => {
    const navigate = useNavigate(); // Hook dari react-router-dom

    const handleNavigate = () => {
        navigate('/'); // Navigasi ke home
    };

    return (
        <nav className="z-[999] w-10 p-8 fixed py-0 top-0 right-0 left-0 ">
            <div className="text-lg flex justify-between items-center font-medium">
                <div className="w-6 font-montserrat h-screen gap-28 flex-col items-center py-20 flex">
                    <div className="-rotate-90 text-center  size text-base text-text-white ">
                        <button onClick={handleNavigate}>HOME</button> {/* Ubah menjadi button */}
                    </div>

                    <div className="w-[1px] h-28 bg-text-white my-10 font-thin">

                    </div>
                    <div className="-rotate-90 text-center    size text-base text-text-white ">
                        <a href="">©/2024</a>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default NavbarContent;