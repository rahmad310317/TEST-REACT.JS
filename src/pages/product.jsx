import CardProduct from "../Component/Fragment/CardProduct";
import Button from "../Component/Element/Button";

const Products = [
    {
        id: 1,
        name: "Nike",
        price: "Rp 1.000.00",
        image: "/images/images-1.jpg",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    },
    {
        id: 2,
        name: "Nike shoes",
        price: "Rp 2.000.00",
        image: "/images/images-2.jpg",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    },
    {
        id: 3,
        name: "Nike",
        price: "Rp 1.000.00",
        image: "/images/images-1.jpg",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    },

];

const email = localStorage.getItem('email');


const ProductPage = () => {

    const handleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href = '/login';
    }
    return (
        <>
        <div className="flex justify-end h-10 bg-blue-600 text-white items-center px-10 p-10">
            {email}
        <Button classname="blue-950 mx-2" onClick={handleLogout}>Logout</Button>
        </div>
        <div className="flex justify-center py-8">
            {Products.map((product) => (
                <CardProduct key={product.id}>
                    <CardProduct.Header image={product.image }/>
                    <CardProduct.Body title={product.name}>
                      {product.description}
                    </CardProduct.Body>
                    <CardProduct.Footer title={product.price}/>
                </CardProduct>
            ))}
        </div>
        </>
        
    );
}

export default ProductPage;