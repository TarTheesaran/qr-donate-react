import React from "react";
import { Link } from "react-router-dom";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickNav = this.handleClickNav.bind(this);
    this.state = {
      openNav: true,
      openAdmin: true,
    };
  }

  handleClickNav = () => {
    this.setState({ openNav: !this.state.openNav });
    console.log(this.state.openNav);
  };
  handleClickAdmin = () => {
    this.setState({ openAdmin: !this.state.openAdmin });
    console.log(this.state.openAdmin);
  };

  render() {
    const bgColor = {
      background: "#3949ab",
      boxShadow:
        "0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%), 0 3px 1px -2px rgb(0 0 0 / 20%)",
    };
    const { openNav } = this.state;
    return (
      <nav
        className={
          "px-5 py-4 h-14 sm:h-20 ustify-between fixed text-white shadow w-screen z-50"
        }
        style={bgColor}
      >
        <div
          className={" justify-between items-center space-x-3 hidden sm:flex"}
        >
          <ul className={"text-5xl -mt-1"}>
            <li className="hidden sl:block">QR-donate</li>
          </ul>
          <ul className={"flex items-center space-x-3 text-3xl gap-4"}>
            <li>
              <Link to={"/"}>
                <button
                  className={
                    "white-text transition duration-300 focus:bg-blue-50 focus:text-gray-900 hover:bg-blue-50 hover:text-gray-800 rounded-3xl pt-1 pb-2 px-5"
                  }
                >
                  <p>หน้าหลัก</p>
                </button>
              </Link>
            </li>
            {/* <li>
              <Link to={"/login"}>
                <button
                  className={
                    "white-text transition duration-300 focus:bg-blue-50 focus:text-gray-900 hover:bg-blue-50 hover:text-gray-800 rounded-3xl pt-1 pb-2 px-5"
                  }
                >
                  <p>login</p>
                </button>
              </Link>
            </li> */}
            <li>
              <Link to={"/about"} className="mr-16">
                <button
                  className={
                    "white-text transition duration-300 focus:bg-blue-50 focus:text-gray-900 hover:bg-blue-50 hover:text-gray-800 rounded-3xl pt-1 pb-2 px-5"
                  }
                >
                  <p>เกี่ยวกับ</p>
                </button>
              </Link>
              
            </li>
            <li>
              <button className={"white-text mr-2 group -mt-1"}>
                <i
                  className={
                    " group-focus:border-green-500 border-4 rounded-full border-blue-900 text-5xl fas fa-user-circle hover:text-blue-200"
                  }
                ></i>
                <div
                  className="group-focus:-translate-x-56 group-focus:opacity-100  opacity-0 transform transition ease-in-out duration-200 delay-50 
                 fixed -right-52 top-18  text-gray-700 text-2xl mt-2 font-light bg-white border border-gray-200 divide-y divide-gray-300 
                 rounded-md shadow-lg outline-none text-left"
                >
                  <div className="py-5 px-6 cursor-default">
                    <p className="text-lg leading-5">ลงชื่อเข้าใช้โดย</p>
                    <p className="font-medium leading-7">admin@gmail.com</p>
                  </div>
                  <div className="flex flex-col">
                    <Link to={"/admin"}>
                      <div className="px-6 py-4 hover:bg-gray-200 rounded select-none">
                        จัดการโครงการ
                      </div>
                    </Link>
                    <div className="px-6 py-4 -mt-1 ">
                      <p className=" text-gray-300 cursor-not-allowed">
                        ตั้งค่าบัญชี (soon)
                      </p>
                    </div>
                  </div>
                  <div className="px-6 py-2 text-gray-500 hover:bg-gray-200 rounded mx-1 mb-1">
                    <p className=" ">
                      <span>
                        <i className="fas fa-sign-out-alt mr-2 text-lg"></i>
                      </span>
                      <span className=" cursor-pointer">
                        ออกจากระบบ
                      </span>
                    </p>
                  </div>
                </div>
              </button>
            </li>
          </ul>
        </div>
        <div
          className={
            " justify-between items-center space-x-3 flex sm:hidden z-40"
          }
        >
          <div>
            <i
              onClick={this.handleClickNav}
              className={`${openNav ? "fas fa-bars " : "fas fa-times "} text-2xl -mt-1`}
            ></i>
          </div>
          <div className="link">
            <div
              className={
                `${openNav ? "-translate-x-56" : ""}` +
                " left-0 transform transition ease-in-out duration-300 w-56 h-screen  mt-14 bg-gray-800 fixed top-0 z-40"
              }
            >
              <ul className="gap-14">
                <li className="text-lg relative flex flex-row mt-2 items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-300 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500">
                  <Link to={"/"}>
                    <button
                      className={
                        " white-text transition text-2xl duration-300 text-left w-56 py-2 ml-7"
                      }
                    >
                      <p>หน้าหลัก</p>
                    </button>
                  </Link>
                </li>
                <li className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-300 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500">
                  <Link to={"/about"}>
                    <button
                      className={
                        "white-text transition text-2xl duration-300 text-left w-56 py-2 ml-7"
                      }
                    >
                      <p>เกี่ยวกับ</p>
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to={"/admin"}>
                    <div className={"white-text mr-2 flex"}>
                      {/* <i
                        className={
                          "text-2xl transition text-2xl duration-300 fas fa-user-circle hover:text-gray-300 mx-auto"
                        }
                      ></i> */}
                                       <button
                      className={
                        "white-text transition text-2xl duration-300 text-left py-2 ml-7 w-56"
                      }
                    >
                      <p>จัดการโครงการ</p>
                    </button>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
            <div className={`${openNav ? "hidden " : ""}` +"fixed left-52 top-14 right-0 w-full h-screen"} onClick={this.handleClickNav}>
                
            </div>
        </div>
      </nav>
    );
  }
}
