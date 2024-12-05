import Items from "../components/Items";
import Navbar from "../components/Navbar";

export default function List() {
    return (
        <>
            <Navbar getStarted={false}/>
            <div className="px-12">
                <h1 className="md:text-6xl text-5xl mt-16 md:max-w-xl text-left mx-w-sm font-cormorant font-bold mb-8">G's List</h1>
                <Items name="Bacon" />
                <Items name="Pepsi Max" />
                <Items name="Rabbit Kibble" />
                <Items name="Prosecco" />
                <Items name="Pigs in Blankets" />
                <Items name="Ham Hock" />
                <Items name="Baileys" />
                <Items name="Harringtons Adult Mixed Grain Free Bumper Pack" />
                <Items name="Mozzarella Sticks" />
                <Items name="Yorkshire Puddings" />
                <Items name="Knobbly Bobblys" />
                <Items name="Turkey Crown" />
            </div>
            
        </>
    )
}