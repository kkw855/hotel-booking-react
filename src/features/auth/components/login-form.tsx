// TODO: 로그인, 로그 아웃 기능 추가 하기
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export const LoginForm = () => {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <h1 className="text-xl font-bold">Sign in</h1>
        <p className="text-gray-400">to continue to stay-savvy</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <form>
          <Button
            type="button"
            variant="outline"
            size="lg"
            className="flex w-full justify-start gap-4"
            asChild
          >
            {/* TODO: */}
            <Link to="http://localhost:3000">
              <FcGoogle className="h-6 w-6" />
              Continue with Google
            </Link>
          </Button>
        </form>
        <div className="flex items-center text-center">
          <Separator className="w-5/12" />
          <p className="w-full">or</p>
          <Separator className="w-5/12" />
        </div>
      </CardContent>
      <CardFooter>
        No account?
        <Button className="px-2 text-gray-500" variant="link">
          Sign up
        </Button>
      </CardFooter>
    </Card>
  )
}
