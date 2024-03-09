//
import {star} from '../assets/icons'
const PopularProductCard = ({imgURL, name, price, rating}) => {
  return (
    <div className="flex flex-col flex-1 w-full max-sm:w-full">
       <img src={imgURL} alt={name} className='w-[282px] h-[282px]' />
      <div className="mt-8 flex justify-start gap-2.5">
        <img
          src={star} alt="rating" width={24} height={24}
        />
        <p className='leading-normal text-l font-montserrat text-slate-gray'>({rating})</p>
      </div>
      <div>
        <h3 className='mt-2 text-2xl font-semibold leading-normal font-palanquin'>{name}</h3>
        <p className='mt-2 text-xl font-semibold leading-normal font-montserrat text-coral-red'>{price}</p>
        </div>
    </div>
  )
}

export default PopularProductCard
