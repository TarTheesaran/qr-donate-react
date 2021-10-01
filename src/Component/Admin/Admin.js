import React from 'react';
import './Admin.css'
import AdminData from "../../services/AdminData";
import AdminDataManage from "./AdminDataManage";
export default class About extends React.Component {
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
        const style = {
            height: 300,
            display: 'flex',
            alignItems: 'center'
        }
        return (
            // convert from old project
            <div div className="pageblock" >
                <article>
                    <section className="projectList">
                        <header>
                            <h1>รายการ</h1>
                            <a href="./addDataPage.html">
                                <i className='plusIcon fas fa-plus-circle text-4xl'></i>
                            </a>
                        </header>
                        <div id="dataList" className="dataListBlock">
                            <ul className="list-group">
                                {tutorials &&
                                    tutorials.map((tutorial, index) => (
                                        <li
                                            className={
                                                "list-group-item" +
                                                (index === currentIndex ? "active" : "")
                                            }
                                            onClick={() => this.setActiveTutorial(tutorial, index)}
                                            key={index}
                                        >
                                            <div class="dataCard">
                                                <div>
                                                    <h3>{tutorial.project_name}</h3>
                                                    <p>{tutorial.project_agency}</p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </section>
                    <section>
                        <header>
                            <h1>รายละเอียด</h1>
                            <a href="./editDataPage.html">
                                <i className='editIcon fas fa-edit text-4xl'></i>
                            </a>
                        </header>
                        <div class="detailBlock">
                            {currentTutorial ? (
                                <AdminDataManage
                                    tutorial={currentTutorial}
                                    refreshList={this.refreshList}
                                />
                            ) : (
                                <div>

                                    <p>โปรดเลือกโครงการของท่าน....    </p>
                                </div>
                            )}

                        </div>

                    </section>
                </article >
            </div>
        );
    }
}