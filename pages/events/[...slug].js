import React from "react";
import { useRouter } from "next/router";

// Utilities
import { getFilteredEvents } from "../../dummy-data";

// Components
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

const FilteredEventsPage = () => {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  // +filteredYear = NaN => Not a number
  const filteredYearNumber = +filterData[0];
  const filteredMonthNumber = +filterData[1];

  const notAValidYear =
    isNaN(filteredYearNumber) ||
    filteredYearNumber > 2030 ||
    filteredYearNumber < 2021;

  const notAValidMonth =
    isNaN(filteredMonthNumber) ||
    filteredMonthNumber < 1 ||
    filteredMonthNumber > 12;

  if (notAValidYear || notAValidMonth) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>;
          <div className="center">
            <Button link="/events">Show All Events</Button>
          </div>
        </ErrorAlert>
      </>
    );
  }
  const dateFilter = { year: filteredYearNumber, month: filteredMonthNumber };
  const filteredEvents = getFilteredEvents(dateFilter);

  const noEventsFound = !filteredEvents || filteredEvents.length === 0;
  if (noEventsFound) {
    // Valid filter but they are no events for the filter
    return (
      <>
        <ErrorAlert>
          <p>
            No events found for the chosen filter:{" "}
            {`Year: ${filteredYearNumber}, Month: ${filteredMonthNumber}`} !
          </p>
          <div className="center">
            <Button link="/events">Show All Events</Button>
          </div>
        </ErrorAlert>
      </>
    );
  }

  const date = new Date(filteredYearNumber, filteredMonthNumber - 1);
  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />;
    </>
  );
};

export default FilteredEventsPage;
