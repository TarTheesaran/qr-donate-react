import React from "react";
import ProjectCard from "../Component/Card/ProjectCard";
export default class Home extends React.Component {
  render() {
    return (
      <article className="pt-16 sm:pt-18 md:pt-24 h-screen">
        <div>
          <ProjectCard></ProjectCard>
        </div>
      </article>
    );
  }
}
