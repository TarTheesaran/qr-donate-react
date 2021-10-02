import React from 'react';
import AdminData from "../../services/AdminData";
import { Link } from 'react-router-dom';
export default class ProjectCard extends React.Component {
    constructor(props) {
        super(props);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveTutorial = this.setActiveTutorial.bind(this);

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
            if (data.published == true) {
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
            }
            console.log(tutorials);
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


    render() {
        const { tutorials, currentTutorial, currentIndex } = this.state;
        const style = {
            height: 300,
            display: 'flex',
            alignItems: 'center'
        }
        return (
            <article className="w-100%">
                <div className="grid grid-cols-4 gap-12">
                    {tutorials &&
                        tutorials.map((tutorial, index) => (
                            <div
                                className={
                                    "list-group-item" +
                                    (index === currentIndex ? "active" : "")
                                }
                                onClick={() => this.setActiveTutorial(tutorial, index)}
                                key={index}
                            >
                                <div className="bg-red-50 mt-3">
                                    <Link target="_blank" to={`/detail/${tutorial.key}`}>
                                        <div className="flex flex-col">
                                            <img className=" h-32 w-60" src={tutorial.img_poster_url} />
                                            <div>
                                                <h3 className="w-60">{tutorial.project_name}</h3>
                                                <p className="w-60">{tutorial.project_agency}</p>
                                            </div>
                                            {/* <a src={tutorial.img_qrcode_url}><i></i></a> */}
                                            {/* <a className=" text-right mr-auto">
                                                    <i className='fas fa-angle-right text-4xl'></i>
                                                </a> */}
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                </div>
            </article >
        );
    }
}