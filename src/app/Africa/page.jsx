import Image from "next/image"
import getCountries from "../libs/GetCountries"

export default async function Africa() {

  const data = await getCountries()
  const africa = data.filter(country => country.region === 'Africa')
  const countries = africa.map(country => (
    <article className="border-4 rounded-lg py-6 flex flex-col items-center justify-center">
      <Image className="m-auto" src={country.coatOfArms.svg}  width={250} height={250}/>
      <h2>Country Name: <span  className="font-bold">{country.name.common}</span></h2>
      <p>Country Capital: {country.capital}</p>
    </article>
  ))
  return (
    <div>
        <h1 className="uppercase text-center font-bold text-sky-400 py-5">African Countries</h1>
        <div className="text-[20px] grid md:grid-cols-3">{countries}</div>


    
      </div>
  )
}
