import { generateUploadButton } from '@uploadthing/react'

export const UploadButton = generateUploadButton({
  // TODO: .env 사용
  url: 'http://localhost:3000/api/uploadthing',
})
