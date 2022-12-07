import { Link, useParams } from "react-router-dom";
import { DataTable } from "../../components/DataTable";
import { Loading } from "../../components/Loading";
import { ProcessedDriver, ProcessedDropoffLocation } from "../../types";
import { useDriversInfo } from "./driverInfoHooks";
import { AssignLocationDropdown } from "./AssignLocationDropdown";
import { useQuery } from "react-query";
import { API_BASE_URL } from "../../httpUtils";
//Assets
import car from "../../assets/car.svg";
import driving from "../../assets/driving.svg";
import { useFutureEventById } from "../eventHook";
import { Navbar } from "../../components/Navbar/Navbar";

//Takes in ProcessedDriver array and formats data for DataTable component
function processDriversForTable(
  drivers: ProcessedDriver[],
  processedDropOffLocations: ProcessedDropoffLocation[],
  refetchDrivers: any
) {
  let output = [];
  for (let i = 0; i < drivers.length; i++) {
    const curDriver = drivers[i];
    let curRow = [
      curDriver.id, //id
      i + 1, //#
      curDriver.firstName,
      curDriver.lastName,
      curDriver.timeSlot,
      curDriver.deliveryCount,
      curDriver.zipCode,
      curDriver.vehicle,
      curDriver.restrictedLocations.join(", "),
      <AssignLocationDropdown
        locations={processedDropOffLocations.sort((a, b) =>
          a.dropOffLocation < b.dropOffLocation ? -1 : 1
        )}
        driver={curDriver}
        refetchDrivers={refetchDrivers}
      />,
    ];
    output.push(curRow);
  }
  return output;
}

//TODO: Make this code cleaner
function processDropoffLocationsForTable(
  drivers: ProcessedDriver[],
  processedDropOffLocations: ProcessedDropoffLocation[]
) {
  let output = [];
  for (let i = 0; i < processedDropOffLocations.length; i++) {
    const curLocation = processedDropOffLocations[i];
    let curRow = [
      curLocation.id, //id
      i + 1, //#
      "Coordinator Information", //TODO: coordinator information
      curLocation.dropOffLocation,
      curLocation.address,
      curLocation.neighborhood,
      curLocation.startTime,
      curLocation.endTime,
      curLocation.deliveriesAssigned,
      <ul className="scrollbar-thin flex w-[600px] gap-4 overflow-x-auto pb-2">
        {drivers
          .filter((d) => d.dropoffLocations.some((l) => l === curLocation.id))
          .map((d) => {
            return (
              <li className="flex min-w-fit shrink-0 items-center gap-1 rounded-full bg-newLeafGreen py-1 px-3 text-xs font-semibold text-white shadow-sm shadow-newLeafGreen sm:text-sm md:text-base">
                {d.firstName + " " + d.lastName}
              </li>
            );
          })}
      </ul>,
    ];
    output.push(curRow);
  }
  return output;
}
//Tailwind classes
const label = "text-sm md:text-base lg:text-xl ";
const text = "text-sm font-bold text-newLeafGreen md:text-base lg:text-xl";
const sectionHeader =
  "flex items-start gap-2 text-lg font-bold text-newLeafGreen lg:text-3xl";
const sectionHeaderIcon = "w-6 lg:w-10";

export function DriverLocationInfo() {
  const { eventId } = useParams();
  const { event, eventStatus, eventError } = useFutureEventById(eventId);
  const {
    driversInfo,
    refetchDrivers,
    driversInfoIsLoading,
    driversInfoIsError,
    driversInfoError,
  } = useDriversInfo();
  console.log("driversInfo", driversInfo);

  const {
    data: dropoffLocations,
    status: dropoffLocationsStatus,
    error: dropoffLocationsError,
  } = useQuery(["fetchDropOffLocations"], async () => {
    const resp = await fetch(`${API_BASE_URL}/api/dropoff-locations`);
    if (!resp.ok) {
      const data = await resp.json();
      throw new Error(data.messsage);
    }
    return resp.json();
  });
  console.log("dropoffLocations", dropoffLocations);

  if (
    driversInfoIsLoading ||
    dropoffLocationsStatus === "loading" ||
    dropoffLocationsStatus === "idle"
  ) {
    return (
      <div className="relative h-full">
        <Loading size="large" thickness="extra-thicc" />
      </div>
    );
  }
  if (driversInfoIsError || dropoffLocationsStatus === "error") {
    const error = driversInfoError || dropoffLocationsError;
    console.error(error);
    return <div>Error...</div>;
  }
  //This shouldn't be necessary but TypeScript isn't smart enough to know that this can't be undefined
  if (driversInfo === undefined) {
    console.error("driversInfo is undefined");
    return <div>Error...</div>;
  }

  if (event === undefined) {
    console.error(
      `Something went wrong. Event ${event} not found in futureEvents list.`
    );
    return <div>Error...</div>;
  }
  return (
    <>
      <Navbar />
      <div className="p-6 lg:px-14 lg:py-10">
        <Link to={`/events/${eventId}`}>
          <button
            className="shrink-0 rounded-full bg-pumpkinOrange px-4 text-base font-semibold text-white shadow-sm shadow-newLeafGreen transition-all hover:-translate-y-0.5 hover:shadow-md hover:shadow-newLeafGreen md:px-10 md:py-1"
            type="button"
          >
            Go Back
          </button>
        </Link>
        <div className="h-4" />
        <div className="mb-16 mt-5 space-y-5">
          <div className={sectionHeader}>
            <img className={sectionHeaderIcon} src={car}></img>
            <h1>Delivery and Location Information</h1>
          </div>

          <div className="flex flex-wrap items-center gap-8">
            <div>
              <p className={label}>Event Date</p>
              <p className={text}>{event.dateDisplay}</p>
            </div>
            <div>
              <p className={label}>Event Time</p>
              <p className={text}>{event.time}</p>
            </div>
            <div>
              <p className={label}>Main Location</p>
              <p className={text}>{event.mainLocation}</p>
            </div>
          </div>
        </div>

        <div className={sectionHeader}>
          <img className={sectionHeaderIcon} src={driving}></img>
          <h1>Driver Information</h1>
        </div>
        <div className="h-8" />
        <div className="h-screen">
          <DataTable
            columnHeaders={[
              "#",
              "First Name",
              "Last Name",
              "Time Slot",
              "Delivery Count",
              "Zip Code",
              "Vehicle",
              "Restricted Locations",
              "Assign Location",
            ]}
            dataRows={processDriversForTable(
              driversInfo,
              dropoffLocations,
              refetchDrivers
            )}
          />
        </div>

        <div className="h-8" />
        <div className={sectionHeader}>
          <img className={sectionHeaderIcon} src={driving}></img>
          <h1>Location Information</h1>
        </div>
        <div className="h-8" />

        <div className="h-screen">
          <DataTable
            columnHeaders={[
              "#",
              "Coordinator Information",
              "Site Name",
              "Address",
              "Neighborhood",
              "Start Time",
              "End Time",
              "Deliveries Assigned",
              "Matched Drivers",
            ]}
            dataRows={processDropoffLocationsForTable(
              driversInfo,
              dropoffLocations
            )}
          />
        </div>
      </div>
    </>
  );
}