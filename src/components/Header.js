import React from 'react'
import nav from '../settings/main.json'
import Link from '../resolvers/Link'

import DarkmodeToggle from './DarkmodeToggle'
import Container from './UI/Container'

export default function Header() {
  return (
    <header className="flex h-16 border-b bg-white text-black dark:border-zinc-800 dark:bg-black dark:text-white">
      <Container className="m-auto flex items-center justify-between gap-20">
        <Link to="/" className="text-2xl font-bold ">
          Cerebratech.
        </Link>
        <div className="flex items-center">
          <nav className="flex gap-4">
            {nav.nav.map((item, i) => (
              <Link to={item.permalink} key={i}>
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="ml-6 flex items-center border-l border-slate-200 pl-6 dark:border-zinc-800">
            <DarkmodeToggle />

          </div>
        </div>
      </Container>
    </header>
  )
}
