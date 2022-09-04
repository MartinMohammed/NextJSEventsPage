import React from "react";
import { useRouter } from "next/router";

// Utilities
import { getEventById } from "../../dummy-data";

// Components
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";

const EventDetailPage = () => {
  const router = useRouter();
  const eventDetailId = router.query.eventId;

  const event = getEventById(eventDetailId);
  if (!event) {
    return (
      <>
        <ErrorAlert>
          <p>No event found!</p>
        </ErrorAlert>
      </>
    );
  }
  const { date, location, image, title, description } = event;

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={date}
        address={location}
        image={image}
        imageAlt={title}
      />
      <EventContent>
        <p>{description}</p>
      </EventContent>
    </>
  );
};

export default EventDetailPage;
