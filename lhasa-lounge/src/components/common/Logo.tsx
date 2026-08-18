import { restaurant } from "../../data/restaurant";

const Logo = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold">
                {restaurant.name}
            </h1>

            <p className="text-sm text-gray-400">
                {restaurant.tagline}
            </p>
        </div>
    );
};

export default Logo;