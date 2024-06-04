import { CarWithDeps } from '@/types/prismaTypes'
import Link from 'next/link'

const CarItem = ({ car }: { car: CarWithDeps }) => {
  return (
    <Link
      href={`car/${car.id}`}
      className="flex cursor-pointer rounded-lg border-2 mt-2 p-2"
    >
      <div className=" w-full">
        <p className="text-2xl font-semibold">{car.model.name}</p>
        <p className="text-xl ">{car.brand.name}</p>
      </div>
      <div>
        <p className="text-2xl font-semibold text-right">{car.price},-</p>
        <p className="text-xl text-right">{car.location}</p>
      </div>
    </Link>
  )
}

export default CarItem
