import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  Typography,
  CardMedia,
  Card,
  IconButton,
  useTheme,
  Grid,
} from "@mui/material";
import UploadOutlined from "@ant-design/icons/UploadOutlined";
import { CloseOutlined } from "@ant-design/icons";

const dropTextStyle = {
  fontSize: 10,
  color: "rgba(0, 0, 0, 0.42)",
  marginBottom: 5,
};

const dropZoneStyle = {
  height: 88,
  border: "2px dashed rgba(85, 91, 212, 0.11)",
  borderRadius: 8,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginTop: 5,
};

export default function ImageDropzone() {
  const [file, setFile] = useState(null);
  const theme = useTheme();

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
  });

  return (
    <>
      <div {...getRootProps()} style={dropZoneStyle}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <Typography>Drop the files here ...</Typography>
        ) : (
          <>
            <div>
              <UploadOutlined />
            </div>
            <Typography style={dropTextStyle} variant="h5">
              Drag & drop file here or click to select file.
            </Typography>
          </>
        )}
      </div>
      {file && (
        <Grid container spacing={1}>
          {file.map((el) => (
            <Grid item xs={6} sm={4}>
              <Card
                key={el}
                sx={{
                  width: "100%",
                  height: 100,
                  marginTop: 1,
                  position: "relative",
                }}
              >
                <IconButton
                  style={{
                    position: "absolute",
                    right: 0,
                    background: theme.palette.primary.blueDarkerShade,
                  }}
                  size="small"
                  onClick={() => setFile(null)}
                >
                  <CloseOutlined style={{ color: "white" }} />
                </IconButton>
                <CardMedia
                  sx={{ height: 140 }}
                  image={URL.createObjectURL(el)}
                  title="green iguana"
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}
