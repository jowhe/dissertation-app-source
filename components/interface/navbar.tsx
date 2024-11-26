import Link from 'next/link'
import React from 'react'

import SettingsDropdown from "@/components/interface/SettingsDropdown"
import { Input } from '../ui/input'

const Navbar = () => {
  return (
    <div className="border-b shadow-lg px-7 py-3">
      <nav className="flex justify-between gap-x-6">
        <Link
          href="/"
        ><h1 className='text-3xl'>Task Tracker</h1></Link>
        <ul className="flex lg:gap-x-10 lg:justify-evenly">
          <li className="my-auto">
            <Link
              href="/"
              ><p>Link</p></Link>
          </li>
          <li className="my-auto">
            <Link
              href="/"
              ><p>Link</p></Link>
          </li>
          <li className="my-auto">
            <Link
              href="/"
              ><p>Link</p></Link>
          </li>
          <li className="my-auto">
            <Input
              type='text'
              placeholder='Search Tasks'
            />
          </li>
          <li className="my-auto">
            <SettingsDropdown />
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar