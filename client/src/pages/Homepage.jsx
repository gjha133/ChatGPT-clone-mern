import React from "react";
import { Box, Typography, Card, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";
import FormatAlignLeftOutlined from "@mui/icons-material/FormatAlignLeftOutlined";
import ChatRounded from "@mui/icons-material/ChatRounded";
const Homepage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
        <Box p={3} sx={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            Text Generation
          </Typography>
          <Card
            onClick={() => navigate("/summary")}
            sx={{
              boxShadow: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderRadius: 5,
              height: 250,
              width: 250,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <DescriptionRounded
              sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0} mt={2} sx={{ display: "flex", flexDirection: "column", alignItems: 'center' }}>
              <Typography fontWeight="bold" variant="h5">
                Text Summarizer
              </Typography>
              <Typography variant="h6">
                Summarize long text into short sentences
              </Typography>
            </Stack>
          </Card>
        </Box>
        <Box p={3} sx={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            Paragraph Generation
          </Typography>
          <Card
            onClick={() => navigate("/paragraph")}
            sx={{
              boxShadow: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderRadius: 5,
              height: 250,
              width: 250,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <FormatAlignLeftOutlined
              sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0} mt={2} sx={{ display: "flex", flexDirection: "column", alignItems: 'center' }}>
              <Typography fontWeight="bold" variant="h5">
                Paragraph Generator
              </Typography>
              <Typography variant="h6">
                Generate Paragraph with words
              </Typography>
            </Stack>
          </Card>
        </Box>
        <Box p={3} sx={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            AI ChatBot
          </Typography>
          <Card
            onClick={() => navigate("/chatbot")}
            sx={{
              boxShadow: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderRadius: 5,
              height: 250,
              width: 250,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <ChatRounded
              sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0} mt={2} sx={{ display: "flex", flexDirection: "column", alignItems: 'center' }}>
              <Typography fontWeight="bold" variant="h5">
                Chatbot
              </Typography>
              <Typography variant="h6">Chat With AI Chatbot</Typography>
            </Stack>
          </Card>
        </Box>
        <Box p={3} sx={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            Javascript Converter
          </Typography>
          <Card
            onClick={() => navigate("/js-converter")}
            sx={{
              boxShadow: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderRadius: 5,
              height: 250,
              width: 250,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <ChatRounded
              sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0} mt={2} sx={{ display: "flex", flexDirection: "column", alignItems: 'center' }}>
              <Typography fontWeight="bold" variant="h5">
                JS CONVERTER
              </Typography>
              <Typography variant="h6">
                Translate English to JavaScript code
              </Typography>
            </Stack>
          </Card>
        </Box>
        <Box p={3} sx={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            AI SCIFI Images
          </Typography>
          <Card
            onClick={() => navigate("/scifi-image")}
            sx={{
              boxShadow: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderRadius: 5,
              height: 250,
              width: 250,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <ChatRounded
              sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0} mt={2} sx={{ display: "flex", flexDirection: "column", alignItems: 'center' }}>
              <Typography fontWeight="bold" variant="h5">
                Scifi Image
              </Typography>
              <Typography variant="h6">Generate Scifi images</Typography>
            </Stack>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default Homepage;
