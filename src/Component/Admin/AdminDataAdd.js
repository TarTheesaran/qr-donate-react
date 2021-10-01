import React, { Component } from "react";
import AdminData from "../../services/AdminData";

export default class AdminDataAdd extends Component {
    constructor(props) {
        super(props);
        this.onChangeProjectName = this.onChangeProjectName.bind(this);
        this.onChangeProjectAgency = this.onChangeProjectAgency.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeContact = this.onChangeContact.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeImgPoster = this.onChangeImgPoster.bind(this);
        this.onChangeImgQRCode = this.onChangeImgQRCode.bind(this);
        this.saveProject = this.saveProject.bind(this);
        this.newTutorial = this.newTutorial.bind(this);

        this.state = {
            project_name: "",
            project_agency: "",
            location: "",
            description: "",
            contact: "",
            category: "",
            img_poster_url: "",
            img_qrcode_url: "",
            published: false,

            submitted: false,
        };
    }

    onChangeProjectName(e) {
        this.setState({
            project_name: e.target.value,
        });
    }
    onChangeProjectAgency(e) {
        this.setState({
            project_agency: e.target.value,
        });
    }
    onChangeLocation(e) {
        this.setState({
            location: e.target.value,
        });
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value,
        });
    }
    onChangeContact(e) {
        this.setState({
            contact: e.target.value,
        });
    }
    onChangeCategory(e) {
        this.setState({
            category: e.target.value,
        });
    }
    onChangeImgPoster(e) {
        this.setState({
            img_poster_url: e.target.value,
        });
    }
    onChangeImgQRCode(e) {
        this.setState({
            img_qrcode_url: e.target.value,
        });
    }
    saveProject() {
        let data = {
            project_name: this.state.project_name,
            project_agency: this.state.project_agency,
            location: this.state.location,
            description: this.state.description,
            contact: this.state.contact,
            category: this.state.category,
            img_poster_url: this.state.img_poster_url,
            img_qrcode_url: this.state.img_qrcode_url,
            published: false

        };

        AdminData.create(data)
            .then(() => {
                console.log("Created new item successfully!");
                this.setState({
                    submitted: true,
                });
            })
            .catch((e) => {
                console.log(e);
            });
    }
    newTutorial() {
        this.setState({
            project_name: "",
            project_agency: "",
            location: "",
            description: "",
            contact: "",
            category: "",
            img_poster_url: "",
            img_qrcode_url: "",
            published: false,

            submitted: false,
        });
    }

    render() {
        return (
            <article>
                <div className="submit-form" style={{
                    padding: '80px'
                }}>
                    {this.state.submitted ? (
                        <div>
                            <h4>You submitted successfully!</h4>
                            <button className="btn btn-success" onClick={this.newTutorial}>
                                Add
                            </button>
                        </div>
                    ) : (
                        <div>
                            <div className="form-group">
                                <label htmlFor="project_name">project_name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="project_name"
                                    required
                                    value={this.state.project_name}
                                    onChange={this.onChangeProjectName}
                                    name="project_name"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="project_agency">project_agency</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="project_agency"
                                    required
                                    value={this.state.project_agency}
                                    onChange={this.onChangeProjectAgency}
                                    name="project_agency"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="location">location</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="location"
                                    required
                                    value={this.state.location}
                                    onChange={this.onChangeLocation}
                                    name="location"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">description</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="description"
                                    required
                                    value={this.state.description}
                                    onChange={this.onChangeDescription}
                                    name="description"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contact">contact</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="contact"
                                    required
                                    value={this.state.contact}
                                    onChange={this.onChangeContact}
                                    name="contact"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="category">category</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="category"
                                    required
                                    value={this.state.category}
                                    onChange={this.onChangeCategory}
                                    name="category"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="img_poster_url">img_poster_url</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="img_poster_url"
                                    required
                                    value={this.state.img_poster_url}
                                    onChange={this.onChangeImgPoster}
                                    name="img_poster_url"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="img_qrcode_url">img_qrcode_url</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="img_qrcode_url"
                                    required
                                    value={this.state.img_qrcode_url}
                                    onChange={this.onChangeImgQRCode}
                                    name="img_qrcode_url"
                                />
                            </div>

                            <button onClick={this.saveProject} className="btn btn-success">
                                Submit
                            </button>
                        </div>
                    )}
                </div>
            </article>
        );
    }
}
