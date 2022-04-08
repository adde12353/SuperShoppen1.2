import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { useRecoilValue  } from "recoil";
import productsState from "../src/stores/products";


const Produkter = ({ varukorg, handleAdd}) => {
    const produkter = useRecoilValue(productsState)

    return ( 
        <div className="produkt-lista">
            
            {produkter && produkter.map((data) => (

                <div className="product-cards" key={data.id}>
                    <img src={data.image} alt="" srcset="" />
                    <Link className="list-links" to={`/produkt/${data.id}`}>
                    <h2>{data.title}</h2>
                    <p>{data.price}kr</p></Link>
                    <button className="varukorg-btn" onClick={() => handleAdd(data)}>Lägg till i kundvagn</button>
                </div>
            ))}

        </div>
     );
}
 
const mapStateToProps = (state) =>{
    return {
        posts: state.posts
    }
}


export default Produkter;