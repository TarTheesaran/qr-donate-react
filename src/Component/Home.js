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
            <article className="bg-gray-100 p-3 pt-20 sm:p-6 sm:pt-24 md:p-12 md:pt-32">
                <div>
                    <ProjectCard></ProjectCard>
                </div>
            </article >

        );
    }
}