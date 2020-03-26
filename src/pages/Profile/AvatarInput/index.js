import React, { useState, useRef, useEffect } from 'react';
import { MdEdit } from 'react-icons/md';
import { useField } from '@rocketseat/unform';

import api from '../../../services/api';

import InputContainer from './styles';

export default function AvatarInput() {
  const { defaultValue, registerField } = useField('avatar');
  const ref = useRef();

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);

  async function handleOnChange(e) {
    const data = new FormData();
    data.append('file', e.target.files[0]);

    const response = await api.post('/files', data);
    const { id, url } = response.data;
    setFile(id);
    setPreview(url);
  }

  return (
    <InputContainer>
      <label htmlFor="avatar">
        <img src={preview || 'https://api.adorable.io/avatars/50/abott@adorable.png'} alt="" />
        <MdEdit size={40} />
        <input
          id="avatar"
          type="file"
          accept="image/*"
          onChange={handleOnChange}
          data-file={file}
          ref={ref}
        />
      </label>
    </InputContainer>
  );
}
