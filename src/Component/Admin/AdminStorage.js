import React from 'react';
import { storage } from '../../firebase';
import Resizer from "react-image-file-resizer";
export default class AdminStorage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: '',
            progress: 0
        };
        this.handleUpload = this.handleUpload.bind(this);
    }

    handleUpload = e => {
        var fileInput = false;
        if (e.target.files[0]) {
          fileInput = true;
        }
        if (fileInput) {
            try {
                Resizer.imageFileResizer(
                  e.target.files[0],
                  1080,
                  2000,
                  "JPEG",
                  100,
                  0,
                  (uri) => {
                    console.log(uri);
                    this.setState({ image: uri });
                    var uriString = ''+this.state.image;

                    const image = e.target.files[0];
                    const imagename = image.name.split('.')[0]+(Math.floor(Math.random() * 1000000000))+ ".jpg"
                    // console.log(imagename);
                    const uploadTask = storage.ref(`images/${imagename}`).putString(uriString.split(',')[1], "base64", {contentType: 'image/png'})
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
                        storage.ref('images').child(imagename).getDownloadURL().then(url => {
                            // console.log(url);
                            this.setState({ url });
                            this.props.urlFirebaseStorage(url);
                        })
                    });
                  },
                  "base64",
                  200,
                  200
                );

              } catch (err) {
                console.log(err);
              }
              
            //   if (e.target.files[0]) {
            //     const image = e.target.files[0];
            //     this.setState(() => ({ image }));
            //     console.log(image);
            
        }
    
    }

    render() {
        const style = {

        };
        return (
            <div style={style} className={''}>
                <input type="file" onChange={this.handleUpload} accept="image/png, image/jpeg" />
                <progress value={this.state.progress} max="100"/>
            </div>
        )
    }
}