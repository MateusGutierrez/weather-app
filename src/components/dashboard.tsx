import { Suspense, useRef, useState } from "react"
import DesktopHeader from "./desktop-header"
import MobileHeader from "./mobile-header"
import { MapTypeEnum } from "@/utils/map-type-enum"
import { useTheme } from "@/providers/theme-provider"
import CurrentWeatherSkeleton from "./skeletons/current-weather"
import HourlyForecastSkeleton from "./skeletons/hourly-forecast"
import AdditionalInfoSkeleton from "./skeletons/additional-info"
import DailyForecastSkeleton from "./skeletons/daily-forecast"
import { useQuery } from "@tanstack/react-query"
import { getGeocode } from "@/api"
import SidePanel from "./side-panel"

type Props = {}

export default function dashboard({}: Props) {
    const [selectedLocation, setSelectedLocation] = useState("Blumenau")
  const [mapType, setMapType] = useState<MapTypeEnum>(MapTypeEnum.Precipitation)
    const [mapClickCount, setMapClickCount] = useState(0)
  const { theme, toggleTheme } = useTheme()
    const latRef = useRef<number>(0)
  const lonRef = useRef<number>(0)
    const { data: geocodeData } = useQuery({
    queryKey: ["geocode", selectedLocation],
    queryFn: () => getGeocode(selectedLocation),
  })
    const { lat, lon } =
    selectedLocation === "custom"
      ? { lat: latRef.current, lon: lonRef.current }
      : (geocodeData?.[0] ?? { lat: 0, lon: 0 })
const onMapClick = (lat: number, lon: number) => {
    setSelectedLocation("custom")
    latRef.current = lat
    lonRef.current = lon
    setMapClickCount(mapClickCount + 1)
  }
  return (
    <>
        <MobileHeader/>
        <section className="p-8 lg:pt-8 pt-[calc(var(--header-height)+1rem)] w-full lg:w-[calc(100vw-var(--sidebar-width))] 2xl:h-screen overflow-y-scroll">
            <DesktopHeader selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation} setMapType={setMapType} />
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 2xl:grid-rows-4 gap-4 overflow-hidden 2xl:h-[calc(100vh-72.53px-64px)] p-2">
        {/* Map */}
                <div className="col-span-1 md:col-span-2 2xl:col-span-4 h-120 2xl:h-auto 2xl:row-span-2 overflow-hidden order-1 relative">
                {/* <Map lat={lat} lon={lon} type={mapType} onMapClick={onMapClick} /> */}
                {/* <MapLegend type={mapType} /> */}
                </div>
                {/* Current weather */}
                <div className="col-span-1 2xl:row-span-2 order-2">
                <Suspense fallback={<CurrentWeatherSkeleton />}>
                    {/* <CurrentWeather coords={{ lat, lon }} /> */}
                </Suspense>
                </div>
                {/* Hourly forecast */}
                <div className="col-span-1 md:col-span-2 2xl:col-span-2 2xl:row-span-1 2xl:order-3 order-4">
                <Suspense fallback={<HourlyForecastSkeleton />}>
                    {/* <HourlyForecast coords={{ lat, lon }} /> */}
                </Suspense>
                </div>
                {/* Daily forecast */}
                <div className="col-span-1 2xl:col-span-1 2xl:row-span-2 2xl:order-4 order-3">
                <Suspense fallback={<DailyForecastSkeleton />}>
                    {/* <DailyForecast coords={{ lat, lon }} /> */}
                </Suspense>
                </div>
                {/* Additional info */}
                <div className="col-span-1 md:col-span-2 2xl:col-span-2 md:row-span-1 order-5">
                <Suspense fallback={<AdditionalInfoSkeleton />}>
                    {/* <AdditionalWeatherInfo coords={{ lat, lon }} /> */}
                </Suspense>
                </div>
            </div>
            <SidePanel lat={lat} lon={lon} />
        </section>
    </>
  )
}