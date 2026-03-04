import LightDarkToggle from './light-dark-toggle';
import LocationDropdown from './dropdowns/location';
import MapTypeDropdown from './dropdowns/map-type';
import type { MapTypeEnum } from '@/utils/map-type-enum';

type Props = {
  selectedLocation: string;
  setSelectedLocation: (location: string) => void;
  setMapType: (mapType: MapTypeEnum) => void;
};

export default function DesktopHeader({
  selectedLocation,
  setSelectedLocation,
  setMapType,
}: Props) {
  return (
    <header className="flex flex-col gap-4 pb-8 2xl:flex-row 2xl:items-center 2xl:justify-between 2xl:gap-0">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl! font-bold!">Weather Dashboard</h1>
        <div className="hidden lg:block 2xl:hidden">
          <LightDarkToggle />
        </div>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:gap-0 2xl:gap-8">
        <div className="flex gap-4">
          <h1 className="text-2xl font-semibold">Location:</h1>
          <LocationDropdown onChange={setSelectedLocation} selectedLocation={selectedLocation} />
        </div>
        <div className="flex gap-4">
          <h1 className="text-2xl font-semibold">Map Type:</h1>
          <MapTypeDropdown onChange={setMapType} />
        </div>
      </div>
      <div className="hidden 2xl:block">
        <LightDarkToggle />
      </div>
    </header>
  );
}
