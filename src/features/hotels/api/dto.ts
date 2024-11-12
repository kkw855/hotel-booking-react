export type HotelDto = {
  id: string
  userId: string
  title: string
  // TODO: 빠진 필드
  // titleSearch
  description: string
  image: string
  country: string
  state: string
  city: string
  locationDescription: string
  gym: boolean
  spa: boolean
  bar: boolean
  laundry: boolean
  restaurant: boolean
  shopping: boolean
  freeParking: boolean
  bikeRental: boolean
  freeWifi: boolean
  movieNights: boolean
  swimmingPool: boolean
  coffeeShop: boolean
  addedAt: Date
  updatedAt: Date
}
