import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Package, Info, Phone, FileText, Shield, Truck, RotateCcw, Cookie, Scale, MapPin } from 'lucide-react';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
const mainItems = [{
  title: "Home",
  url: "/",
  icon: Home
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
  return <Sidebar>
      <SidebarContent className="bg-zinc-950">
        

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