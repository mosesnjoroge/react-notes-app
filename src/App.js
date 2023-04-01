import './components/css/App.css';
import Notes from './components/NotesComponents/Notes'
import Header from './components/NotesComponents/Header';
import { Cloudinary } from '@cloudinary/url-gen';
// import {AdvancedImage} from '@cloudinary/react';
// import {fill} from "@cloudinary/url-gen/actions/resize";

function App() {

  // Create a Cloudinary instance and set your cloud name.
  // const cld = new Cloudinary({
  //   cloud: {
  //     cloudName: 'dtxxea3qi'
  //   }
  // });

    // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
    // const myImage = cld.image('cld-sample-2');

    // Resize to 250 x 250 pixels using the 'fill' crop mode.
    // myImage.resize(fill().width(250).height(250));

    return (
      <div className="main">

        {/* <AdvancedImage cldImg={myImage} /> */}
        <Header />
        <Notes />

      </div>
  );
}

export default App;
