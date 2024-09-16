import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const UserDropDown = () => {
  const user = useSelector((store) => store.user);
  const handleButton = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className=" md:absolute mr-2 mt-2 md:mt-0 top-3 right-16 z-10">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <MenuButton className="  inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ">
            <ChevronDownIcon
              aria-hidden="true"
              className="-mr-1 h-5 w-5 text-gray-400"
            />
          </MenuButton>
        </div>

        <MenuItems
          transition
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="py-1">
            <MenuItem>
              <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div>{user.displayName}</div>
                <div class="font-medium truncate">{user.email}</div>
              </div>
            </MenuItem>
            <MenuItem>
              <a
                href="/"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                Manage Profile
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="/"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                Transfer Profile
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="/"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                Account
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="/"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                Help Center
              </a>
            </MenuItem>

            <MenuItem>
              <button
                onClick={handleButton}
                type="submit"
                className="block w-full px-2 py-2  text-left text-sm hover:text-red-700 hover:font-bold text-gray-900 data-[focus]:bg-gray-100 "
              >
                Sign out of NetFilm-GPT
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>
    </div>
  );
};

export default UserDropDown;
