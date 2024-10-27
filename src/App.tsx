import { Button } from '@/components/ui/button.tsx'

function App() {
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

export default App
