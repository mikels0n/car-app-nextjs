import prisma from '@/utils/prisma'
import Link from 'next/link'

const fetchCarDetail = async (id: string) => {
  const car = await prisma.car.findUnique({
    where: {
      id: id,
    },
    include: {
      model: true,
      brand: true,
    },
  })
  return car
}

const CarDetailPage = async ({ params }: { params: { id: string } }) => {
  const car = await fetchCarDetail(params.id)

  return (
    <div className="w-screen flex flex-col items-center">
      <div className="border-2 p-6 rounded-lg mt-5 bg-white border-slate-400 shadow-xl">
        <div className="text-2xl font-bold mb-3">
          {car?.brand.name} {car?.model.name}
        </div>
        <div className="w-96 text-justify mb-3">{car?.description}</div>
        <div className="flex mb-3">
          <div className="flex ">
            <p className="font-semibold mb-3">Location:&nbsp;</p>
            <p>{car?.location}</p>
          </div>
          <div className="flex ml-auto mb-3">
            <p className="font-semibold">Year:&nbsp;</p>
            <p>{car?.year}</p>
          </div>
          <div className="flex ml-auto mb-3">
            <p className="font-semibold mb-3">Price:&nbsp;</p>
            <p>{car?.price}</p>
          </div>
        </div>
        <Link
          href={'/'}
          className="w-full border-2 rounded-lg p-2 border-red-300 hover:bg-red-100"
        >
          Back to HomePage
        </Link>
      </div>
    </div>
  )
}

export default CarDetailPage
