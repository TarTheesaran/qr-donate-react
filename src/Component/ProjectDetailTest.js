import React from 'react';
import GoogleMapShow from '../services/GoogleMapShow';

export default class ProjectDetailTest extends React.Component {

    render() {
        const somePic = '/images/Covid.png';
        return (
            <article className=" bg-blue-200" >
                <div className="mt-8 max-w-6xl border-4 border-gray-400 rounded-3xl mr-auto ml-auto p-14 z-30 bg-white z-10">
                    <img className=" relative z-5" src='/images/Covid.png' width="100%" height="" />
                    <div className="h-32 z-6  relative -mt-32" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0), rgba(255,255,255,1))" }} />
                    <div className="mt-8">
                        <img className=" border-2 border-gray-400 p-1 rounded-md float-none md:float-right md:ml-12 mt-2 w-60 mr-auto ml-auto" src='/images/qr-code-covid.png' />
                        <h1 className="text-4xl text-gray-900">บริจาคสมทบทุนการจัดซื้อเครื่องมือและอุปกรณ์ทางการแพทย์</h1>
                        <h3 className="text-2xl text-gray-500 font-light">มูลนิธิโรงพยาบาลสมเด็จพระนางเจ้าสิริกิติ์</h3>
                        <div className=" mt-8" style={{ textIndent: 50 }}>
                            <p className="text-lg">
                                มูลนิธิโรงพยาบาลสมเด็จพระนางเจ้าสิริกิติ์ กองทัพเรือ ในพระบรมราชินูปถัมภ์ ส่งเสริมและสนับสนุนการพัฒนาสวัสดิการบุคลากร การบริหาร การบริการวิชาการ
                            </p>
                        </div>
                        <div>
                            <p className="mt-12 md:mt-24">
                                <span className=" font-semibold">
                                    ข้อมูลติดต่อ:
                                </span>
                                <span className="ml-2">
                                    163 ม.1 ต.พลูตาหลวง อ.สัตหีบ จ.ชลบุรี 20180 เบอร์โทร: 038-933905 E-mail: SRKDONATION@hotmail.com
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="mt-12 md:mt-18">
                        <GoogleMapShow></GoogleMapShow>
                    </div>
                </div >
            </ article >
        );
    }
}