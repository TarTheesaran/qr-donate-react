import React from 'react';
import GoogleMapShow from '../services/GoogleMapShow';

export default class ProjectDetailTest extends React.Component {

    render() {

        return (
            <article className=" bg-blue-200" >
                <div className="mt-10 max-w-6xl  border-4 border-gray-400 rounded-3xl mr-auto ml-auto p-14 z-30 relative bg-white">
                    <img className="" src='/images/Covid.png' width="100%" height="" />
                    <div className="mt-8">
                        <img className=" float-none md:float-right md:ml-12 mt-2 w-60 mr-auto ml-auto" src='/images/0001_qr.png' />
                        <h1 className="text-4xl text-gray-900">บริจาคสมทบทุนการจัดซื้อเครื่องมือและอุปกรณ์ทางการแพทย์</h1>
                        <h3 className="text-2xl text-gray-500 font-light">มูลนิธิโรงพยาบาลสมเด็จพระนางเจ้าสิริกิติ์</h3>




                        <div className=" mt-8" style={{ textIndent: 50 }}>
                            <p className="text-lg">
                                มูลนิธิโรงพยาบาลสมเด็จพระนางเจ้าสิริกิติ์ กองทัพเรือ ในพระบรมราชินูปถัมภ์ ส่งเสริมและสนับสนุนการพัฒนาสวัสดิการบุคลากร การบริหาร การบริการวิชาการ การวิจัยและกิจกรรมต่างๆ ของโรงพยาบาลสมเด็จพระนางเจ้าสิริกิติ์ฯ และหน่วยแพทย์ในสังกัดกองทัพเรือ เพื่อการพัฒนาการบริการและเพิ่มประสิทธิภาพในการรักษาพยาบาลให้ดียิ่งขึ้น ดำเนินการด้านสาธารณประโยชน์และให้ความร่วมมือกับองค์กรการกุศลอื่นเพื่อสาธารณประโยชน์
                            </p>
                        </div>
                        <div>
                            <p className="mt-12">
                                <span className=" font-semibold">
                                    ข้อมูลติดต่อ:
                                </span>
                                <span className="ml-2">
                                    163 ม.1 ต.พลูตาหลวง อ.สัตหีบ จ.ชลบุรี 20180 เบอร์โทร: 038-933905 E-mail: SRKDONATION @hotmail.com
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="mt-10">
                        <GoogleMapShow></GoogleMapShow>
                    </div>
                </div >
            </ article >
        );
    }
}