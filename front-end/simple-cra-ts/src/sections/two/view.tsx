// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { useSettingsContext } from 'src/components/settings';
import {useEffect, useState} from "react";
import axios from "axios";

// ----------------------------------------------------------------------

export default function TwoView() {
  const settings = useSettingsContext();
  const [resData, setResData] = useState();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/env');
        setResData(response.data); // 데이터 설정
      } catch (error) {
        console.error('Fetching posts failed:', error);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    console.log(resData, 'resData');
  }, [resData]);

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4"> Page Two </Typography>

      <Box
        sx={{
          mt: 5,
          width: 1,
          height: 320,
          borderRadius: 2,
          bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
          border: (theme) => `dashed 1px ${theme.palette.divider}`,
        }}
      >
        {resData && JSON.stringify(resData)}
      </Box>
    </Container>
  );
}
