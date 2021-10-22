import React from "react";
export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            somruetai: [],
            theesaran: [],
            jirawan: []
        };
    }
    componentDidMount() {
        fetch("https://api.github.com/users/jaonow")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        somruetai: result
                    });
                    console.log(this.state.somruetai);
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
        fetch("https://api.github.com/users/tatheesaran")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        theesaran: result
                    });
                    console.log(this.state.theesaran);
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
        fetch("https://api.github.com/users/Jirawann")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        jirawan: result
                    });
                    console.log(this.state.jirawan);
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )

    }
    render() {
        return (
            <article>
                <header>
                    <div className="about_qr">
                        <div className="left  ">
                            <img src="images/e-donation2.jpg" alt="" />
                        </div>
                        <div className="right">
                            <h1 className="ml-10">About <span>QR-Donate</span></h1>
                            <p className="ml-14">QR-Donate เป็นโปรเจ็คต์ที่จัดทำขึ้นเพื่อเพิ่มความสะดวกให้กับผู้ที่ต้องการบริจาคโดยการสแกน QR Code
                                ผ่านระบบ E-Donation ให้สามารถเข้าถึงได้ง่ายในรูปแบบของเว็บแอปพลิเคชัน
                                และช่วยประชาสัมพันธ์การเปิดรับบริจาคจากหน่วยงานต่างๆ</p>
                            <div className="p-5"></div>
                        </div>

                    </div>
                </header>
                <div className="about_team">
                    <p>About <span>Team</span></p>
                    <div className="cards_wrap flex flex-wrap mt-5">
                        <div className="card_item my-3 mx-5">
                            <div className="card_inner">
                                <img src={this.state.somruetai.avatar_url} />
                                <div className="name truncate">{this.state.somruetai.name}</div>
                                <div className="ID_number">623040146-6</div>
                                <div className="university_name">Student of Faculty of Engineering,</div>
                                <div className="university_name">Khon Kaen university</div>
                                <div className="social-menu">
                                    <ul className="text-2xl ml-3">
                                        <li><a href="https://www.facebook.com/jaonow.srt/" target="_blank"><i class="fab fa-facebook-f mt-2"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/somruetai-boonma-8096a7211/" target="_blank"><i class="fab fa-linkedin mt-2 "></i></a></li>
                                        <li><a href="mailto:somruetaib@kkumail.com" target="_blank"><i class="fab fa-google mt-2 "></i></a></li>
                                        <li><a href={this.state.somruetai.html_url} target="_blank"><i class="fab fa-github mt-2"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card_item my-3 mx-5">
                            <div className="card_inner">
                                <img src={this.state.theesaran.avatar_url} />
                                <div className="name truncate">{this.state.theesaran.name}</div>
                                <div className="ID_number">623040447-2</div>
                                <div className="university_name">Student of Faculty of Engineering,</div>
                                <div className="university_name">Khon Kaen university</div>
                                <div className="social-menu">
                                    <ul className="text-2xl ml-3">
                                        <li><a href="https://www.facebook.com/TheesaranT" target="_blank"><i class="fab fa-facebook-f mt-2" target="_blank"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/theesaran-thapthanee-0b4220221/" target="_blank"><i class="fab fa-linkedin mt-2" target="_blank"></i></a></li>
                                        <li><a href="mailto:ta_theesaran@kkumail.com" target="_blank"><i class="fab fa-google mt-2"></i></a></li>
                                        <li><a href={this.state.theesaran.html_url} target="_blank"><i class="fab fa-github mt-2 "></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card_item my-3 mx-5">
                            <div className="card_inner">
                                <img src={this.state.jirawan.avatar_url} />
                                <div className="name truncate">{this.state.jirawan.name}</div>
                                <div className="ID_number">623040418-9</div>
                                <div className="university_name">Student of Faculty of Engineering,</div>
                                <div className="university_name">Khon Kaen university</div>
                                <div className="social-menu">
                                    <ul className="text-2xl ml-3">
                                        <li><a href="https://www.facebook.com/pimpimjirawan" target="_blank"><i class="fab fa-facebook-f mt-2"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/theesaran-thapthanee-0b4220221/" target="_blank"><i class="fab fa-linkedin mt-2"></i></a></li>
                                        <li><a href="mailto:jirawan.wa@kkumail.com" target="_blank"><i class="fab fa-google mt-2"></i></a></li>
                                        <li><a href={this.state.jirawan.html_url} target="_blank"><i class="fab fa-github mt-2" target="_blank"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </article>
        );
    }
}
