"use client";
import React, { useEffect, useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [categories, setCategories] = useState<{ slug: string; name: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

 
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://dummyjson.com/products/categories");
        const data = await response.json();
        console.log(data);
        setCategories(data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className={cn(" fixed top-2 inset-x-0 max-w-2xl mx-auto z-50 ", className)}>
      <Menu setActive={setActive}>
        
        <Link href="/">
          <MenuItem setActive={setActive} active={active} item="Home" />
        </Link>
        <MenuItem setActive={setActive} active={active} item="Categories">
  <div className="grid grid-cols-2 gap-4 text-sm">
    {loading ? (
      <span className="col-span-2 text-center">Loading...</span>
    ) : (
      categories.map(({ slug, name }) => (
        <HoveredLink href={`/products/category/${encodeURIComponent(slug)}`} key={slug}>
          {name}
        </HoveredLink>
      ))
    )}
  </div>
</MenuItem>
        <Link href="/about">
          <MenuItem setActive={setActive} active={active} item="About" />
        </Link>
        <Link href="/contacts">
          <MenuItem setActive={setActive} active={active} item="Contact" />
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;


