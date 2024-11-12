import { Button } from '@/components/ui/button'

export const HomeRoute = () => {
  const A: number = 'abc'
  console.log(A)
  // const session = useSession()
  //
  // console.log('Home Route', session)
  //
  // if (!session?.data?.user) return <div>Unauthorized</div>

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button>Shadcn Button</Button>
      <div className="animate-in fade-in zoom-in">...</div>
      <div className="duration-300 animate-out slide-out-to-left slide-out-to-top">
        ...
      </div>
    </div>
  )
}
