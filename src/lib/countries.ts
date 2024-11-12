import { Country, State, City } from 'country-state-city'

import { Option } from '@/components/ui/form/select'

export const getAllCountries = (): Option[] =>
  Country.getAllCountries().map(({ name, isoCode }) => ({
    label: name,
    value: isoCode,
  }))

export const getCountryByCode = (countryCode: string) =>
  Country.getAllCountries().find((country) => country.isoCode === countryCode)

export const getStatesByCountry = (countryCode: string): Option[] =>
  State.getAllStates()
    .filter((state) => state.countryCode === countryCode)
    .map(({ name, isoCode }) => ({
      label: name,
      value: isoCode,
    }))

export const getStateByCode = (countryCode: string, stateCode: string) => {
  const state = State.getAllStates().find(
    (state) => state.countryCode === countryCode && state.isoCode === stateCode,
  )

  if (!state) return null

  return state
}

export const getCitiesByCountryState = (
  countryCode: string,
  stateCode: string,
): Option[] =>
  City.getAllCities()
    .filter(
      (city) =>
        city.countryCode === countryCode && city.stateCode === stateCode,
    )
    .map(({ name }) => ({
      label: name,
      value: name,
    }))
