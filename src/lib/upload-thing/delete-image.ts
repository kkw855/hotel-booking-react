import { useMutation } from '@tanstack/react-query'

import { api } from '@/lib/api-client'
import { MutationConfig } from '@/lib/react-query'

export const deleteImage = async ({ imageUrl }: { imageUrl: string }) => {
  const imageKey = imageUrl.substring(imageUrl.lastIndexOf('/') + 1)

  return await api.delete(`/api/uploadthing/${imageKey}`)
}

type UseDeleteImageOptions = {
  mutationConfig?: MutationConfig<typeof deleteImage>
}

export const useDeleteImage = ({ mutationConfig }: UseDeleteImageOptions) => {
  const { onSuccess, ...restConfig } = mutationConfig || {}

  return useMutation({
    onSuccess: (...args) => {
      onSuccess?.(...args)
    },
    ...restConfig,
    mutationFn: deleteImage,
  })
}
