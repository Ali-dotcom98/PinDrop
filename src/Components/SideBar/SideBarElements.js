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
        label: "My Notes",
        icon: Notebook,
        route: "/notes",
    },
    {
        label: "Settings",
        icon: Settings,
        route: "/settings",
    },
    {
        label: "Support",
        icon: HeartPlus,
        route: "/support",
    }
];
export default sidebarItems;
