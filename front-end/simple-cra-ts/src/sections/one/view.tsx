// @mui
import {alpha} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import {useSettingsContext} from 'src/components/settings';
import {useUser} from "src/hooks/use-user";
import Button from "@mui/material/Button";

// ----------------------------------------------------------------------

export default function OneView() {
  const settings = useSettingsContext();
  const { user, setUser } = useUser();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4"> Page One </Typography>

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
        <div>
          <h1>User Profile</h1>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <Button onClick={() => setUser({...user, age: user.age + 1})}>
            Increment Age
          </Button>
        </div>
      </Box>
    </Container>
  );
}
