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
            <article className="bg-gray-100">
                <div>
                    <ProjectCard></ProjectCard>
                </div>
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full" src="/images/Covid.png" alt="Sunset in the mountains" />
                    <div class="px-6 py-4">
                        <div class="font-semibold text-xl mb-2">The Coldest Sunset</div>
                        <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, nulla!Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div class="px-6 pt-0 pb-2 text-right">
                        <Link target="_blank" to={`/detail/1`}>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2"><i clasName="fas fa-qrcode"></i>QR</span>
                        </a>
                        </Link>
                        <Link target="_blank" to={`/detail/1`}>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                More Detail
                            </span>
                        </Link>
                    </div>
                </div>
            </article >

        );
    }
}