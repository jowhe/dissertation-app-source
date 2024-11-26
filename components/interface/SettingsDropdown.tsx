"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import React, { useState } from 'react'
import { FaCog } from "react-icons/fa"
import { FaChevronUp, FaChevronDown,  } from "react-icons/fa6"

const SettingsDropdown = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <DropdownMenu onOpenChange={toggle}>
      <DropdownMenuTrigger className="flex gap-x-1"><FaCog size={18} className="hover:animate-spin" /> {isOpen ? <FaChevronUp size={12} className="mt-auto" /> : <FaChevronDown size={12} className="mt-auto" /> }</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="text-center">Page Settings</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup title="Accessibility Feature">
          <DropdownMenuItem><b>Larger Text</b></DropdownMenuItem>
          <DropdownMenuItem>Normal Text</DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator/>

        <DropdownMenuGroup title="Theme Setting">
          <DropdownMenuItem>Dark Mode</DropdownMenuItem>
          <DropdownMenuItem>Light Mode</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default SettingsDropdown