import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  TextField,
  Button,
  Alert,
  Collapse,
  Card,
} from "@mui/material";

const ChatBot = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  //media
  const isNotMobile = useMediaQuery("(min-width: 1000px)");
  // states
  const [text, settext] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));

  //register ctrl
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("https://chatgpt-clone-server-p2dj.onrender.com/api/v1/openai/chatbot", { text });
      console.log(data);
      setResponse(data);
    } catch (err) {
      console.log(error);
      if (err.response.data.error) {
        setError(err.response.data.error);
      } else if (err.message) {
        setError(err.message);
      }
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  return (
    <>
      {
        !loggedIn ? (
          <Box p={10} sx={{ display: 'flex', justifyContent: 'center', alignContent: 'flex-start' }}>
            <Typography variant="h3">
              Please
              <Link to={'/login'} >Log In</Link>
              to Continue
            </Typography>
          </Box>
        ) : (
          <Box
            width={isNotMobile ? "40%" : "80%"}
            p={"2rem"}
            m={"2rem auto"}
            borderRadius={5}
            sx={{ boxShadow: 5 }}
            backgroundColor={theme.palette.background.alt}
          >
            <Collapse in={error !== ''}>
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            </Collapse>
            <form onSubmit={handleSubmit}>
              <Typography variant="h3">Ask with Chatbot</Typography>

              <TextField
                placeholder="Add your text"
                type="text"
                multiline={true}
                required
                margin="normal"
                fullWidth
                value={text}
                onChange={(e) => {
                  settext(e.target.value);
                }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                sx={{ color: "white", mt: 2 }}
              >
                Chat
              </Button>
              <Typography mt={2}>
                Not this tool ? <Link to="/">GO BACK</Link>
              </Typography>
            </form>

            {response ? (
              <Card
                sx={{
                  mt: 4,
                  border: 1,
                  boxShadow: 0,
                  height: "500px",
                  borderRadius: 5,
                  borderColor: "natural.medium",
                  bgcolor: "background.default",
                }}
              >
                <Typography p={2}>{response}</Typography>
              </Card>
            ) : (
              <Card
                sx={{
                  mt: 4,
                  border: 1,
                  boxShadow: 0,
                  height: "500px",
                  borderRadius: 5,
                  borderColor: "natural.medium",
                  bgcolor: "background.default",
                }}
              >
                <Typography
                  variant="h5"
                  color="natural.main"
                  sx={{
                    textAlign: "center",
                    verticalAlign: "middel",
                    lineHeight: "450px",
                  }}
                >
                  Bot's Response
                  (Please wait for few secs after submitting...)
                </Typography>
              </Card>
            )}
          </Box>
        )
      }
    </>
  );
};

export default ChatBot;
