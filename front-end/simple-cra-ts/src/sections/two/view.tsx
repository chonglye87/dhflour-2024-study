// @mui
import {alpha} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import {useSettingsContext} from 'src/components/settings';
import {useEffect, useState} from "react";
import axios from "axios";
import {Swagger} from "../../utils/API";

// ----------------------------------------------------------------------

export default function TwoView() {
  const settings = useSettingsContext();
  const [resData, setResData] = useState<any>();

  useEffect(() => {
    const fetchPosts = async () => {
      try {

        // const response = await axios.get('http://localhost:8080/api/v1/env');
        const {data} = await Swagger.api.env();
        console.log(data, 'response data');
        setResData(data); // 데이터 설정
      } catch (error) {
        console.error('Fetching posts failed:', error);
      }
      // HTTP Status
      // 200~299 : 성공
      // 300~399 : 리다이렉트
      // 400~499 : 클라이언트
      // 500     : 서버

      // HTTP Method
      // GET : 읽기 : http://test.com?key=value
      // ---
      // POST : 쓰기 : https://test.com , request body :
      // PUT : 수정  (전체) https://test.com/board/1
      // PATCH : 수정 (부분)
      // DELETE : 삭제 https://test.com/board/1
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
          bgcolor: 'yellow',
          border: (theme) => `dashed 1px ${theme.palette.divider}`,
        }}
      >
        {resData && JSON.stringify(resData)}
      </Box>

    </Container>
  );
}
