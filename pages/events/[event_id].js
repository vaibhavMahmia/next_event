import { useRouter } from "next/router";
import { getEventById } from "../../dummy_data";
import { Fragment } from "react";
import { EventSummary } from "../../components/event_detail/EventSummary";
import { EventLogistics } from "../../components/event_detail/EventLogistics";
import { EventContent } from "../../components/event_detail/EventContent";

const EventDetailPage = () => {
    const router = useRouter();
    const event = getEventById(router.query.event_id);
    if (!event) return <p>No Event Found !</p>;

    return <Fragment>
        <EventSummary title={event.title}/>
        <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title}/>
        <EventContent>
            <p>{event.description}</p>
        </EventContent>
    </Fragment>;
}
export default EventDetailPage;