import { Helmet, HelmetData } from 'react-helmet-async'

type HeadProps = {
  title: string
  description?: string
}

// 상태 저장 헬멧 데이터 인스턴스를 수동으로 생성하고 해당 상태 저장 객체를 각 헬멧 인스턴스에 전달하여
// 선택적으로 컨텍스트 외부에서 헬멧을 사용할 수 있습니다.
const helmetData = new HelmetData({})

const DEFAULT = 'StaySavvy'

export const Head = ({ title, description }: HeadProps) => (
  <Helmet
    helmetData={helmetData}
    title={title ? `${title} | ${DEFAULT}` : DEFAULT}
  >
    <meta name="description" content={description} />
  </Helmet>
)
