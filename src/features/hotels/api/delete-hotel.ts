import { useMutation } from '@tanstack/react-query'

import { api } from '@/lib/api-client'
import { MutationConfig } from '@/lib/react-query'
import { deleteImage } from '@/lib/upload-thing/delete-image'

const deleteHotel = async ({
  hotelId,
  imageUrl,
}: {
  hotelId: string
  imageUrl: string
}) => {
  // TODO: async 1 개 이상 호출할 때
  await deleteImage({ imageUrl })
  return await api.delete(`/hotels/${hotelId}`)
}

type UseDeleteHotelOptions = {
  mutationConfig?: MutationConfig<typeof deleteHotel>
}

export const useDeleteHotel = ({
  mutationConfig,
}: UseDeleteHotelOptions = {}) => {
  const { onSuccess, ...restConfig } = mutationConfig || {}

  return useMutation({
    onSuccess: (...args) => {
      onSuccess?.(...args)
    },
    ...restConfig,
    mutationFn: deleteHotel,
  })
}
