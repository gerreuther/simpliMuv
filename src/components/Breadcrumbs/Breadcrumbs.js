"use client";

import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const pathname = usePathname().split("/");
};

export default Breadcrumbs;
