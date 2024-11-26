"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DropdownMenuTriggerProps } from "@radix-ui/react-dropdown-menu"

import React, { useState } from 'react'
import { FaCog } from "react-icons/fa"
import { FaChevronUp, FaChevronDown, FaBars, FaA,  } from "react-icons/fa6"

const SettingsDropdown = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <DropdownMenu onOpenChange={toggle}>
      <DropdownMenuTrigger className="flex gap-x-1"><FaCog /> {isOpen ? <FaChevronUp size={12} className="mt-auto" /> : <FaChevronDown size={12} className="mt-auto" /> }</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="text-center">Page Settings</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem><b>Larger Text</b></DropdownMenuItem>
        <DropdownMenuItem>Normal Text</DropdownMenuItem>
        <DropdownMenuSeparator/>
        <DropdownMenuItem>Dark Mode</DropdownMenuItem>
        <DropdownMenuItem>Light Mode</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default SettingsDropdown