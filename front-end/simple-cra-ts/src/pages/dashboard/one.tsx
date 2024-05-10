import {Helmet} from 'react-helmet-async';
// sections
import OneView from 'src/sections/one/view';
import {UserProvider} from "../../hooks/use-user";

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Dashboard: One</title>
      </Helmet>

      <UserProvider>
        <OneView/>
      </UserProvider>
    </>
  );
}
