import { Link } from "react-router-dom";
import Button from "../Element/Button";

const CardProduct = (props) => {
    const {children} = props;
    return (
        <div className="w-full max-w-sm bg-slate-300 border border-gray-200 rounded-lg shadow-md mx-2 flex flex-col justify-between">
            {children}
        </div>

    );
};

const Header = (props) => {
    const {image} = props;
    return (
        <Link>
            <img
                src={image}
                alt="sepatu"
                className="p-8 rounded-lg"
            />
        </Link>
    );
}

const Body = (props) => {
    const {title, children} = props;
    return (
        <div className="ml-2 px-5 pb-8 mb-2 h-full">
            <a href="">
                <h2 className="mb-1 text-xl font-semibold tracking-tight text-white">
                    {title}
                </h2>
                <p className="text-sm ">
                    {children}
                </p>
            </a>
        </div>
    );
}

const Footer = (props) => {
    const {title} = props;
    return (
        <div className="flex items-center justify-between p-3 ml-2">
            <span className="text-xl font bold text-white">{title}</span>
            <Button classname="blue-600">Add To Cart</Button>
        </div>
    );
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
