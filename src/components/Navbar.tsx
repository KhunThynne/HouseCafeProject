import Cart from "./CouterBar/Cart";


export default function Navbar() {
    return (
        <div className="sticky  top-0  bg-white shadow z-20">
            <nav className=" relative flex justify-between items-center  container mx-auto   px-3  h-full">
                <div>Manu</div>
                <Cart></Cart>


                <div className="absolute m-screen text-gray-300 z-[-99]"><h2 className="">Navbar layout.</h2>  </div>
            </nav> </div>
    );
}
