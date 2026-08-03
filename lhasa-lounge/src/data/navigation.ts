export interface NavItem {
    label: string;
    href: string;
}

export const navigation: NavItem[] = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Menu",
        href: "/menu",
    },
    {
        label: "Gallery",
        href: "/gallery",
    },
    {
        label: "Contact",
        href: "/contact",
    },
];