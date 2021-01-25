import React, { Component } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
 
class ImageList extends Component{
    state = {};
    constructor(props) {
        super(props)
        this.showimg = this.showimg.bind(this)
      }
      showimg(e) {
        console.log(e.target.src);
    }

    render(){
        const {images} = this.props;
        const list = [];
        var myimgclass = '';
        images.forEach((image, index) => {
            if(image.ikey === 1)
            {
                myimgclass = 'thumbnail firstimg';
            }
            else
            {
                myimgclass = 'thumbnail';
            }
            list.push(<div className="col-sm-12 col-md-4 col-12">
            <div className={myimgclass}>
            <LazyLoadImage
                    alt={image.alt}
                    className={'img'}
                    effect="opacity"
                    key={image.ikey}
                    src={image.url} />
            </div>
            </div>)
        })
        
        return <div className="row">
                {list}
                <div id="open-modal" className="modal-window">
                <div>
                    <p title="Close" className="modal-close">Close</p>
                    <h1>Voilà!</h1>
                    <div>A CSS-only modal based on the :target pseudo-class. Hope you find it helpful.</div>
                    <div><small>Check out</small></div>
                    <p target="_blank"/>👉 Amino: Live CSS Editor for Chrome</div>
                    </div>
            </div>
    }
}

export default ImageList;