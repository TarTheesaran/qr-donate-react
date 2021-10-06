import React from 'react';
import ProjectCard from "../Component/Card/ProjectCard";
import { Link } from 'react-router-dom';
export default class Home extends React.Component {

    render() {
        const style = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'

        }
        return (
            <article className=" pt-16 sm:pt-18 md:pt-24">
                <div>
                    <ProjectCard></ProjectCard>
                </div>
            </article >

        );
    }
}