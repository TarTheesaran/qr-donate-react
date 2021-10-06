import React, { Component } from "react";
import AdminData from "../../services/AdminData";
import { Link } from 'react-router-dom';

export default class AdminDataManage extends Component {
    constructor(props) {
        super(props);
        this.updatePublished = this.updatePublished.bind(this);
        this.deleteTutorial = this.deleteTutorial.bind(this);

        this.state = {
            project_data: {
                key: null,
                project_name: "",
                project_agency: "",
                location: "",
                description: "",
                contact: "",
                category: "",
                img_poster_url: "",
                img_qrcode_url: "",
                published: false,
            },
            message: "",
            show: false
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const { tutorial } = nextProps;
        if (prevState.project_data.key !== tutorial.key) {
            return {
                project_data: tutorial,
                message: ""
            };
        }

        return prevState.project_data;
    }

    componentDidMount() {
        this.setState({
            project_data: this.props.tutorial,
        });
    }


    updatePublished(status) {
        AdminData.update(this.state.project_data.key, {
            published: status,
        })
            .then(() => {
                if (status == true) {
                    this.setState((prevState) => ({
                        project_data: {
                            ...prevState.project_data,
                            published: status,
                        },
                        message: "เผยแพร่โครงการสำเร็จ !!",
                    }));
                }else{
                    this.setState((prevState) => ({
                        project_data: {
                            ...prevState.project_data,
                            published: status,
                        },
                        message: "ยกเลิกการเผยแพร่โครงการสำเร็จ !!",
                    }));
                }

            })
            .catch((e) => {
                console.log(e);
            });
    }


    deleteTutorial() {
        AdminData.delete(this.state.project_data.key)
            .then(() => {
                this.props.refreshList();
            })
            .catch((e) => {
                console.log(e);
            });
    }

    handleClick() {
        this.setState({ show: true });
      }

    render() {
        const { project_data,show } = this.state;

        return (
            <div>
                {project_data ? (
                    <div className="edit-form">
                        <p>
                            <span>
                                ชื่อโครงการ:
                            </span>
                            <span>
                                {project_data.project_name}
                            </span>
                        </p>
                        <p>
                            <span>
                                ชื่อหน่วยงาน:
                            </span>
                            <span>
                                {project_data.project_agency}
                            </span>
                        </p>
                        <p>
                            <span>
                                พิกัดหน่วยงาน
                            </span>
                            <span>
                                {project_data.location}
                            </span>
                            <span className=" text-red-400 ml-2 fas fa-map-marked-alt">
                            </span>
                        </p>
                        <p>
                            <span>คำอธิบาย:</span>
                            <span>
                                {project_data.description}
                            </span>
                        </p>
                        <p>
                            <span>
                                ข้อมูลติดต่อ:
                            </span>
                            <span>
                                {project_data.contact}
                            </span>
                        </p>
                        <p>
                            <span>
                                หมวดหมู่:
                            </span>
                            <span>
                                {project_data.category}
                            </span>
                        </p>
                        <p>
                            <span>
                                รูปภาพโปสเตอร์:
                            </span>
                            <span>
                                <a id="img_qrcode" target="_blank" href={project_data.img_poster_url}>แสดงรูปภาพ</a>
                            </span>

                        </p>
                        <p>
                            <span>
                                รูปภาพ QR-code:
                            </span>
                            <span>
                                <a id="img_qrcode" target="_blank" href={project_data.img_qrcode_url}>แสดงรูปภาพ</a>
                            </span>
                        </p>
                        <div className="flex flex-row-reverse">
                        {project_data.published ? (
                            <button
                            className="cursor-pointer m-2 bg-red-400 hover:bg-red-300 focus:bg-red-900 shadow-lg px-5 py-2 inline-block  text-green-50 hover:text-white rounded"
                                onClick={() => this.updatePublished(false)}
                            >
                                UnPublish
                            </button>
                        ) : (
                            <button
                            className="cursor-pointer m-2 bg-green-500 hover:bg-green-500 focus:bg-green-800 shadow-lg px-5 py-2 inline-block  text-green-50 hover:text-white rounded"
                                onClick={() => this.updatePublished(true)}
                            >
                                Publish
                            </button>
                        )}
                       <Link target="_blank" to={`/editproeject/${this.state.project_data.key}`}>
                            <button  className="cursor-pointer m-2 bg-yellow-500 hover:bg-yellow-400 focus:bg-yellow-800 shadow-lg px-5 py-2 inline-block  text-green-50 hover:text-white rounded">
                                Edit
                            </button>
                        </Link>
                       

                        <button
                             className="cursor-pointer m-2 bg-red-600 hover:bg-red-500 focus:bg-red-800 shadow-lg px-5 py-2 inline-block  text-green-50 hover:text-white rounded"
                            onClick={this.deleteTutorial}
                        >
                            Delete
                        </button>

                        </div>
                        <p className=" text-green-500">{this.state.message}</p>
                        </div>
                        ) : (
                            <div>
                                <p className="text-right">โปรดเลือกโครงการของท่าน....</p>
                        </div>
                )}
            </div>
        );
    }
}
