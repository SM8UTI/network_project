"use client";

import { usePathname } from "next/navigation";
import { LayoutDashboardIcon, FolderIcon, UsersIcon, LockIcon, ShieldAlertIcon, WifiIcon, SettingsIcon } from "lucide-react";
import Link from "next/link";

// Define the menu items as an array of objects
const menuItems = [
  { href: "/", icon: LayoutDashboardIcon },
  { href: "/devices", icon: WifiIcon },
  { href: "/projects", icon: FolderIcon },
  { href: "/maintainance", icon: ShieldAlertIcon },
  { href: "/auth", icon: LockIcon },
  { href: "/accounts", icon: UsersIcon },
];

export default function Sidebar() {
  const pathname = usePathname();
  
  return (
    <div className="w-20 bg-background border-r flex flex-col justify-between items-center">
      <div className="w-full">
        <Link href="/">
          <div className="logo-container mx-auto flex size-16 items-center justify-center border-b">
          <svg xmlns="http://www.w3.org/2000/svg" width="54" height="41" fill="none" viewBox="0 0 54 41"><path fill="#FFF" d="M54 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path><path fill="#FFF" fill-rule="evenodd" d="M13.75 40.794C6.156 40.794 0 34.638 0 27.044V1h5v26.044a8.75 8.75 0 0 0 8.75 8.75c4.893 0 8.75-3.771 8.75-8.544h5v7.5a1.25 1.25 0 0 0 2.5 0v-8.875a6.25 6.25 0 0 1-7.5-6.125V7.25a6.25 6.25 0 1 1 12.5 0v27.5a1.25 1.25 0 1 0 2.5 0V7.25a6.25 6.25 0 1 1 12.5 0v27.5a6.25 6.25 0 0 1-10 5A6.222 6.222 0 0 1 36.25 41a6.222 6.222 0 0 1-3.75-1.25 6.251 6.251 0 0 1-9.466-2.47c-2.456 2.197-5.723 3.514-9.284 3.514Zm30-4.794c-.69 0-1.25-.56-1.25-1.25V7.25a1.25 1.25 0 1 1 2.5 0v27.5c0 .69-.56 1.25-1.25 1.25ZM30 19.75a1.25 1.25 0 0 1-2.5 0V7.25a1.25 1.25 0 1 1 2.5 0v12.5Z" clip-rule="evenodd"></path><path fill="#FFF" fill-rule="evenodd" d="M7.5 27.25a6.25 6.25 0 1 0 12.5 0v-20a6.25 6.25 0 1 0-12.5 0v20Zm6.25 1.25c-.69 0-1.25-.56-1.25-1.25v-20a1.25 1.25 0 1 1 2.5 0v20c0 .69-.56 1.25-1.25 1.25Z" clip-rule="evenodd"></path></svg>
          </div>
        </Link>

        <div className="icon-list flex flex-col mt-4 items-center">
          {menuItems.map((item, index) => (
            <div className="my-2 flex items-center w-full" key={index}>
              <div className="flex-1 flex justify-center items-center">
                <Link href={item.href}>
                  <div
                    className={`icon p-2 border w-full border-transparent hover:border-border rounded-sm transition ${
                      pathname === item.href ? "bg-primary" : ""
                    }`}
                  >
                    <item.icon size={20} />
                  </div>
                </Link>
              </div>
              {/* Change bg color if active */}
              <div className={`h-10 w-1 ml-auto rounded-tl-md rounded-bl-md ${pathname === item.href ? "bg-primary" : ""}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="settings-container flex size-16 items-center justify-center border-b">
        <Link href="/settings">
          <SettingsIcon size={20} />
        </Link>
      </div>
    </div>
  );
}
