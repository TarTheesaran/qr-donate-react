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
                    <ProjectCard></ProjectCard>
                </div>
            </article>

        );
    }
}