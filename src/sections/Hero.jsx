import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import Button from "../components/Button"
import ShoeCard from "../components/ShoeCard"
import { shoes, statistics } from "../constants"
import { useState } from "react"

const Hero=() =>{

  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1)
  
  

  return (
    <section
      id='home'
      className='flex flex-col justify-center w-full min-h-screen gap-10 p-2 xl:flex-row max-container'
    >
    <div className='relative flex flex-col items-start justify-center w-full xl:w-2/5 max-xl:padding-x pt-28'>

      <p className="text-xl font-montserrat text-coral-red">
        Our Summer collections
      </p>

      <h1 className=" mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
         <span className="relative z-10 pr-10 xl:bg-white xl:whitespace-nowrap">The New Arrival</span>
         <br/>
         <span className="inline-block mt-3 text-coral-red">Nike</span>Shoes
        </h1>

        <p className="mt-6 text-lg leading-8 font-montserrat text-slate-gray mb-14 sm:max-w-sm"
        >Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        <Button label="Shop now" iconURL={arrowRight}/>

        <div className="flex flex-wrap items-start justify-start w-full gap-16 mt-20">
          {statistics.map((stat, index)=>(
            <div key={stat.label}>
              <p className="text-4xl font-bold font-palanquin">{stat.value}</p>
              <p className="leading-7 font-montserrat">{stat.label}</p>
            </div>
          ))}
        </div>
    </div>

    <div className="relative flex items-center justify-center flex-1 bg-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero">
      <img
        src={bigShoeImg}
        alt="shoe collection"
        width={610}
        height={500}
        className="relative z-10 object-contain"
      />
      <div className="absolute flex gap-4 sm:gap-g -bottom-[5%] sm:left-[10%] max-sm:px-6 "> 
      {shoes.map((shoe)=>(
        <ShoeCard  
          imgURL ={shoe} // Passing the shoe object as imgURL prop to ShoeCard
          changeBigShoeImage={(shoe)=>setbigShoeImg(shoe)} // Passing the update function as changeBigShoeImage prop
          bigShoeImg={bigShoeImg} // Passing the current bigShoeImg state as a prop
        />
      ))}
    </div>
    </div>
    
    </section>
  )
}

export default Hero
