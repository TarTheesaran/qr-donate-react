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
          <ul className={"flex items-center space-x-3 gap-4 text-3xl"}>
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
            <li>

            </li>
            <li>
              <Link to={"/about"}>
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
              <button className={"white-text mr-2 group "}>
                <i
                  className={
                    " group-focus:text-blue-900 text-5xl fas fa-user-circle hover:text-blue-200"
                  }
                ></i>
                <div
                  className="group-focus:-translate-x-56 group-focus:opacity-100  opacity-0 transform transition ease-in-out duration-200 delay-50 
                 fixed -right-52 top-16  text-gray-700 text-lg mt-2 font-light bg-white border border-gray-200 divide-y divide-gray-800 rounded-md shadow-lg outline-none text-left"
                > 
                  <div className="py-4 px-5 cursor-default">
                    <p className="text-base leading-5">ลงชื่อเข้าใช้โดย</p>
                    <p className="font-medium leading-5">admin@gmail.com</p>
                  </div>
                  <Link to={"/admin"}>
                  <div className="flex flex-col">
                    
                      <div className="px-5 py-2 hover:bg-gray-200 rounded select-none">
                        จัดการโครงการ
                      </div>
                    
                    <div className="px-5 py-2 -mt-1 ">
                      <p className=" text-gray-300 cursor-not-allowed">
                        ตั้งค่าบัญชี (soon)
                      </p>
                    </div>
                  </div>
                  </Link>
                  <div className="px-5 py-1 text-gray-500 hover:bg-gray-200 rounded mx-1 mb-1">
                    <p className=" ">
                      <span>
                        <i className="fas fa-sign-out-alt mr-2 text-sm"></i>
                      </span>
                      <span className=" leading-9 cursor-pointer">
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
              className={`${openNav ? "fas fa-bars " : "fas fa-times "}`}
            ></i>
          </div>
          <div className="link">
            <div
              className={
                `${openNav ? "-translate-x-48 " : ""}` +
                " left-0 transform transition ease-in-out duration-300 h-screen  mt-14 bg-gray-800 fixed top-0 z-40"
              }
            >
              <ul className="gap-14">
                <li>
                  <Link to={"/admin"}>
                    <div className={"white-text mr-2 flex"}>
                      <i
                        className={
                          "text-2xl transition duration-300 fas fa-user-circle hover:text-gray-300 mx-auto"
                        }
                      ></i>
                    </div>
                  </Link>
                </li>
                <li className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-300 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500">
                  <Link to={"/"}>
                    <button
                      className={
                        " white-text transition duration-300 text-left w-32 py-2 ml-7"
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
                        "white-text transition duration-300 text-left w-32 py-2 ml-7"
                      }
                    >
                      <p>เกี่ยวกับ</p>
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
