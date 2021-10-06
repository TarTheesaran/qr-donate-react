import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';


const bgColor= {"background":"#3949ab",
"boxShadow":"0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%), 0 3px 1px -2px rgb(0 0 0 / 20%)"}
const Navigation = () => {
    return (
        <nav className={'z-50 px-5 py-4 h-20 ustify-between fixed text-white shadow w-screen'} style={bgColor}>
            <div className={"flex items-center space-x-3 gap-36"}>
                <ul className={''}>
                    <li>
                        <Link to={'/'}>
                            <a className={'white-text text-4xl mt-3'}>QR-donate</a>
                        </Link>
                    </li>
                </ul>
                <ul className={'flex items-center space-x-3'}>
                    <li>
                        <Link to={'/'}>
                            <a className={'white-text'} style={{ fontSize: 20 }}>หน้าหลัก</a>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/detail'}>
                            <a className={'white-text'} style={{ fontSize: 20 }}>รายละเอียด(test)</a>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/about'}>
                            <a className={'white-text'} style={{ fontSize: 20 }}>เกี่ยวกับ QR-Donate</a>
                        </Link>
                    </li>
                    {/* <li>
                        <Link to={'/howto'}>
                            <a className={'white-text'} style={{ fontSize: 20 }}>วิธีการใช้งาน</a>
                        </Link>
                    </li> */}
                    <li>
                        <Link to={'/admin'}>
                            <a className={'white-text'} style={{ fontSize: 20 }}><i className={'text-3xl fas fa-user-circle'}></i></a>
                        </Link>
                    </li>

                    {/* testpage */}
                    {/* <li>
                        <Link to={'/remove'}>
                            <a className={'white-text'}>remove</a>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/add'}>
                            <a className={'white-text '}>add</a>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/sto'}>
                            <a className={'white-tex '}>อัพรูป</a>
                        </Link>
                    </li> */}
                </ul>
            </div>
        </nav>

    );
}
export default Navigation;