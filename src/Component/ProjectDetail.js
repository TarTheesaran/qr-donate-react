import React from 'react';
import { db } from '../firebase';
import GoogleMapShow from '../services/GoogleMapShow';

export default class ProjectDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            project: [],
            project_name: "",
            project_agency: "",
            location: "",
            description: "",
            contact: "",
            category: "",
            img_poster_url: "",
            img_qrcode_url: "",
            published: false,
        };
        this.getDataFromFirebase = this.getDataFromFirebase.bind(this);
    }


    componentDidMount() {
        db.ref(`/project`).on("value", this.getDataFromFirebase);
    }

    getDataFromFirebase(items) {
        let project = [];
        items.forEach((item) => {
            let key = item.key;
            let data = item.val();
            if (key == this.props.match.params.id) {
                console.log(data.img_poster_url);
                project.push({
                    key: key,
                    project_name: data.project_name,
                    project_agency: data.project_agency,
                    location: data.location,
                    description: data.description,
                    contact: data.contact,
                    category: data.category,
                    img_poster_url: data.img_poster_url,
                    img_qrcode_url: data.img_qrcode_url,
                    published: data.published,
                });
            }
            console.log(project);
        });

        this.setState({
            project: project,
        });
        this.setState({
            project_name: this.state.project[0].project_name,
            project_agency: this.state.project[0].project_agency,
            location: this.state.project[0].location,
            description: this.state.project[0].description,
            contact: this.state.project[0].contact,
            category: this.state.project[0].category,
            img_poster_url: this.state.project[0].img_poster_url,
            img_qrcode_url: this.state.project[0].img_qrcode_url,
        });
    }


    render() {
        const { project_name,
            project_agency,
            location,
            description,
            contact,
            category,
            img_poster_url,
            img_qrcode_url } = this.state;
        return (
            <article className=" bg-blue-200" >
                <div className="mt-10 max-w-6xl  border-4 border-gray-400 rounded-3xl mr-auto ml-auto p-14 z-30 relative bg-white">
                    <img className="" src={this.state.img_poster_url} width="100%" height="" />
                    <div className="mt-8">
                        <img className=" float-none md:float-right md:ml-12 mt-2 w-60 mr-auto ml-auto" src={this.state.img_qrcode_url} />
                        <h2 className="text-4xl text-gray-900">{this.state.project_name}</h2>
                        <h3 className="text-2xl text-gray-500 font-light">{this.state.project_agency}</h3>
                        <div className=" mt-8" style={{ textIndent: 50 }}>
                            <p className="text-lg">
                                {this.state.description}
                            </p>
                        </div>
                        <div>
                            <p className="mt-12">
                                <span className=" font-semibold">
                                    ข้อมูลติดต่อ:
                                </span>
                                <span className="ml-2">
                                    {this.state.contact}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="mt-10">
                        <GoogleMapShow></GoogleMapShow>
                    </div>
                </div >
            </ article >
        );
    }
}