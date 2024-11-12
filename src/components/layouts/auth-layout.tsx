import { ReactNode /*useEffect*/ } from 'react'
// import { useNavigate } from 'react-router-dom'

import { Head } from '@/components/seo'
// import { useUser } from '@/lib/auth'

type LayoutProps = {
  title: string
  children: ReactNode
}

export const AuthLayout = ({ title, children }: LayoutProps) => {
  // const user = useUser();

  // const navigate = useNavigate();

  // 로그인 상태면 홈페이지로 이동
  // useEffect(() => {
  //   if (user.data) {
  //     navigate('/', {
  //       replace: true,
  //     });
  //   }
  // }, [user.data, navigate]);

  return (
    <>
      <Head title={title} />
      {children}
    </>
  )
}
