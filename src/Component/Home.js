import React from "react";
import ProjectCard from "../Component/Card/ProjectCard";
export default class Home extends React.Component {
  render() {
    return (
      <article className="pt-16 sm:pt-18 md:pt-24 h-screen">
        <div class="shadow flex ml-auto mr-14 w-3/4 xs:w-1/2 md:w-5/12 border-2 border-gray-400 mt-10 rounded-full bg-white cursor-not-allowed">
          <input class="w-full p-2 outline-none rounded-full text-xl pl-4 " type="text"></input>
          <button class="w-auto flex justify-end items-center text-blue-500 p-2 hover:text-blue-200  focus:text-gray-500 rounded-full">
            <i class="fas fa-search mr-1 text-lg"></i>
          </button>
        </div>
        <div>
          <ProjectCard></ProjectCard>
        </div>
      </article>
    );
  }
}
