import React, { useState } from 'react';

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
            <label htmlFor="image">{fileName}</label>
            <input id="image" type="file" onChange={(event) =>
                imageSelectHandler(event)
            } />
            <button type="submit">제출</button>
        </form>
    );
};

export default UploadForm;
