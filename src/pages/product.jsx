import CardProduct from "../Component/Fragment/CardProduct";

const ProductPage = () => {
    return (
        <div className="flex justify-center py-8">
           <CardProduct>
           <CardProduct.Header></CardProduct.Header>
           <CardProduct.Body></CardProduct.Body>
           <CardProduct.Footer></CardProduct.Footer>
           </CardProduct>
        </div>
    );
}

export default ProductPage;