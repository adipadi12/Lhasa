/*
Instead of writing

max-width:1200px
margin:auto
padding:...

50 times...

we create one reusable component.

This is exactly like inheritance in Unity...

except React prefers composition.
*/

import { Children, type ReactNode } from 'react';

interface ContainerProps { // this is like class ContainerProps { public GameObject Child; }
    children: ReactNode; // but only describes data and doesn't exist at runtime, only for the compiler
    /* can be looked at like a Unity scene's hierarchy where react component with 
    <Container>
        <Hero />
    </Container> 
    becomes
    children

Imagine Unity.

Container
    Hero
    Gallery */
}

const Container = ({ children }: ContainerProps) => { /*This is just destructuring.

Instead of

function Container(props)
{
    props.children
}

we're saying

give me only children
    */

    return ( // render whatever was passed inside
        <div className="mx-auto max-w-7xl px-6">
            {children}
        </div>
    );
};

export default Container;
/*
Interview Question

Suppose they ask

Why make a Container?

Answer:

Because layout logic should exist in one place.

If tomorrow I decide the website should be 1400px wide instead of 1200px,

I change one component.

Not 50.
*/