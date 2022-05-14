import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Typography } from "@mui/material";

export default function DropZone({
  saveFile,
}: {
  saveFile: (file: File) => void;
}) {
  const onDrop = useCallback((acceptedFiles) => {
    saveFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      'image/png': [".jpg", ".png", ".jpeg", ".JPG", ".PNG", ".JPEG"],
    },
    maxSize: 5242880,
  });

  return (
    <div
      {...getRootProps()}
      style={{
        width: "100%",
        height: "100px",
        borderRadius: 10,
        borderStyle: "dashed",        
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input {...getInputProps()} />
      <Typography
        variant="subtitle2"
        textAlign="center"
        style={{ padding: 20 }}
      >
        {isDragActive
          ? "Arroja aqui tus archivos"
          : "Arrastra aqui o click para agregar una foto"}
      </Typography>
    </div>
  );
}