import Container from "../common/Container"
import { navigation } from "../../data/navigation";
import { restaurant } from "../../data/restaurant";
import Button from "../common/Button";
/*
Notice the braces.

Earlier we imported

import Container from "../common/Container";

without braces.

Why?

Because

export default

is imported directly.

Whereas

export const navigation

must be imported with braces.

This is pure JavaScript, not React.
*/
const Navbar = () => { // fucntion that instead of returning a GameObject it returns JSX
    return (
        <nav>
            <Container>
                <div className="flex items-center justify-between py-6">

                    <h1>{restaurant.name}</h1>

                    <div className="flex gap-8">
                        {navigation.map((item) => ( // works like foreach(var item in navigation)
                            <a className="gap-8"
                                key={item.href}
                                href={item.href}
                            >
                                {item.label}
                            </a>
                        ))}

                    </div>
                    <Button>
                        Reserve Table
                    </Button>

                </div>
            </Container>
        </nav>
    ); // container acts as a prefab that can be used anywhere
}; // a works like an anchor for each href

export default Navbar; // makes componenet available to other files