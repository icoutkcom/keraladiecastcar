import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Package, Info, Phone, FileText, Shield, Truck, RotateCcw, Cookie, Scale, MapPin, X, Grid3X3 } from 'lucide-react';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { useSidebar } from '@/components/ui/sidebar';

const mainItems = [{
  title: "Home",
  url: "/",
  icon: Home
}, {
  title: "Categories",
  url: "/categories",
  icon: Grid3X3
}, {
  title: "All Products",
  url: "/products",
  icon: Package
}, {
  title: "About Us",
  url: "/about",
  icon: Info
}, {
  title: "Contact",
  url: "/contact",
  icon: Phone
}];
const policyItems = [{
  title: "Return & Refund Policy",
  url: "/return-refund-policy",
  icon: RotateCcw
}, {
  title: "Shipping Policy",
  url: "/shipping-policy",
  icon: Truck
}, {
  title: "Privacy Policy",
  url: "/privacy-policy",
  icon: Shield
}, {
  title: "Terms & Conditions",
  url: "/terms-conditions",
  icon: Scale
}, {
  title: "Warranty Policy",
  url: "/warranty-policy",
  icon: FileText
}, {
  title: "Cookie Policy",
  url: "/cookie-policy",
  icon: Cookie
}];
const legalItems = [{
  title: "Accessibility",
  url: "/accessibility",
  icon: Info
}, {
  title: "Sitemap",
  url: "/sitemap",
  icon: MapPin
}];

export function AppSidebar() {
  const { setOpenMobile } = useSidebar();

  const handleClose = () => {
    setOpenMobile(false);
  };

  return <Sidebar>
      <SidebarContent className="bg-zinc-950">
        <SidebarHeader className="border-b border-zinc-800 p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Menu</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClose}
              className="text-white hover:bg-zinc-800"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </SidebarHeader>

        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map(item => <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Policies</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {policyItems.map(item => <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>;
}
