import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button.tsx'

export const NotFoundRoute = () => (
  <div className="mt-52 flex flex-col items-center gap-4 font-semibold">
    <h4>404 - Not Found</h4>
    <p>Sorry, the page you are looking for does not exist.</p>
    <Button variant="outline" asChild>
      <Link to="/" replace>
        Go to Home
      </Link>
    </Button>
  </div>
)
