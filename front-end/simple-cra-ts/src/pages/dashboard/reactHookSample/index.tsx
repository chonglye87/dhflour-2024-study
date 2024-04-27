import {Container, Typography, Stack, Button, Divider} from '@mui/material';
import {Helmet} from 'react-helmet-async';
import Iconify from 'src/components/iconify';
import Sample1Component2 from 'src/components/reactHookSample/sample1Component2';
import Sample1Component1 from 'src/components/reactHookSample/sample1Component1';
import {useSampleManagerContext} from "../../../sections/reactHookSample/sample-manage-provider";
// sections

// ----------------------------------------------------------------------

export default function ReactHookSample() {
  const {param1, param2, param3, handleMethod} = useSampleManagerContext();

  return (
    <>
      <Helmet>
        <title>SamplePage1</title>
      </Helmet>

      <Container>
        <Stack spacing={3}>
          <Typography variant="h4">ReactHook Sample</Typography>

          <Typography>{`param1 = ${param1}, param2 = ${param2}, param3 = ${param3}`}</Typography>

          <Button
            variant="contained"
            color="error"
            onClick={() => {
              handleMethod('Click!');
            }}
            startIcon={<Iconify icon="solar:trash-bin-trash-bold"/>}
          >
            Click
          </Button>

          <Divider/>

          <Sample1Component1/>
          <Sample1Component2/>


        </Stack>
      </Container>
    </>
  );
}
