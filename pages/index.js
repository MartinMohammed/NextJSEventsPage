import { Fragment } from "react";
import Head from "next/head";

// components
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import EventList from "../components/events/event-list";

// utilities
import { getFeaturedPosts } from "../lib/posts-util";
import { getFeaturedEvents } from "../dummy-data";

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <EventList items={featuredEvents} />
    // <Fragment>

    //   <Head>
    //     <title>Max' Blog</title>
    //     <meta
    //       name="description"
    //       content="I post about programming and web development."
    //     />
    //   </Head>
    //   <Hero />
    //   <FeaturedPosts posts={props.posts} />
    // </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
