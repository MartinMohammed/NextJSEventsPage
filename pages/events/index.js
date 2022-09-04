import React from "react";
import { useRouter } from "next/router";

// Data
import { getAllEvents } from "../../dummy-data";

// Components
import EventList from "../../components/events/event-list";

import EventsSearch from "../../components/events/events-search";

const AllEventsPage = () => {
  // hooks
  const router = useRouter();

  const allEvents = getAllEvents();

  function findEventsHandler(selectedYear, selectedMonth) {
    // Navigate user programmatically to the dynamic segements of the application
    // used to determine / filter out the specific event the user is searching for

    // [...slug]
    const navigationSlugs = `${selectedYear}/${selectedMonth}`;
    router.push(`/events/${navigationSlugs}`);
  }

  return (
    <div>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={allEvents} />
    </div>
  );
};

export default AllEventsPage;
