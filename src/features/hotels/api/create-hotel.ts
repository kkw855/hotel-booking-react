import * as S from '@effect/schema/Schema'
import { useMutation } from '@tanstack/react-query'

import { Hotel } from '@/domain'
import { api } from '@/lib/api-client'
import { MutationConfig } from '@/lib/react-query'

export const createHotelInputSchema = S.Struct({
  title: S.Trim.pipe(
    S.minLength(3, {
      message: () => 'Title must be at least 3 characters long',
    }),
  ),
  description: S.Trim.pipe(
    S.minLength(10, {
      message: () => 'Description must be at least 10 characters long',
    }),
  ),
  image: S.String.pipe(S.minLength(1, { message: () => 'Image is required' })),
  country: S.String.pipe(
    S.minLength(1, { message: () => 'Country is required' }),
  ),
  state: S.String,
  city: S.String,
  locationDescription: S.String.pipe(
    S.minLength(10, {
      message: () => 'Description must be at least 10 characters long',
    }),
  ),
  gym: S.Boolean,
  spa: S.Boolean,
  bar: S.Boolean,
  laundry: S.Boolean,
  restaurant: S.Boolean,
  shopping: S.Boolean,
  freeParking: S.Boolean,
  bikeRental: S.Boolean,
  freeWifi: S.Boolean,
  movieNights: S.Boolean,
  swimmingPool: S.Boolean,
  coffeeShop: S.Boolean,
})

export type CreateHotelInput = S.Schema.Type<typeof createHotelInputSchema>

const createHotel = async ({
  data,
}: {
  data: CreateHotelInput
}): Promise<Hotel> => {
  return api.post('/hotels', data)
}

type UseCreateHotelOptions = {
  mutationConfig?: MutationConfig<typeof createHotel>
}

export const useCreateHotel = ({ mutationConfig }: UseCreateHotelOptions) => {
  const { onSuccess, ...restConfig } = mutationConfig || {}

  return useMutation({
    onSuccess: (...args) => {
      onSuccess?.(...args)
    },
    ...restConfig,
    mutationFn: createHotel,
  })
}
