import { useParams } from "react-router-dom";

const Produkt = ({produkter}) => {
    const { id } = useParams()
    return (   
        <div className="produkt-lista">
            
        {produkter.filter((data) => data.id === id).map((data) => (
            <div className="single-produkt" key={data.id}>
                <div><img className="product-images" src={data.image} alt="" srcset="" /></div>
                <div className="produkt-text"><h2>{data.namn}</h2>
                <p>{data.text}</p>
                <p>{data.pris}kr</p></div>
            </div>
        ))}

    </div>
     );
}
 
export default Produkt;
