const data = [
  {
    id: "dashboard",
    icon: "iconsminds-shop-4",
    label: "menu.app",
    to: "/dashboard/app/index",
    subs: [{
      icon: "simple-icon-briefcase",
      label: "menu.default",
      to: "/dashboard/app/index/default"
    },
    {
      icon: "simple-icon-pie-chart",
      label: "menu.analytics",
      to: "/dashboard/app/index/analytics"
    }]
  },
  {
    id: "personal",
    icon: "simple-icon-user",
    label: "Personal",
    to: "/dashboard/app/personal",
    subs: [{
      icon: "simple-icon-user-following",
      label: "menu.profile",
      to: "/dashboard/app/personal/profile"
    },
    {
      icon: "simple-icon-share",
      label: "menu.social",
      to: "/dashboard/app/personal/social"
    },
    {
      icon: "simple-icon-link",
      label: "menu.portfolio",
      to: "/dashboard/app/personal/portfolio"
    }]
  },
  {
    id: "business",
    icon: "iconsminds-digital-drawing",
    //label: "menu.pages",
    label: "Business",
    to: "/dashboard/app/business",
    subs: [{
      icon: "iconsminds-handshake",
      label: "Business",
      to: "/dashboard/app/business/business"
    },
    {
      icon: "simple-icon-credit-card",
      label: "Orders",
      to: "/dashboard/app/business/orders"
    },
    {
      icon: "iconsminds-speach-bubble",
      label: "menu.chat",
      to: "/dashboard/app/business/chat"
    },
    {
      icon: "simple-icon-layers",
      label: "Layout",
      to: "/dashboard/app/business/business"
    }]
  },
  {
    id: "product",
    icon: "simple-icon-pin",
    //label: "menu.applications",
    label: "Products",
    to: "/dashboard/app/products"
  },
  {
    id: "payment",
    icon: "iconsminds-gear",
    //label: "menu.applications",
    label: "Payment",
    to: "/dashboard/app/payment"
  },
  {
    id: "shipping",
    icon: "simple-icon-rocket",
    //label: "menu.applications",
    label: "Shipping",
    to: "/dashboard/app/shipping"
  },
  {
    id: "guaranty",
    icon: "iconsminds-clock",
    //label: "menu.applications",
    label: "Guaranty",
    to: "/dashboard/app/guaranty"
  },
  {
    id: "sales",
    icon: "iconsminds-link-2",
    //label: "menu.applications",
    label: "Sales Channels",
    to: "/dashboard/app/sales"
  },
];
export default data;