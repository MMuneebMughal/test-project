import { CustomTheme } from '@src/theme/index';
import { Router } from '@src/router/Router';
// import { customersList } from '@src/auth/user/index';
export const App = () => {
  return (
    <CustomTheme>
      <Router />
    </CustomTheme>
  );
};
