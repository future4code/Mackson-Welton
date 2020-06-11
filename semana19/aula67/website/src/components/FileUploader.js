import React, { useState } from "react";
import axios from "axios";

export const FileUploader = () => {
  const [loading, setLoading] = useState(false);
  const [link, setLink] = useState(undefined);

  const handleFile = async (event) => {
    try {
      setLink(undefined);
      setLoading(true);

      const data = new FormData();
      data.append("file", event.target.files[0]);
      const response = await axios.put("http://webisite-exercicio-quinta.s3-website-us-east-1.amazonaws.com/files/upload", data);
      setLink(response.data.link);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error(err.message)
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFile} />
      {loading && (
        <div>
          <p>Carregando...</p>
        </div>
      )}
      {link && (
        <div>
          <p> Link do arquivo: {link}</p>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
