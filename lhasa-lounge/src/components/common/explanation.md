Step 1

You write:

<Button>
    Reserve Table
</Button>

To us, this looks like HTML.

But React transforms it into a function call.

Conceptually, it's doing something like:

Button({
    children: "Reserve Table"
});

You didn't write children yourself—React created that property automatically.

Step 2

Our component receives it.

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    onClick?: () => void;
}

const Button = ({
    children,
    variant = "primary",
    onClick,
}: ButtonProps) => {
    ...
}

This is just a function with one parameter.

If it helps, think of it like C#:

void Button(string children)
{
    ...
}

Except instead of just a string, React allows almost anything to be passed as children.

Step 3

Inside the component, we render it.

return (
    <button>
        {children}
    </button>
);

If children is:

"Reserve Table"

React renders:

<button>
    Reserve Table
</button>
But here's the really cool part...

children doesn't have to be text.

It can be another component.

<Button>
    <Hero />
</Button>

Now children is the entire Hero component.

Or even multiple things:

<Button>
    <Icon />
    Reserve Table
</Button>

Now children contains:

<Icon />
"Reserve Table"

React knows how to render both.

Unity Analogy

Imagine you have a GameObject:

Canvas
└── Button
    ├── Icon
    └── Text

The Button GameObject has child objects.

In React:

<Button>
    <Icon />
    Reserve Table
</Button>

The <Icon /> and "Reserve Table" are effectively the children of the Button component.

React doesn't use a Transform hierarchy like Unity, but the idea of nesting things inside another thing is very similar.