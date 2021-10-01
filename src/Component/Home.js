import React from 'react';
import ProjectCard from "../Component/Card/ProjectCard";
import data from "../data/data";
export default class Home extends React.Component {

    render() {
        const style = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'

        }
        return (
            <article>
                <div>
                    <div className="h-full grid gap-2 grid-rows-3 my-3 px-5 w-auto grid-cols-1 md:grid-cols-2 md:grid-rows-4 lg:grid-cols-2 xl:md:grid-rows-4 xl:grid-cols-2 2xl:grid-cols-3">
                        {/* {data.map((project) => (
                            <ProjectCard project={project} key={project.id_project} />
                        ))} */}
                    </div>
                </div>
            </article>

        );
    }
}