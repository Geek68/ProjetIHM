"use client"
import Landing from "./landing/page"
import LandingMobile from "./landingMobil/page"
export default function Home() {

  return (
    <>
        <div className="hidden sm:block">
         <Landing/>
      </div>
      <div className="block sm:hidden">
         <LandingMobile/>
      </div>
    </>
  )
}
