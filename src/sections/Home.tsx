import { AddParkingSlotButton } from "../components/AddParkingSlotButton";
import { Map } from "../components/Map";
import { SearchParkingSlotButton } from "../components/SearchParkingSlotButton";
export function Home() {
  return (
    <main>
      <Map />
      <div className="flex gap-20 absolute top-[90%] left-[50%] transform -translate-x-1/2">
        <AddParkingSlotButton />
        <SearchParkingSlotButton />
      </div>
    </main>
  );
}
