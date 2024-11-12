import { Pencil, PencilLine, Trash } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { UseFormReturn, useWatch } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/form/button'
import { Checkbox } from '@/components/ui/form/checkbox'
import { Description } from '@/components/ui/form/description'
import { Input } from '@/components/ui/form/input'
import { Label } from '@/components/ui/form/label'
import { Option, Select } from '@/components/ui/form/select'
import { Textarea } from '@/components/ui/form/textarea'
import { ImageUpload } from '@/components/ui/image/image-upload'
import { Hotel } from '@/domain'
import { CreateHotelInput } from '@/features/hotels/api/create-hotel'
import { useDeleteHotel } from '@/features/hotels/api/delete-hotel'
import { useToast } from '@/hooks/use-toast'
import {
  getAllCountries,
  getCitiesByCountryState,
  getStatesByCountry,
} from '@/lib/countries'

export const HotelForm = ({
  hotel,
  register,
  control,
  formState: { errors, isSubmitting },
}: { hotel?: Hotel } & UseFormReturn<CreateHotelInput>) => {
  const countries = useMemo<Option[]>(() => getAllCountries(), [])
  const navigate = useNavigate()
  const { toast } = useToast()

  const [states, setStates] = useState<Option[]>([])
  const [cities, setCities] = useState<Option[]>([])

  const deleteHotelMutation = useDeleteHotel({
    mutationConfig: {
      onSuccess: () => {
        toast({
          variant: 'success',
          description: '🎉 Hotel Deleted!',
        })
        navigate('/app/hotel/add')
      },
      onError: () => {
        toast({
          variant: 'destructive',
          description: `Hotel deletion could not be completed!`,
        })
      },
    },
  })

  const [countryWatch, stateWatch] = useWatch({
    name: ['country', 'state'],
    control,
  })

  useEffect(() => {
    const states = getStatesByCountry(countryWatch)
    const cities = getCitiesByCountryState(countryWatch, stateWatch)
    console.log('states, cities', states, cities)
    setStates(states)
    setCities(cities)
  }, [countryWatch, stateWatch])

  console.log('HotelForm', countryWatch, stateWatch)

  return (
    <div className="flex flex-col gap-6 md:flex-row">
      <div className="flex flex-1 flex-col gap-6">
        <Input
          label="Hotel Title *"
          description="Provide your hotel name"
          error={errors['title']}
          registration={register('title')}
          placeholder="Beach Hotel"
        />
        <Textarea
          label="Hotel Description *"
          description="Provide a detailed description of your hotel"
          error={errors['description']}
          registration={register('description')}
          placeholder="Beach Hotel is parked with many awesome amenitie!"
        />

        <div className="flex flex-1 flex-col gap-6">
          <div>
            <Label>Choose Amenities</Label>
            <Description>Choose Amenities popular in your hotel</Description>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-8 p-4">
            <Checkbox label="Gym" name="gym" control={control} />
            <Checkbox label="Spa" name="spa" control={control} />
            <Checkbox label="Bar" name="bar" control={control} />
            <Checkbox
              label="Laundry Facillities"
              name="laundry"
              control={control}
            />
            <Checkbox label="Restaurant" name="restaurant" control={control} />
            <Checkbox label="Shopping" name="shopping" control={control} />
            <Checkbox
              label="FreeParking"
              name="freeParking"
              control={control}
            />
            <Checkbox label="BikeRental" name="bikeRental" control={control} />
            <Checkbox
              label="MovieNights"
              name="movieNights"
              control={control}
            />
            <Checkbox
              label="SwimmingPool"
              name="swimmingPool"
              control={control}
            />
            <Checkbox label="CoffeeShop" name="coffeeShop" control={control} />
          </div>
        </div>

        <ImageUpload
          label="Upload an Image *"
          description="Choose an image that will show-case your hotel nicely"
          error={errors['image']}
          name="image"
          control={control}
        />
      </div>

      <div className="flex flex-1 flex-col gap-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* TODO: country 선택 했을 때 state, city 초기화 */}
          <Select
            label="Select Country *"
            description="In which country is your property located?"
            placeholder="Select a Country"
            error={errors['country']}
            control={control}
            name="country"
            options={countries}
          />
          <Select
            label="Select State"
            description="In which state is your property located?"
            placeholder="Select a State"
            error={errors['state']}
            control={control}
            name="state"
            options={states}
            disabled={/*isLoading ||*/ states.length === 0}
          />
        </div>
        <Select
          label="Select City"
          description="In which town/city is your property located?"
          placeholder="Select a City"
          error={errors['city']}
          control={control}
          name="city"
          options={cities}
          disabled={/*isLoading ||*/ cities.length === 0}
        />
        <Textarea
          label="Location Description *"
          description="Provide a detailed location description of your hotel"
          error={errors['locationDescription']}
          registration={register('locationDescription')}
          placeholder="Located at the very end of the beach road!"
        />
        <div className="flex justify-between">
          {hotel?.id && (
            <Button
              type="submit"
              variant="ghost"
              className="max-w-[150px] text-destructive"
              icon={<Trash className="mr-2 h-4 w-4" />}
              isLoading={isSubmitting}
              disabled={isSubmitting}
              onClick={() =>
                deleteHotelMutation.mutate({
                  hotelId: hotel.id,
                  imageUrl: hotel.image,
                })
              }
            >
              {isSubmitting ? 'Deleting' : 'Delete'}
            </Button>
          )}
          {hotel?.id ? (
            <Button
              type="submit"
              className="max-w-[150px]"
              icon={<PencilLine className="mr-2 h-4 w-4" />}
              isLoading={isSubmitting}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Updating' : 'Update'}
            </Button>
          ) : (
            <Button
              type="submit"
              className="max-w-[150px]"
              icon={<Pencil className="mr-2 h-4 w-4" />}
              isLoading={isSubmitting}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Creating' : 'Create Hotel'}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
