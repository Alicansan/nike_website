import { star } from "../assets/icons"

const ReviewCard = ({imgURL, feedback, rating, customerName}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={imgURL} alt={customerName} className="object-cover rounded-full w-[120px] h-[120px]"/>
      <p className="max-w-sm mt-8 text-center info-text">{feedback}</p>
      <div className="flex justify-center mt-3 gap-2.55 items-center" >
        <img src={star} width={24} height={24} className="m-0 objectcontain"/>
        <p className="font-montserrat text-late-gray">({rating})</p>
      </div>
      <h3 className="mt-1 text-3xl font-bold text-center font-palanquin">{customerName}</h3>
    </div>
  )
}

export default ReviewCard
