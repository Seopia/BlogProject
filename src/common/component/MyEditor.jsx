import React, { useState, useRef, useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const MyEditor = ({ editorContent, setEditorContent }) => {
  const quillRef = useRef(null);

  const handleImageUpload = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const base64data = reader.result;
        const quill = quillRef.current.getEditor();
        const range = quill.getSelection();
        quill.insertEmbed(range.index, 'image', base64data);
      };
      // const file = input.files[0];
      // const formData = new FormData();
      // formData.append('image', file);

      // try {
        // 이미지 업로드 API 호출
        // const response = await axios.post('https://your-upload-endpoint.com/upload', formData, {
        //   headers: {
        //     'Content-Type': 'multipart/form-data'
        //   }
        // });

      //   const imageUrl = response.data.url; // 서버에서 반환된 이미지 URL

      //   // Quill 에디터에 이미지 삽입
      //   const quill = quillRef.current.getEditor();
      //   const range = quill.getSelection();
      //   quill.insertEmbed(range.index, 'image', imageUrl);
      // } catch (error) {
      //   console.error('Image upload failed:', error);
      // }
    };
  };

  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
        [{size: []}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        ['clean']
      ],
      handlers: {
        'image': handleImageUpload
      }
    }
  }), []);

  return (
    <ReactQuill
      ref={quillRef}
      placeholder='이 곳에 글을 작성하세요.'
      value={editorContent}
      onChange={setEditorContent}
      modules={modules}
      formats={[
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
      ]}
      theme="snow"
    />
  );
};

export default MyEditor;
