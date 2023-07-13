
import Image from "next/image"
import getCountries from "./libs/GetCountries"
import UseState from "./Components/UseState"
import {BiMap} from 'react-icons/bi'
import Link from "next/link"

// export let data2 = []


export default async function Home() {


  const data = await getCountries()

//  data2 = data.slice()


  const countries = data.length > 0 ? data.map(country => (
    <article className="border-4 rounded-lg py-6 flex flex-col items-center justify-center">
      <Image className="m-auto" src={country.coatOfArms.svg}  width={250} height={250}/>
      <h2>Country Name: <span  className="font-bold">{country.name.common}</span></h2>
      <p>Country Capital: {country.capital}</p> 
    <Link href={country.maps.googleMaps} target="_blank" title={`${country.name.common} on google map`} >
    <p><BiMap className="text-sky-700 text-4xl "/></p>
    </Link>
    </article>
  )) : (
      <h2>Country does not exist</h2>
  )
  return (
    <div>
      
        <h1 className="uppercase text-center font-bold text-sky-400 py-5">Countries In The World</h1>
        <UseState />  
        <div className="text-[20px] grid md:grid-cols-3">{countries}</div>

      </div>
  )
}
