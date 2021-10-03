import React, { Component } from "react";
import AdminData from "../../services/AdminData";
import AdminStorage from "./AdminStorage";

export default class AdminDataAdd extends Component {
    constructor(props) {
        super(props);
        this.onChangeProjectName = this.onChangeProjectName.bind(this);
        this.onChangeProjectAgency = this.onChangeProjectAgency.bind(this);
        this.onChangeLocationLat = this.onChangeLocationLat.bind(this);
        this.onChangeLocationLng = this.onChangeLocationLng.bind(this);
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
            locationlat: "",
            locationlng: "",
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
    onChangeLocationLat(e) {
        this.setState({
            locationlat: e.target.value,
        });
    }
    onChangeLocationLng(e) {
        this.setState({
            locationlng: e.target.value,
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
    onChangeImgPoster(url) {
        this.setState({
            img_poster_url: url,
        });
    }
    onChangeImgQRCode(url) {
        this.setState({
            img_qrcode_url: url,
        });
    }
    saveProject() {
        let data = {
            project_name: this.state.project_name,
            project_agency: this.state.project_agency,
            location: this.state.locationlat+','+this.state.locationlng,
            description: this.state.description,
            contact: this.state.contact,
            category: this.state.category,
            img_poster_url: this.state.img_poster_url,
            img_qrcode_url: this.state.img_qrcode_url,
            published: true

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
            locationlat: "",
            locationlng: "",
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
                                <label htmlFor="project_name">ชื่อโครงการ</label>
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
                                <label htmlFor="project_agency">ชื่อหน่วยงาน</label>
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
                            <div className="form-group grid grid-cols-2 gap-14">
                            <div>
                                    <label htmlFor="locationlat">latitude</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="locationlat"
                                        required
                                        value={this.state.locationlat}
                                        onChange={this.onChangeLocationLat}
                                        name="locationlat"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="locationlng">longtitude</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="locationlng"
                                        required
                                        value={this.state.locationlng}
                                        onChange={this.onChangeLocationLng}
                                        name="locationlng"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">คำอธิบาย</label>
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
                                <label htmlFor="contact">ข้อมูลติดต่อ</label>
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
                            {/* <div className="form-group">
                                <label htmlFor="category">หมวดหมู่</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="category"
                                    required
                                    value={this.state.category}
                                    onChange={this.onChangeCategory}
                                    name="category"
                                />
                            </div> */}
                            <div className="form-group">
                                <p>เลือกหมวดหมู่</p>
                                <label htmlFor="category" class="text-white dark:text-gray-200">Select</label>
                                    <select class="block w-full px-4 py-2 mt-0 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                    value={this.state.category}
                                    onChange={this.onChangeCategory}
                                    >
                                        <option>โควิด-19</option>
                                        <option>เด็ก</option>
                                        <option>สตรี</option>
                                        <option>ผู้สูงอายุ</option>
                                        <option>ผู้ป่วยและผู้พิการ</option>
                                        <option>ศาสนา</option>
                                        <option>สัตว์ป่าและธรรมชาติ</option>
                                        <option>สังคมและชุมชน</option>
                                        <option>โรงพยาบาล</option>
                                        <option>การศึกษา</option>
                                        <option>สัตว์จรจัด</option>
                               
                                    </select>
                            </div>
                            <p className="mt-5">
                                เลือกรูปโปสเตอร์:
                                <AdminStorage urlFirebaseStorage={this.onChangeImgPoster} />
                                <img src={this.state.img_poster_url} width="200"/>
                            </p>
                            <br></br>
                            <p>
                                เลือกรูปQR-code:
                                <AdminStorage urlFirebaseStorage={this.onChangeImgQRCode} />
                                <img src={this.state.img_qrcode_url}  width="200"/>
                            </p>

                            <button onClick={this.saveProject} className="btn btn-success mt-5">
                                Submit
                            </button>
                        </div>
                    )}
                </div>
            </article >
        );
    }
}
