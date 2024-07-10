import { Link } from "react-router-dom";
import Button from "../Element/Button";

const CardProduct = (props) => {
    const {children} = props;
    return (
        <div className="w-full max-w-sm bg-slate-300 border border-gray-200 rounded-lg shadow-md">
            {children}
        </div>

    );
};

const Header = () => {
    return (
        <Link>
            <img
                src="/images/images-1.jpg"
                alt="sepatu"
                className="p-8 rounded-t-lg"
            />
        </Link>
    );
}

const Body = () => {
    return (
        <div className="ml-2 px-5 pb-8 mb-2">
            <a href="">
                <h2 className="mb-1 text-xl font-semibold tracking-tight text-white">
                    Sepatu Yuk
                </h2>
                <p className="text-sm ">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
                    modi voluptas laborum reprehenderit. Repellendus at iusto eligendi
                    officiis minima magni qui in, molestias voluptates! Deserunt quia
                    recusandae debitis veniam eum.
                </p>
            </a>
        </div>
    );
}

const Footer = () => {
    return (
        <div className="flex items-center justify-between p-3 ml-2">
            <span className="text-xl font bold text-white">Rp. 1.000.000</span>
            <Button classname="blue-600">Add To Cart</Button>
        </div>
    );
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
