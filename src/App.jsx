import React, { useState } from "react";
import Canvas from "./Canvas";
import { SketchPicker } from "react-color";

const Editor = () => {
  const [imageSrc, setImageSrc] = React.useState("");
  const [caption, setCaption] = useState("Your Caption Here");
  const [callToAction, setCallToAction] = useState("Call to action");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  min-h-screen">
      <div className="flex flex-col place-content-center place-items-center py-10">
        <Canvas
          imageSrc={imageSrc}
          caption={caption}
          callToAction={callToAction}
          backgroundColor={backgroundColor}
        />
      </div>
      <div className="flex flex-col gap-y-6 py-40 md:pl-36 mx-8">
        <div>
          <input
            type="file"
            onChange={handleImageChange}
            className="mb-4 block w-full text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4 file:rounded-md
        file:border-0 file:text-sm file:font-semibold
        file:bg-pink-50 file:text-pink-700
        hover:file:bg-pink-100"
          />
        </div>
        <div className="flex flex-col ">
          <div className="mb-2">Caption</div>
          <input
            type="text"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Caption"
            className="mb-2 border border-1 border-gray-400 rounded-md p-2 max-w-md"
          />
        </div>
        <div>
          <div className="mb-2">Call to Action</div>
          <input
            type="text"
            value={callToAction}
            maxLength={31}
            onChange={(e) => setCallToAction(e.target.value)}
            placeholder="Call to Action"
            className="mb-2 border border-1 border-gray-400 rounded-md p-2 max-w-md"
          />
        </div>
        <div>
          {/* <input
            type="color"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
            className="mb-2"
          /> */}
          <div className="mb-2">Selct background Color</div>
          <SketchPicker
            color={backgroundColor}
            onChangeComplete={(color) => setBackgroundColor(color.hex)}
          />
        </div>
      </div>
    </div>
  );
};

export default Editor;
