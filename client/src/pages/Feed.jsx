import React, { useEffect, useState } from "react";
import ScrollStack, {
  ScrollStackItem,
} from "../components/UI/react-bits/ScrollStack";
import BlogFeedCard from "../components/UI/custom-components/BlogFeedCard";
import api from "../components/api/axiosApi.js";
import { toast } from "react-toastify";
import ErrorScreen from "../components/UI/custom-components/ErrorScreen.jsx";

function Feed() {
  const [feed, setFeed] = useState([]);
  const fetchFeed = async () => {
    try {
      const newFeed = await api.get("/post/recent");
      setFeed(newFeed.data.posts);
    } catch (error) {
      console.log("Error fetching data");
      toast.error("Could not fetch the feed.");
    }
  };

  useEffect(() => {
    fetchFeed();
    console.log(feed)
  }, []);
  return (
    <>
      <div className="bg-white w-full">
        <div>
          {feed.length > 0 ? (
            <ScrollStack>
              {feed.map((e) => {
                return (
                  <ScrollStackItem key={e._id || idx}>
                    <BlogFeedCard
                      title={e.title}
                      uname={e.author.uname}
                      blogContent={e.blogContent}
                      postDate={e.createdAt.split('T')[0]}
                    />
                  </ScrollStackItem>
                );
              })}

              {/* <ScrollStackItem>
                <BlogFeedCard title='My love' uname='Baishakhi Pal' blogContent='I love my man so much....💗' postDate='15/09/2025' />
              </ScrollStackItem> */}
            </ScrollStack>
          ) : (
            <>
              <ErrorScreen />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Feed;
