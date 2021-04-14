import React, { useState } from 'react';


const FileInput = ({
    name,
    title,
    placeHolderMessage,
    custClass,
    acceptType,
    maxSize,
    errors,
    touched,
    fileChange,
    custRequired
}) => {

    const [file, setFile] = useState();
    const [error, setError] = useState();


    const handleFileChange = event => {

        const files = event.target.files;
        if (files.length === 1)
        {
            const fileExtension = files[0].name.split('.').pop();
            var extArray = acceptType.split(',');
            var sizeCheck = files[0].size < maxSize;
            let extCheck = extArray.includes('.' + fileExtension);

            if (sizeCheck && extCheck)
            {
                setError();
                setFile(files[0]);
                // parent component 
                fileChange(files);
            }
            else
            {
                event.preventDefault();
                setFile();
                if (!sizeCheck)
                {
                    setError('Maximum file size is ' + bytesToSize(maxSize));
                }
                if (!extCheck)
                {
                    setError('Allowed file types are ' + acceptType);
                }
            }
        }

    }
    return (
        <>
            <label htmlFor={title.trim().toLowerCase()}>{title} </label>
            <div className={`input-group ${custClass}`}>
                <div className="custom-file">
                    <input type="file" name={name} className="custom-file-input" onChange={handleFileChange} />
                    <label className="custom-file-label" >
                        {
                            file
                                ?
                                <p className="mb-0"><strong>Selected File :</strong> <span className="text-primary">{file.name}</span></p>
                                :
                                placeHolderMessage
                        }
                    </label>
                </div>
            </div>
            {error && <p>{error}</p>}
            {errors[name] && touched[name] && <p>
                {errors[name]}
            </p>}
        </>
    )
}
export default FileInput;




export function bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return 'n/a';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    if (i === 0) return bytes + ' ' + sizes[i];
    return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
}

