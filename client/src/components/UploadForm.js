import React, { useState } from 'react';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('이미지 파일을 선택하세요.');
    return (
        <form>
            <label htmlFor="image">{fileName}</label>
            <input id="image" type="file" onChange={(event) => {
                setFile(event.target.files[0]);
                setFileName(event.target.files[0].name);
            }} />
            <button type="submit">제출</button>
        </form>
    );
};

export default UploadForm;