import { navigation } from "../../data/navigation";

const NavigationLinks = () => {
    return(
        <div className="flex gap-8">
            {navigation.map((item) => (
                <a
                    key={item.href}
                    href={item.href}
                    className="hover:text-yellow-500 transition-colors"
                >
                    {item.label}
                </a>
            ))}
        </div>
    );
};

export default NavigationLinks;