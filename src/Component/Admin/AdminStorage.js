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
        return (
            <div className={'hidden'}>
                 <div class="flex items-center justify-start w-full border-4 border-dashed p-4 mt-2 ml-2">
                    <label class="flex flex-col rounded-lg w-96 h-36 p-10 group text-center"   
                        style={{ 
                                backgroundImage: `url(${this.state.img_poster_url})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundSize:"100% auto",
                                opacity:"1",
                                backgroundPosition:"center",
                                }
                    }>
                        <div class="h-full w-full text-center flex flex-col items-center justify-center opacity-20 text-gray-900">
                            <i className="fas fa-cloud-upload-alt text-7xl"></i>
                            <p class="pointer-none text-gray-900 ">
                                Upload here.
                            </p>
                        </div>
                        <AdminStorage urlFirebaseStorage={this.onChangeImgPoster} />
                    </label>
                    </div>
                <input type="file" onChange={this.handleUpload} accept="image/png, image/jpeg" />
                {/* <progress className="hidden" value={this.state.progress} max="100"/> */}
            </div>
            
            
        )
    }
}