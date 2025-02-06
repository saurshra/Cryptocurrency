import React from "react";
import "./Learn.css";

const Learn = () => {
  const learningResources = [
    {
      title: "Introduction to Cryptocurrency",
      videoId: "rYQgy8QDEBI",
    },
    {
      title: "How Crypto Exchanges Work",
      videoId: "phOs-phSTh4",
    },
  ];

  return (
    <div className="learn">
      <h1>Learn About Cryptocurrency</h1>
      <p>
        Watch the following videos to learn more about cryptocurrency and
        exchanges.
      </p>

      <div className="resources-list">
        {learningResources.map((resource, index) => (
          <div key={index} className="resource-item">
            <h3>{resource.title}</h3>
            <div className="video-container">
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${resource.videoId}`}
                title={resource.title}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Learn;
