'use client'

import CarList from '@/components/CarList'
import CarSearchForm from '@/components/CarSearchForm'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useState } from 'react'

const Home = () => {
  const [model, setModel] = useState<string>('')
  const [brand, setBrand] = useState<string>('')
  const [location, setLocation] = useState<string>('')

  const { data: brands } = useQuery({
    queryKey: ['brands'],
    queryFn: async () => {
      return (await fetch('/api/brands')).json()
    },
    throwOnError: true,
  })

  const { data: models } = useQuery({
    queryKey: ['models'],
    queryFn: async () => {
      return (await fetch('/api/car-models')).json()
    },
    throwOnError: true,
  })

  const { data: cars, isFetching: isCarsFetching } = useQuery({
    queryKey: ['cars', { location, model, brand }],
    queryFn: async () => {
      return (
        await fetch(
          `/api/cars?location=${location}&model=${model}&brand=${brand}`
        )
      ).json()
    },
    placeholderData: keepPreviousData,
    throwOnError: true,
  })

  const handleSearch = async (data: {
    location: string
    model: string
    brand: string
  }) => {
    setLocation(data.location)
    setModel(data.model)
    setBrand(data.brand)
  }

  if (!brands || !models || !cars) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-8/12 p-4 mt-4 border-2 rounded-lg border-slate-400 bg-white shadow-xl">
        <h1 className="text-4xl text-center">VSE Car Dealership</h1>
        <CarSearchForm
          models={models.data}
          brands={brands.data}
          onSearch={handleSearch}
        />
        <div>Search results:</div>
        {isCarsFetching && <div>Loading cars...</div>}
        {!isCarsFetching && <CarList cars={cars.data} />}
      </div>
    </div>
  )
}

export default Home
