import Image from "next/image"
import getCountries from "../libs/GetCountries"

export default async function Home() {

  const data = await getCountries()
  const oceania = data.filter(country => country.region === 'Oceania')
  const countries = oceania.map(country => (
    <article className="border-4 rounded-lg py-6 flex flex-col items-center justify-center">
      <Image className="m-auto" src={country.coatOfArms.svg}  width={250} height={250}/>
      <h2>Country Name: <span  className="font-bold">{country.name.common}</span></h2>
      <p>Country Capital: {country.capital}</p>
    </article>
  ))
  return (
    <div>
     <h1 className="uppercase text-center font-bold text-sky-400 py-5">Oceanian Countries</h1>
     <div className="text-[20px] grid md:grid-cols-3">{countries}</div>


    
      </div>
  )
}
