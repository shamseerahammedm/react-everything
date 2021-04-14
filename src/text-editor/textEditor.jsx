import React from 'react'


import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

import FroalaEditor from 'react-froala-wysiwyg';


// Import all Froala Editor plugins;
import 'froala-editor/js/plugins.pkgd.min.js';

// Import a single Froala Editor plugin.
import 'froala-editor/js/plugins/align.min.js';

// Import a language file.
// import 'froala-editor/js/languages/de.js';

// Import a third-party plugin.
import 'froala-editor/js/third_party/image_tui.min.js';
import 'froala-editor/js/third_party/embedly.min.js';
import 'froala-editor/js/third_party/spell_checker.min.js';

// Include font-awesome css if required.
// install using "npm install font-awesome --save"
// import 'font-awesome/css/font-awesome.css';
// import 'froala-editor/js/third_party/font_awesome.min.js';

// Include special components if required.
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
import FroalaEditorA from 'react-froala-wysiwyg/FroalaEditorA';
import FroalaEditorButton from 'react-froala-wysiwyg/FroalaEditorButton';
import FroalaEditorImg from 'react-froala-wysiwyg/FroalaEditorImg';
import FroalaEditorInput from 'react-froala-wysiwyg/FroalaEditorInput';

const TextEditor = () => {

    const handleModelChange = (data) => {
        console.log(data);
    }

    return (
        <FroalaEditor
            tag='textarea'
            config={{
                placeholderText: 'Edit Your Content Here!',
                charCounterCount: false
            }}
            // model={this.state.model}
            onModelChange={handleModelChange}
        />
    )
}

export default TextEditor;
