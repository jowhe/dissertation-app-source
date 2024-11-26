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
import { FaUserCircle } from "react-icons/fa"
import { FaChevronUp, FaChevronDown,  } from "react-icons/fa6"

const UserDropdown = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <DropdownMenu onOpenChange={toggle}>
      <DropdownMenuTrigger className="flex gap-x-1"><FaUserCircle size={18} /> {isOpen ? <FaChevronUp size={12} className="mt-auto" /> : <FaChevronDown size={12} className="mt-auto" /> }</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="text-center">My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup title="Account Feature">
          <DropdownMenuItem>Login</DropdownMenuItem>
          <DropdownMenuItem>Sign Up</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserDropdown