import React from 'react';
import AdminStorage from './Admin/AdminStorage';



export default class ProjectDetailTest extends React.Component {

    render() {
        const somePic = '/images/Covid.png';
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
            <article className="" style={addPageStyles}>
                    <div className="mt-28 bg-gray-100 p-5 xs:p-6 sm:p-8 md:p-10 rounded-3xl pt-6 w-full xs:w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12"> 
                        <div>   
                            <h2 className="text-4xl my-4 font-medium text-center">
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
                            />
                        </div>
                        <div className='text-lg text-gray-900'>
                            <p>เลือกหมวดหมู่</p>
                            <label htmlFor="category" class="hidden  ">โควิด-19</label>
                                <select class=" w-/12 mt-2 block px-4 py-2 mt-0 p-0 text-gray-700 bg-white border border-gray-300 rounded-xl shadow">
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
                        <div className='text-lg text-gray-900 mt-3'>
                            <p>
                                เลือกรูปโปสเตอร์:
                            </p>
                            <div  className="mt-2">
                                <AdminStorage urlFirebaseStorage={this.onChangeImgPoster} />
                            </div>
                            
                        </div>  
                        <div className='text-lg text-gray-900 mt-3'>
                            <p>
                                เลือกรูปQR-code:
                            </p>
                            <div className="mt-2">
                                <AdminStorage urlFirebaseStorage={this.onChangeImgPoster} />
                            </div>
                        </div>
                        <div className="flex flex-row-reverse -mb-5 mt-4">
                            <button  className="cursor-pointer bg-green-600 hover:bg-green-500 focus:bg-green-800 shadow-xl px-5 py-2 inline-block  text-green-50 hover:text-white rounded">
                                Submit
                            </button>
                        </div>
                </div>
            </article >
        );
    }
}