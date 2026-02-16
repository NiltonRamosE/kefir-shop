import {
  type LucideIcon,
} from "lucide-react"
import {
  IconReport,
  IconSettings,
  type Icon
} from "@tabler/icons-react"

export const routes = {
  base: "/",
  general: {
    login: "/login",
  },
};

export interface NavItem {
  title: string;
  url: string;
  icon: LucideIcon;
  isActive?: boolean;
  items?: {
    title: string;
    url: string;
    adminOnly?: boolean;
  }[];
  adminOnly?: boolean;
}

export interface NavSimpleItem {
  title: string;
  url: string;
  icon: Icon;
  type?: 'link' | 'search';
  allowedRoles?: string[];
}

export const navMainCollapse: NavItem[] = [];

export const navSimpleMain: NavSimpleItem[] = [
  {
    title: "Reportes",
    url: "/report",
    icon: IconReport,
    allowedRoles: ["admin"]
  },
];

export const navMainOptions: NavSimpleItem[] = [
   {
    title: "Configuración",
    url: "#",
    icon: IconSettings,
    type: 'link'
  },
];