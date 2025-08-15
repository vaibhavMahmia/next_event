import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy_data";
import { EventList } from "../../components/events/EventList";

const FilteredEventsPage = () => {
    const router = useRouter();
    const filterData = router.query.slug;
    if (!filterData) return <p className="center">Loading...</p>;

    const filteredYear = +filterData[0];
    const filteredMonth = +filterData[1];
    if (isNaN(filteredYear) || isNaN(filteredMonth) || filteredYear > 2030 || filteredYear < 2021 || filteredMonth < 1 || filteredMonth > 12) return <p>Invalid filter, Please adjust your values!</p>;

    const filteredEvents = getFilteredEvents({ year: filteredYear, month: filteredMonth });
    if (!filteredEvents || filteredEvents.length === 0) return <p>No events found for the chosen filter!</p>;
    
    return <EventList items={filteredEvents}/>;
}
export default FilteredEventsPage;