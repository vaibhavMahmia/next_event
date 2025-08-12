import { useRouter } from "next/router";
import { EventList } from "../../components/events/EventList";
import { EventsSearch } from "../../components/events/EventsSearch";
import { getAllEvents } from "../../dummy_data";

const AllEventsPage = () => {
    const events = getAllEvents();
    const router = useRouter();

    const findEventsHandler = (year, month) => router.push(`/events/${year}/${month}`);

    return <div>
        <EventsSearch onSearch={findEventsHandler}/>
        <EventList items={events}/>
    </div>;
}

export default AllEventsPage;