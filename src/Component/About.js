import React from 'react';
export default class About extends React.Component {

    render() {
        const style = {


        }
        return (
            <article className={'container'} >
                <h5 className={'teal-text mt-10 m-5 text-4xl'} style={style}> เกี่ยวกับผู้จัดทำ</h5>
                <div className={" text-xl"}>
                    <p>
                        เว็บแอปพลิเคชัน QR-donate นี้ เป็นส่วนหนึ่งของรายวิชา ........... มหาลัยขอนแก่น คณะวิศวกรรมศาสตร์ หลักสูตรรวิศวกรรมคอมพ์เตอร์ ชั้นปีการศึกษาที่ 3 ปีการศึกษา 2564
                    </p>
                </div>
            </article>


        );
    }
}