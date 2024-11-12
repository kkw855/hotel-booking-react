import { DevTool } from '@hookform/devtools'
import { effectTsResolver } from '@hookform/resolvers/effect-ts'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useToast } from '@/hooks/use-toast'

import { createHotelInputSchema, useCreateHotel } from '../api/create-hotel'

import { HotelForm } from './hotel-form'

export const CreateHotel = () => {
  const navigate = useNavigate()
  const { toast } = useToast()

  const createHotelMutation = useCreateHotel({
    mutationConfig: {
      onSuccess: (res) => {
        toast({
          variant: 'success',
          description: '🎉 Hotel created!',
        })
        navigate(`/hotel/${res.id}`)
      },
      onError: () => {
        toast({
          variant: 'destructive',
          description: 'Something went wrong!',
        })
      },
    },
  })

  const form = useForm({
    resolver: effectTsResolver(createHotelInputSchema),
    defaultValues: {
      title: '',
      description: '',
      image: '',
      country: '',
      state: '',
      city: '',
      locationDescription: '',
      gym: false,
      spa: false,
      bar: false,
      laundry: false,
      restaurant: false,
      shopping: false,
      freeParking: false,
      bikeRental: false,
      freeWifi: false,
      movieNights: false,
      swimmingPool: false,
      coffeeShop: false,
    },
  })

  return (
    <FormProvider {...form}>
      <form
        className="space-y-6"
        onSubmit={form.handleSubmit((values) => {
          createHotelMutation.mutate({ data: values })

          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(1)
            }, 5000)
          })
        })}
      >
        {HotelForm(form)}
      </form>
      <DevTool control={form.control} />
    </FormProvider>
  )
}
