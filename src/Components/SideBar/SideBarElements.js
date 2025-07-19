import { Home, Map, Plus, Notebook, Settings, HeartPlus } from "lucide-react"
const sidebarItems = [
    {
        label: "Dashboard",
        icon: Home,
        route: "/dashboard",
    },
    {
        label: "Wishlist",
        icon: Map,
        route: "/wishlist",
    },
    {
        label: "Add Trip",
        icon: Plus,
        route: "/add-trip",
    },
    {
        label: "Local Wish",
        icon: Notebook,
        route: "/LocalWish",
    },
    {
        label: "Support",
        icon: HeartPlus,
        route: "/support",
    },
    {
        label: "Settings",
        icon: Settings,
        route: "/settings",
    },
];
export default sidebarItems;
