import React, { Component } from "react";
import AdminData from "../../services/AdminData";
import AdminStorage from "./AdminStorage";
import { Link } from 'react-router-dom';

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
            category: "โควิด-19",
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
            category: "โควิด-19",
            img_poster_url: "",
            img_qrcode_url: "",
            published: false,

            submitted: false,
        });
    }

    render() {
        const addPageStyles = {
            background:"#3b4a8c",
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            zIndex:"5",
            padding:"0px 5px",
            maxWidth:"auto",
            minHeight:"100vh"};
        return (
            <article style={addPageStyles}>
                {this.state.submitted ? (
                  <div className="mt-28 mb-8 bg-gray-100 p-5 xs:p-6 sm:p-8 md:p-10 rounded-3xl pt-6 w-full xs:w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12"> 
                      <div>   
                           <h2 className="text-5xl mb-3 font-medium text-center text-green-500">
                               <i className="far fa-check-circle mr-4"></i>
                               เพิ่มข้อมูลโครงการเสร็จสมบูรณ์ !
                          </h2>
                      </div>
                      <div className="flex items-center flex-col mt-10">
                        <Link to={'/admin'}>
                          <button className=" cursor-pointer m-2 bg-yellow-500 hover:bg-yellow-500 focus:bg-yellow-800 shadow-lg px-5 py-2 inline-block  text-green-50 hover:text-white rounded">
                            <a className={'white-text'} style={{ fontSize: 20 }}>ย้อนกลับ</a>
                          </button>
                        </Link>
                      </div>
                      
                    </div>
                ) : (
                    <div className="mt-28 mb-8 bg-gray-100 p-5 xs:p-6 sm:p-8 md:p-10 rounded-3xl pt-6 w-full xs:w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12"> 
                        <div>   
                            <h2 className="text-4xl mb-3 font-medium text-center">
                                เพิ่มข้อมูล
                            </h2>
                        </div>
                        <div>
                            <label htmlFor="project_name" className='text-lg text-gray-900'>ชื่อโครงการ</label>
                            <br></br>
                            <input
                                className="border-0 mt-1 mb-2 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-xl text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                type="text"
                                id="project_name"
                                required
                                name="project_name"
                                value={this.state.project_name}
                                onChange={this.onChangeProjectName}
                            />
                        </div>
                        <div>
                            <label htmlFor="project_agency"  className='text-lg text-gray-900'>ชื่อหน่วยงาน</label>
                            <br></br>
                            <input
                                className="border-0 mt-1 mb-2 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-xl text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                type="text"
                                id="project_agency"
                                required
                                name="project_agency"
                                value={this.state.project_agency}
                                onChange={this.onChangeProjectAgency}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="locationlat"  className='text-lg text-gray-900'>latitude</label>
                                <br></br>
                                <input
                                    className="border-0 mt-1 mb-2 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-xl text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    type="number"
                                    id="locationlat"
                                    required
                                    name="locationlat"
                                    value={this.state.locationlat}
                                    onChange={this.onChangeLocationLat}
                                />
                            </div>
                            <div>
                                <label htmlFor="locationlng"  className='text-lg text-gray-900'>longtitude</label>
                                <br></br>
                                <input
                                    className="border-0 mt-1 mb-2 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-xl text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    type="number"
                                    id="locationlng"
                                    required
                                    name="locationlng"
                                    value={this.state.locationlng}
                                    onChange={this.onChangeLocationLng}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="description" className='text-lg text-gray-900'>คำอธิบาย</label>
                            <br></br>
                            <textarea
                                className="h-24 border-0 mt-1 mb-2 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-xl text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                type="textarea"
                                id="description"
                                required
                                name="description"
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                            />
                        </div>
                        <div>
                            <label htmlFor="contact" className='text-lg text-gray-900'>ข้อมูลติดต่อ</label>
                            <br></br>
                            <textarea
                                className="h-16 border-0 mt-1 mb-2 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-xl text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                type="text"
                                id="contact"
                                required
                                name="contact"
                                value={this.state.contact}
                                onChange={this.onChangeContact}
                            />
                        </div>
                        <div className='text-lg text-gray-900'>
                            <p>เลือกหมวดหมู่</p>
                            <label htmlFor="category" class="hidden  ">โควิด-19</label>
                                <select class=" w-/12 block px-4 py-2 mt-0 p-0 text-gray-700 bg-white border border-gray-300 rounded-xl shadow"
                                value={this.state.category}
                                onChange={this.onChangeCategory}>
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
                        <div className="flex flex-wrap gap-8">
                            <div className='text-lg text-gray-900 mt-3'>
                                <p>
                                    เลือกรูปโปสเตอร์:
                                </p>
                                <AdminStorage urlFirebaseStorage={this.onChangeImgPoster} />
                            </div>
                            <div className='text-lg text-gray-900 mt-3'>
                                <p>
                                    เลือกรูปQR-code:
                                </p>
                                <AdminStorage urlFirebaseStorage={this.onChangeImgQRCode} />
                            </div>             
                        </div>  
                        <div className="flex flex-row-reverse mt-4 ">
                            <button onClick={this.saveProject} className="cursor-pointer bg-green-600 hover:bg-green-500 focus:bg-green-800 shadow-xl px-5 py-2 inline-block  text-green-50 hover:text-white rounded">
                                Submit
                            </button>
                        </div>
                    </div>
            )}
        </article >
        );
    }
}
