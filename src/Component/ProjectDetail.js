import React from "react";
import { db } from "../firebase";
import GoogleMapShow from "../services/GoogleMapShow";

export default class ProjectDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: [],
      project_name: "",
      project_agency: "",
      location_lat: 0,
      location_lng: 0,
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
      if (key === this.props.match.params.id) {
        var lat = parseFloat(data.location.split(",")[0]);
        var lng = parseFloat(data.location.split(",")[1]);
        if(isNaN(lat) || isNaN(lng)){
          lat = 13.663552;
          lng = 100.6490457;
        }
        console.log(lat);
        console.log(lng);
        project.push({
          key: key,
          project_name: data.project_name,
          project_agency: data.project_agency,
          location_lat: lat,
          location_lng: lng,
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
      project: project,
    });
    this.setState({
      project_name: this.state.project[0].project_name,
      project_agency: this.state.project[0].project_agency,
      location_lat: this.state.project[0].location_lat,
      location_lng: this.state.project[0].location_lng,
      description: this.state.project[0].description,
      contact: this.state.project[0].contact,
      category: this.state.project[0].category,
      img_poster_url: this.state.project[0].img_poster_url,
      img_qrcode_url: this.state.project[0].img_qrcode_url,
    });
  }

  render() {
    return (
      <article className="mr-2 ml-2 bg-gray-100">
        <div className="card mt-5 md:mt-12 max-w-screen-xl focus:border-1 border-gray-400 rounded-3xl mr-auto ml-auto  z-30 relative bg-white">
          <img
            className=" relative z-5 rounded-t-3xl"
            src={this.state.img_poster_url}
            width="100%"
            alt ={this.state.project_name + this.state.project_agency + " poster image"}
          />
          <div
            className="h-16 -mt-16 z-6  relative"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0), rgba(255,255,255,1))",
            }}
          />
          <div className=" p-5 sm:p-14 pt-10" style={{ minHeight: 520 }}>
            <img
              className=" border-2 border-gray-400 p-1 rounded-md float-none hidden md:block md:float-right md:ml-12 mt-2 w-60 lg:w-80 mr-auto ml-auto mb-6"
              src={this.state.img_qrcode_url}
              alt ={this.state.project_name + this.state.project_agency + " qr-code image"}
            />
            <h2 className="text-4xl text-gray-900">
              {this.state.project_name}
            </h2>
            <h3 className="text-3xl text-gray-600 font-normal mt-2">
              {this.state.project_agency}
            </h3>
            <img
              className="border-2 border-gray-400 block p-1 rounded md:hidden md:float-right md:ml-12 mt-4 w-60 mr-auto ml-auto"
              src={this.state.img_qrcode_url}
              alt ={this.state.project_name + this.state.project_agency + " qr-code image"}
            />
            <div className=" mt-8" style={{ textIndent: 50 }}>
              <p className="text-2xl">{this.state.description}</p>
            </div>
            <div>
              <p className="mt-12 text-2xl">
                <span className=" font-semibold">ข้อมูลติดต่อ:</span>
                <span className="ml-2">{this.state.contact}</span>
              </p>
            </div>
          </div>
          <div className="mt-12 md:mt-18">
            <GoogleMapShow
              locationlat={this.state.location_lat}
              locationlng={this.state.location_lng}
            ></GoogleMapShow>
          </div>
        </div>
      </article>
    );
  }
}
