import Container from "../common/Container";
import Logo from "../common/Logo";
import NavigationLinks from "./NavigationLinks";
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

                    <Logo/>

                    <NavigationLinks/>
                    
                    <Button>
                        Reserve Table
                    </Button>

                </div>
            </Container>
        </nav>
    ); // container acts as a prefab that can be used anywhere
}; // a works like an anchor for each href

export default Navbar; // makes componenet available to other files
