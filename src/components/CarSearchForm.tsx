import SelectInput from './SelectInput'
import TextInput from './TextInput'
import { Brand, CarModel } from '@prisma/client'

interface CarSearchFormProps {
  models: CarModel[]
  brands: Brand[]

  onSearch: (data: { location: string; model: string; brand: string }) => void
}

const CarSearchForm = ({ models, brands, onSearch }: CarSearchFormProps) => {
  return (
    <form
      className="flex flex-col p-4 mt-4 w-96 border-2 rounded-lg "
      onSubmit={(event) => {
        event.preventDefault()
        const data = new FormData(event.target as HTMLFormElement)
        console.log(data.get('model'))
        onSearch({
          location: data.get('location') as string,
          model: data.get('model') as string,
          brand: data.get('brand') as string,
        })
      }}
    >
      <TextInput label="Location:" name="location" />
      <SelectInput
        label="Brand:"
        name="brand"
        items={[
          { value: '', label: '' },
          ...brands.map((brand) => ({
            label: brand.name,
            value: brand.name,
          })),
        ]}
      />
      <SelectInput
        label="Model:"
        name="model"
        items={[
          { label: '', value: '' },
          ...models.map((model) => ({
            label: model.name,
            value: model.name,
          })),
        ]}
      />
      <button type="submit" className="">
        Search
      </button>
    </form>
  )
}

export default CarSearchForm
