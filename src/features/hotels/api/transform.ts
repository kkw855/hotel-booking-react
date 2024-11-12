import { Hotel } from '@/domain'

import { HotelDto } from './dto'

export function dtoToHotel(dto: HotelDto): Hotel {
  return {
    id: dto.id,
    userId: dto.userId,
    title: dto.title,
    // TODO: 빠진 필드
    // titleSearch
    description: dto.description,
    image: dto.image,
    country: dto.country,
    state: dto.state,
    city: dto.city,
    locationDescription: dto.locationDescription,
    gym: dto.gym,
    spa: dto.spa,
    bar: dto.bar,
    laundry: dto.laundry,
    restaurant: dto.restaurant,
    shopping: dto.shopping,
    freeParking: dto.freeParking,
    bikeRental: dto.bikeRental,
    freeWifi: dto.freeWifi,
    movieNights: dto.movieNights,
    swimmingPool: dto.swimmingPool,
    coffeeShop: dto.coffeeShop,
  }
}
