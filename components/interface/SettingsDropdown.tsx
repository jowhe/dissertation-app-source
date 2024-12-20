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
import { useTheme } from "@/context/ThemeContext"

const SettingsDropdown = () => {

  const [isOpen, setIsOpen] = useState(false);
  const {isDark, enableDark} = useTheme();
  const {isLight, enableLight} = useTheme();
  const {isLarge, enableLarge} = useTheme();

  const toggle = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <DropdownMenu onOpenChange={toggle}>
      <DropdownMenuTrigger className="flex gap-x-1"><FaCog size={18} className={`hover:animate-spin ${isOpen && `animate-spin`}`} /> {isOpen ? <FaChevronUp size={12} className="mt-auto" /> : <FaChevronDown size={12} className="mt-auto" /> }</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="text-center">Page Settings</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup title="Accessibility Feature">
          <DropdownMenuItem onClick={!isLarge ? enableLarge : undefined}><b>Larger Text</b></DropdownMenuItem>
          <DropdownMenuItem onClick={isLarge ? enableLarge : undefined}>Normal Text</DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator/>

        <DropdownMenuGroup title="Theme Setting">
          <DropdownMenuItem onClick={!isDark ? enableDark : undefined}>Dark Mode</DropdownMenuItem>
          <DropdownMenuItem onClick={!isLight ? enableLight : undefined}>Light Mode</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default SettingsDropdown