


import React from "react";

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import "./styles.css";

function CKEditorTest() {
  return (
    <div className="App">
      <CKEditor
        editor={ClassicEditor}
        data="<p>Hello from CKEditor 5!</p>"
        config={{
          mediaEmbed: {
            previewsInData: true,
          },
          removePlugins: [ 'Heading', 'Link' ],
          toolbar: [
            'bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote',
            'heading', '|', 'alignment:left', 'alignment:right', 'alignment:center', 'alignment:justify'
          ]
        }}
        disabled={false}
        onInit={editor => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log(data);
        }}
        onBlur={editor => {
          console.log("Blur.", editor);
        }}
        onFocus={editor => {
          console.log("Focus.", editor);
        }}
      />
    </div>
  );
}

export default CKEditorTest;
