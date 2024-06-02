import CarList from '@/components/CarList'
import prisma from '@/utils/prisma'

const getCars = async () => {
  const cars = await prisma.car.findMany({
    include: {
      model: true,
      brand: true,
    },
  })
  return cars
}

const HomePage = async () => {
  const cars = await getCars()
  return (
    <div>
      Home Page Game Page
      <CarList cars={cars} />
    </div>
  )
}

export default HomePage
