import React, { Component } from "react";
import AdminData from "../../services/AdminData";
import AdminStorage from "./AdminStorage";
import { db } from "../..//firebase";
import { Link } from "react-router-dom";

export default class AdminDataEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: [],
      key: this.props.match.params.id,
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
    this.getDataFromFirebase = this.getDataFromFirebase.bind(this);
    this.onChangeProjectName = this.onChangeProjectName.bind(this);
    this.onChangeProjectAgency = this.onChangeProjectAgency.bind(this);
    this.onChangeLocationLat = this.onChangeLocationLat.bind(this);
    this.onChangeLocationLng = this.onChangeLocationLng.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeContact = this.onChangeContact.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeImgPoster = this.onChangeImgPoster.bind(this);
    this.onChangeImgQRCode = this.onChangeImgQRCode.bind(this);
    this.updateTutorial = this.updateTutorial.bind(this);
  }

  componentDidMount() {
    db.ref(`/project`).on("value", this.getDataFromFirebase);
  }

  getDataFromFirebase(items) {
    let project = [];
    items.forEach((item) => {
      let key = item.key;
      let data = item.val();
      if (key === this.props.match.params.id) {
        let lat = parseFloat(data.location.split(",")[0]);
        let lng = parseFloat(data.location.split(",")[1]);
        console.log(lat);
        console.log(lng);
        project.push({
          key: key,
          project_name: data.project_name,
          project_agency: data.project_agency,
          locationlat: lat,
          locationlng: lng,
          description: data.description,
          contact: data.contact,
          category: data.category,
          img_poster_url: data.img_poster_url,
          img_qrcode_url: data.img_qrcode_url,
          published: data.published,
        });
      }
    });
    this.setState({
      project_name: project[0].project_name,
      project_agency: project[0].project_agency,
      locationlat: project[0].locationlat,
      locationlng: project[0].locationlng,
      description: project[0].description,
      contact: project[0].contact,
      category: project[0].category,
      img_poster_url: project[0].img_poster_url,
      img_qrcode_url: project[0].img_qrcode_url,
    });
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

  updateTutorial() {
    const data = {
      project_name: this.state.project_name,
      project_agency: this.state.project_agency,
      location: this.state.locationlat + "," + this.state.locationlng,
      description: this.state.description,
      contact: this.state.contact,
      category: this.state.category,
      img_poster_url: this.state.img_poster_url,
      img_qrcode_url: this.state.img_qrcode_url,
      published: true,
    };

    AdminData.update(this.state.key, data)
      .then(() => {
        this.setState({
          message: "The tutorial was updated successfully!",
          submitted: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const addPageStyles = {
      background: "#3b4a8c",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      zIndex: "5",
      padding: "0px 5px",
      maxWidth: "auto",
      minHeight: "100vh",
    };
    return (
      <article style={addPageStyles}>
        {this.state.submitted ? (
          <div className="mt-28 mb-8 bg-gray-100 p-5 xs:p-6 sm:p-8 md:p-10 rounded-3xl pt-6 w-full xs:w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12">
            <div>
              <h2 className="text-5xl mb-3 font-medium text-center text-green-500">
                <i className="far fa-check-circle mr-4"></i>
                แก้ไขข้อมูลโครงการเสร็จสมบูรณ์ !
              </h2>
            </div>
            <div className="flex items-center flex-col mt-10">
              <Link to={"/admin"}>
                <button className=" cursor-pointer m-2 bg-yellow-500 hover:bg-yellow-500 focus:bg-yellow-800 shadow-lg px-5 py-2 inline-block  text-green-50 hover:text-white rounded">
                  <div className={"white-text"} style={{ fontSize: 20 }}>
                    ย้อนกลับ
                  </div>
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="mt-28 mb-8 bg-gray-100 p-5 xs:p-6 sm:p-8 md:p-10 rounded-3xl pt-6 w-full xs:w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12">
            <div>
              <h2 className="text-4xl mb-3 font-medium text-center">
                แก้ไขข้อมูลโครงการ
              </h2>
            </div>
            <div>
              <label htmlFor="project_name" className="text-lg text-gray-900">
                ชื่อโครงการ
              </label>
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
              <label htmlFor="project_agency" className="text-lg text-gray-900">
                ชื่อหน่วยงาน
              </label>
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
                <label htmlFor="locationlat" className="text-lg text-gray-900">
                  latitude
                </label>
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
                <label htmlFor="locationlng" className="text-lg text-gray-900">
                  longtitude
                </label>
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
              <label htmlFor="description" className="text-lg text-gray-900">
                คำอธิบาย
              </label>
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
              <label htmlFor="contact" className="text-lg text-gray-900">
                ข้อมูลติดต่อ
              </label>
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
            <div className="text-lg text-gray-900">
              <p>เลือกหมวดหมู่</p>
              <label htmlFor="category" class="hidden  ">
                โควิด-19
              </label>
              <select
                class=" w-/12 block px-4 py-2 mt-0 p-0 text-gray-700 bg-white border border-gray-300 rounded-xl shadow"
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
                <option>ภัยพิบัติ</option>
              </select>
            </div>
            <div className="flex flex-wrap gap-8">
              <div className="text-lg text-gray-900 mt-3">
                <p>เลือกรูปโปสเตอร์:</p>
                <div className="flex items-center justify-start w-full border-4 border-dashed p-4 mt-2 ml-2">
                  <label
                    className="flex flex-col rounded-lg w-52 xs:w-96 h-36 p-10 group text-center"
                    style={{
                      backgroundImage: `url(${this.state.img_poster_url})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100% auto",
                      opacity: "1",
                      backgroundPosition: "center",
                    }}
                  >
                    <div>
                      <div className="h-full w-full text-center flex flex-col items-center justify-center opacity-20 text-gray-900">
                        {/* <i className="fas fa-cloud-upload-alt text-7xl"></i> */}
                        <p className="pointer-none text-gray-900 mt-5">
                          รูปภาพตัวอย่าง
                        </p>
                      </div>
                      <AdminStorage
                        urlFirebaseStorage={this.onChangeImgPoster}
                      />
                    </div>
                    <div className=" w-30 cursor-pointer bg-blue-400 hover:bg-blue-200 focus:bg-blue-800 shadow-lg py-2 inline-block  text-green-50 hover:text-white rounded mt-12">
                      เลือกรูปภาพ
                    </div>
                  </label>
                </div>
              </div>
              <div className="text-lg text-gray-900 mt-3">
                <p>เลือกรูปQR-code:</p>
                <div className="flex items-center justify-start w-full border-4 border-dashed p-4 mt-2 ml-2">
                  <label
                    className="flex flex-col rounded-lg w-24 h-36 p-10 group text-center"
                    style={{
                      backgroundImage: `url(${this.state.img_qrcode_url})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100% auto",
                      opacity: "1",
                      backgroundPosition: "center",
                    }}
                  >
                    <div>
                      <div className="h-full w-full text-center flex flex-col items-center justify-center opacity-20 text-gray-900">
                        {/* <i className="fas fa-cloud-upload-alt text-7xl"></i> */}
                        <p className="pointer-none text-gray-900 mt-0 ml-2">
                          รูปภาพตัวอย่าง
                        </p>
                      </div>
                      <AdminStorage
                        urlFirebaseStorage={this.onChangeImgQRCode}
                      />
                    </div>
                    <div className=" w-28 -ml-11 cursor-pointer bg-blue-400 hover:bg-blue-200 focus:bg-blue-800 shadow-lg py-2 inline-block  text-green-50 hover:text-white rounded mt-10">
                      เลือกรูปภาพ
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-row-reverse mt-8 ">
              <button
                onClick={this.updateTutorial}
                className="cursor-pointer bg-green-600 hover:bg-green-500 focus:bg-green-800 shadow-xl px-8 py-2 inline-block  text-green-50 hover:text-white rounded"
              >
                ยืนยัน
              </button>
            </div>
          </div>
        )}
      </article>
    );
  }
}
