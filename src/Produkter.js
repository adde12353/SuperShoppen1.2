import { Link } from "react-router-dom"


const Produkter = ({produkter, varukorg, handleAdd}) => {
    
    return ( 
        <div className="produkt-lista">
            
            {produkter.map((data) => (

                <div className="kort" key={data.id}>
                    <img className="product-images" src={data.image} alt="" srcset="" />
                    <Link className="list-links" to={`/produkt/${data.id}`}>
                    <h2>{data.namn}</h2>
                    <p>{data.pris}kr</p></Link>
                    <button className="varukorg-btn" onClick={() => handleAdd(data)}>Lägg till i kundvagn</button>
                </div>
            ))}

        </div>
     );
}
 
export default Produkter;