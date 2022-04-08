import useFetch from "./components/Produktinfo/useFetchproduct";


const Home = () => {
    const {Data:Produkter} = useFetch("https://k4backend.osuka.dev/products/")
    
    return ( 
        <div>{Produkter &&
            Produkter.map(data => (
                <div key={
                    data.id
                }>
                <img src={data.image} alt="" />
                <h3>{data.title}</h3>
                </div>
            ))}</div>
     );
}
 
export default Home;