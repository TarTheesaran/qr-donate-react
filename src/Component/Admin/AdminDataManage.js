import React, { Component } from "react";
import AdminData from "../../services/AdminData";

export default class AdminDataManage extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.updatePublished = this.updatePublished.bind(this);
        this.deleteTutorial = this.deleteTutorial.bind(this);

        this.state = {
            currentTutorial: {
                key: null,
                title: "",
                description: "",
                published: false,
            },
            message: "",
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const { tutorial } = nextProps;
        if (prevState.currentTutorial.key !== tutorial.key) {
            return {
                currentTutorial: tutorial,
                message: ""
            };
        }

        return prevState.currentTutorial;
    }

    componentDidMount() {
        this.setState({
            currentTutorial: this.props.tutorial,
        });
    }

    onChangeTitle(e) {
        const title = e.target.value;

        this.setState(function (prevState) {
            return {
                currentTutorial: {
                    ...prevState.currentTutorial,
                    title: title,
                },
            };
        });
    }

    onChangeDescription(e) {
        const description = e.target.value;

        this.setState((prevState) => ({
            currentTutorial: {
                ...prevState.currentTutorial,
                description: description,
            },
        }));
    }

    updatePublished(status) {
        AdminData.update(this.state.currentTutorial.key, {
            published: status,
        })
            .then(() => {
                this.setState((prevState) => ({
                    currentTutorial: {
                        ...prevState.currentTutorial,
                        published: status,
                    },
                    message: "The status was updated successfully!",
                }));
            })
            .catch((e) => {
                console.log(e);
            });
    }


    deleteTutorial() {
        AdminData.delete(this.state.currentTutorial.key)
            .then(() => {
                this.props.refreshList();
            })
            .catch((e) => {
                console.log(e);
            });
    }

    render() {
        const { currentTutorial } = this.state;

        return (
            <div>
                {currentTutorial ? (
                    <div className="edit-form">
                        <p>
                            <span>
                                ชื่อโครงการ:
                            </span>
                            <span>
                                {currentTutorial.project_name}
                            </span>
                        </p>
                        <p>
                            <span>
                                ชื่อหน่วยงาน:
                            </span>
                            <span>
                                {currentTutorial.project_agency}
                            </span>
                        </p>
                        <p>
                            <span>
                                พิกัดหน่วยงาน
                            </span>
                            <span>
                                {currentTutorial.location}
                            </span>
                            <span>
                                map
                            </span>
                        </p>
                        <p>
                            <span>คำอธิบาย:</span>
                            <span>
                                {currentTutorial.description}
                            </span>
                        </p>
                        <p>
                            <span>
                                ข้อมูลติดต่อ:
                            </span>
                            <span>
                                {currentTutorial.contact}
                            </span>
                        </p>
                        <p>
                            <span>
                                หมวดหมู่:
                            </span>
                            <span>
                                {currentTutorial.category}
                            </span>
                        </p>
                        <p>
                            <span>
                                รูปภาพโปสเตอร์:
                            </span>
                            <span>
                                <a id="img_poster" target="_blank" href={currentTutorial.img_poster}>แสดงรูปภาพ</a>
                            </span>

                        </p>
                        <p>
                            <span>
                                รูปภาพ QR-code:
                            </span>
                            <span>
                                <a id="img_qrcode" target="_blank" href={currentTutorial.img_qrcode}>แสดงรูปภาพ</a>
                            </span>
                        </p>

                        {currentTutorial.published ? (
                            <button
                                className="m-3 bg-green-500 btn"
                                onClick={() => this.updatePublished(false)}
                            >
                                UnPublish
                            </button>
                        ) : (
                            <button
                                className="m-3 bg-green-500 btn"
                                onClick={() => this.updatePublished(true)}
                            >
                                Publish
                            </button>
                        )}

                        <button
                            className="m-3 bg-red-500 btn"
                            onClick={this.deleteTutorial}
                        >
                            Delete
                        </button>

                        <p>{this.state.message}</p>
                    </div>
                ) : (
                    <div>
                        <p>โปรดเลือกโครงการของท่าน....</p>
                    </div>
                )}
            </div>
        );
    }
}
