import { LogOut } from 'lucide-react'
import { FaBed } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { ThemeToggle } from '@/components/theme'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useUser } from '@/lib/auth'

import { SearchInput } from './search-input'

export const Navbar = () => {
  const user = useUser()

  console.log('Navbar', JSON.stringify(user.data, null, 2))

  return (
    <nav className="sticky top-0 border border-b-primary/10">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between gap-4 p-4 xl:px-20">
        <Link to="/" className="flex items-center gap-1">
          <FaBed className="h-8 w-8 text-blue-500" />
          <span className="font-bold">StaySavvy</span>
        </Link>

        <SearchInput />

        <div className="flex items-center gap-8">
          <ThemeToggle />
          {user.data ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src={user.data?.image} alt={user.data?.name} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  {/* TODO: 로그 아웃 */}
                  <Button variant="ghost" size="sm" className="h-6 gap-2 p-0">
                    <LogOut size={15} /> Sign out
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button variant="outline">
              <Link to="/login">Sign in</Link>
            </Button>
          )}
        </div>
      </div>
    </nav>
  )
}
