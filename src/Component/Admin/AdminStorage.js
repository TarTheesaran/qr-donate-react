import React from 'react';
import { storage } from '../../firebase';

export default class AdminStorage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: '',
            progress: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    handleChange = e => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({ image }));
        }
    }
    handleUpload = e => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({ image }));
            console.log(image);


            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            uploadTask.on('state_changed',
                (snapshot) => {
                    // progrss function ....
                    const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    this.setState({ progress });
                },
                (error) => {
                    // error function ....
                    console.log(error);
                },
                () => {
                    // complete function ....
                    storage.ref('images').child(image.name).getDownloadURL().then(url => {
                        console.log(url);
                        this.setState({ url });
                        this.props.urlFirebaseStorage(url);
                    })
                });
        }
    }

    render() {
        const style = {

        };
        return (
            <div style={style} className={''}>
                <input type="file" onChange={this.handleUpload} accept="image/png, image/jpeg" />
            </div>
        )
    }
}