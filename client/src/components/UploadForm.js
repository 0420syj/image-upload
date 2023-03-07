import React, { useState } from 'react';
import './UploadForm.css';
import { toast } from 'react-toastify';

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
        }).then((response) => {
            if (response.status === 200) {
                toast.success('이미지가 업로드 되었습니다.');
            } else {
                toast.error('이미지 업로드에 실패했습니다.');
            }
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
