import React, { Component } from "react";
import AdminData from "../../services/AdminData";
import AdminDataManage from "./AdminDataManage";

export default class AdminDataList extends Component {
    constructor(props) {
        super(props);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveTutorial = this.setActiveTutorial.bind(this);
        this.removeAllTutorials = this.removeAllTutorials.bind(this);
        this.onDataChange = this.onDataChange.bind(this);

        this.state = {
            tutorials: [],
            currentTutorial: null,
            currentIndex: -1,
        };
    }

    componentDidMount() {
        AdminData.getAll().on("value", this.onDataChange);
    }

    componentWillUnmount() {
        AdminData.getAll().off("value", this.onDataChange);
    }

    onDataChange(items) {
        let tutorials = [];

        items.forEach((item) => {
            let key = item.key;
            let data = item.val();
            tutorials.push({
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
        });

        this.setState({
            tutorials: tutorials,
        });
    }

    refreshList() {
        this.setState({
            currentTutorial: null,
            currentIndex: -1,
        });
    }

    setActiveTutorial(tutorial, index) {
        this.setState({
            currentTutorial: tutorial,
            currentIndex: index,
        });
    }

    removeAllTutorials() {
        AdminData.deleteAll()
            .then(() => {
                this.refreshList();
            })
            .catch((e) => {
                console.log(e);
            });
    }

    render() {
        const { tutorials, currentTutorial, currentIndex } = this.state;

        return (
            <article>
                <div className="list row">
                    <div className="col-md-6 mt-5 ml-4">
                        <h4>เอาไว้เคลียร์ข้อมูล</h4>

                        <button
                            className="m-3  btn btn-sm btn-danger bg-red-500"
                            onClick={this.removeAllTutorials}
                        >
                            Remove All
                        </button>
                    </div>
                </div>
            </article>
        );
    }
}
