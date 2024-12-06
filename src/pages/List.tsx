import { useState, useEffect } from "react";
import Items from "../components/Items";
import Navbar from "../components/Navbar";

export default function List(): JSX.Element {

    const [shoppingList, setShoppingList] = useState(["Bacon", "Pepsi Max", "Rabbit Kibble", "Hay", "Jaffa Cakes", "Pigs in Blankets", "Ham Hock", "Baileys", "Harringtons Adult Mixed Grain Free Bumper Pack", "Mozzarella Sticks",
        "Yorkshire Puddings", "Knobbly Bobblys", "Turkey Crown"])

    function moveItem(itemName: string, marked: boolean): void {
        setShoppingList((prevShoppingList) => {
            const index: number = shoppingList.findIndex((element) => element === itemName);

            if (index === -1) return prevShoppingList;

            const listCopy: string[] = [...prevShoppingList];
            const [item]: string[] = listCopy.splice(index, 1)
            marked ? listCopy.unshift(item) : listCopy.push(item);
            return listCopy;
        })
        
    }

    const listElements = shoppingList.map((item) => {
        return <Items key={item} name={item} move={moveItem}/>;
    })

    useEffect(() => {console.log(shoppingList)}, [shoppingList])

    return (
        <>
            <Navbar getStarted={false}/>
            <div className="px-12 max-w-7xl mx-auto">
                <h1 className="md:text-6xl text-5xl mt-16 md:max-w-xl text-left mx-w-sm font-cormorant font-bold mb-8">G's List</h1>
                {listElements}
            </div>
            
        </>
    )
}