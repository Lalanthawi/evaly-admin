import {
  Grid,
  Stack,
  OutlinedInput,
  IconButton,
  Button,
  useTheme,
} from "@mui/material";
import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";

const gridPadding = { paddingTop: 5, paddingBottom: 5 };

const SpecificationForm = () => {
  const theme = useTheme();
  const [isAddSpecifications, setIsAddSpecifications] = useState(false);
  const [specifications, setSpecification] = useState([]);
  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    const obj = { name, value };
    console.log(obj);
    setSpecification([...specifications, obj]);
    setName("");
    setValue("");
  };

  return (
    <>
      <Button
        style={{ marginBottom: 10 }}
        variant="outlined"
        startIcon={<PlusOutlined />}
        onClick={() => setIsAddSpecifications(true)}
      >
        Add Product Specifications
      </Button>
      {specifications?.map((ele) => {
        return (
          <Grid container spacing={2} style={gridPadding}>
            <Grid item xs={5}>
              <Stack spacing={1}>
                <OutlinedInput
                  id="specification-name"
                  placeholder="Specification Name"
                  fullWidth
                  value={ele.name}
                  disabled
                />
              </Stack>
            </Grid>
            <Grid item xs={5}>
              <Stack spacing={1}>
                <OutlinedInput
                  id="specification-value"
                  placeholder="Specification Value"
                  value={ele.value}
                  fullWidth
                  disabled
                />
              </Stack>
            </Grid>
            <Grid item xs={2} style={{ alignItems: "center", display: "flex" }}>
              <IconButton
                style={{
                  background: theme.palette.secondary.light,
                  borderRadius: "50%",
                }}
                size="small"
              >
                <CloseOutlined style={{ color: "black" }} />
              </IconButton>
            </Grid>
          </Grid>
        );
      })}
      {isAddSpecifications && (
        <Grid container spacing={2} style={gridPadding}>
          <Grid item xs={5}>
            <Stack spacing={1}>
              <OutlinedInput
                id="specification-name"
                placeholder="Specification Name"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Stack>
          </Grid>
          <Grid item xs={5}>
            <Stack spacing={1}>
              <OutlinedInput
                id="specification-value"
                placeholder="Specification Value"
                fullWidth
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </Stack>
          </Grid>
          <Grid item xs={2} style={{ alignItems: "center", display: "flex" }}>
            <IconButton
              onClick={handleSubmit}
              style={{
                background: theme.palette.secondary.light,
                borderRadius: "50%",
              }}
              size="small"
            >
              <PlusOutlined style={{ color: "black" }} />
            </IconButton>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default SpecificationForm;
