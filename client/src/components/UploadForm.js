import React, { useState } from 'react';
import './UploadForm.css';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('이미지 파일을 선택하세요.');

    const imageSelectHandler = (event) => {
        setFile(event.target.files[0]);
        setFileName(event.target.files[0].name);
    };

    const onSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('image', file);

        fetch('/upload', {
            method: 'POST',
            body: formData,
        }).then((response) => response.json())
            .then((response) => {
                console.log(response);
            });
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="file-dropper">
                {fileName}
                <input id="image" type="file" onChange={(event) =>
                    imageSelectHandler(event)
                } />
            </div>
            <button className="submit-button" type="submit">제출</button>
        </form>
    );
};

export default UploadForm;
