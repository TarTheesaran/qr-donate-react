import React from 'react';
import AdminData from "../../services/AdminData";
import { Link } from 'react-router-dom';

const IconCategory = ({ categoryName }) => {
        var iconCategory = "far fa-times-circle w-10 h-10 "
        var styleCategory = {
            color: 'black',
            backgroundColor: "LightGray"
        }
        if(categoryName === "โควิด-19"){
            iconCategory = "fas fa-virus w-10 h-10 "
            styleCategory = {
                color: 'red',
                backgroundColor: "LemonChiffon"
            }
        }else if(categoryName === "เด็ก"){
            iconCategory = "fas fa-baby w-10 h-10 "
            styleCategory = {
                color: 'Beige',
                backgroundColor: "SteelBlue"
            }
        }else if(categoryName === "สตรี"){
            iconCategory = "fas fa-female w-10 h-10 text-4xl"
            styleCategory = {
                color: 'LavenderBlush',
                backgroundColor: " HotPink"
            }
        }else if(categoryName === "ผู้สูงอายุ"){
            iconCategory = "fas fa-blind w-10 h-10 pl-2"
            styleCategory = {
                color: 'Lavender',
                backgroundColor: " BlueViolet"
            }
        }else if(categoryName === "ผู้ป่วยและผู้พิการ"){
            iconCategory = "fas fa-wheelchair w-10 h-10  "
            styleCategory = {
                color: 'AliceBlue',
                backgroundColor: "SeaGreen"
            }
        }else if(categoryName === "ศาสนา"){
            iconCategory = "fas fa-praying-hands w-10 h-10 text-3xl"
            styleCategory = {
                color: 'Beige',
                backgroundColor: "DarkOrange"
            }
        }else if(categoryName === "สัตว์ป่าและธรรมชาติ"){
            iconCategory = "fas fa-leaf w-10 h-10 "
            styleCategory = {
                color: 'HoneyDew',
                backgroundColor: "LimeGreen"
            }
        }else if(categoryName === "สังคมและชุมชน"){
            iconCategory = "fas fa-users w-10 h-10 text-3xl"
            styleCategory = {
                color: 'Beige',
                backgroundColor: "Tomato"
            }
        }else if(categoryName === "โรงพยาบาล"){
            iconCategory = "fas fa-hospital w-10 h-10"
            styleCategory = {
                color: 'LavenderBlush',
                backgroundColor: "Crimson"
            }
        }else if(categoryName === "การศึกษา"){
            iconCategory = "fas fa-graduation-cap w-10 h-10  text-3xl"
            styleCategory = {
                color: 'MintCream',
                backgroundColor: "MidnightBlue"
            }
        }else if(categoryName === "สัตว์จรจัด"){
            iconCategory = "fas fa-dog w-10 h-10"
            styleCategory = {
                color: ' Beige',
               backgroundColor: "Peru"
           }
        }else{
            iconCategory = "far fa-times-circle w-10 h-10 "
            styleCategory = {
                color: 'black',
                backgroundColor: "gray"
            }
    }
    return  <p class="absolute right-0 top-0  rounded-tr-lg rounded-bl-3xl p-2 group  text-4xl text-center"  style={styleCategory}>
                <i className={iconCategory}></i>
            </p>;
}


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
                <div className="flex flex-wrap mx-auto justify-center">
                    {tutorials &&
                        tutorials.map((tutorial, index) => (
                            // <div class="max-w-7xl rounded overflow-hidden shadow-lg relative" style={{height: 380}}>
                            <div class=" w-86 rounded-lg overflow-hidden shadow-lg relative bg-white mx-6 my-7">
                                <img class="relative object-cover  w-96  h-36" src={tutorial.img_poster_url} alt="" />
                                <IconCategory
                                     categoryName={tutorial.category}
                                />
                                <div class="px-6 py-4 pb-20 h-auto ">
                                    <div class=" font-medium text-2xl mb-2"  style={{ textIndent: 10 }}>
                                        {tutorial.project_name}
                                    </div>
                                    <p class="text-gray-700 text-lg overflow-ellipsis overflow-hidden ...">
                                         {tutorial.project_agency}
                                    </p>
                                </div>
                                <div class="px-6 pt-2 pb-2 text-right absolute bottom-2 right-0">
                                    <a target="_blank" href={tutorial.img_qrcode_url}>
                                        <span class="inline-block bg-green-200 rounded-full px-4 py-2 text-mm font-medium text-gray-700 mr-2 mb-2"><i className="fas fa-qrcode text-green-800 "> QR</i></span>
                                    </a>
                                    <Link target="_blank" to={`/detail/${tutorial.key}`}>
                                        <span class="inline-block bg-blue-200 rounded-full px-5 py-2 text-md font-medium text-blue-800 mr-2 mb-2">
                                            รายละเอียด
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            // <div>
                                
                            //     <div className="bg-red-50 mt-3">
                            //         <Link target="_blank" to={`/detail/${tutorial.key}`}>
                            //             <div className="flex flex-col">
                            //                 <img className=" h-32 w-60" src={tutorial.img_poster_url} />
                            //                 <div>
                            //                     <h3 className="w-60">{tutorial.project_name}</h3>
                            //                     <p className="w-60">{tutorial.project_agency}</p>
                            //                 </div>
                            //                 {/* <a src={tutorial.img_qrcode_url}><i></i></a> */}
                            //                 {/* <a className=" text-right mr-auto">
                            //                         <i className='fas fa-angle-right text-4xl'></i>
                            //                     </a> */}
                            //             </div>
                            //         </Link>
                            //     </div>
                            // </div>
                        ))}
                </div>
            </article >
        );
    }
}