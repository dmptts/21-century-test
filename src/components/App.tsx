import { Route, Routes, useLocation } from 'react-router';
import { APP_ROUTES } from '../config';
import AppModal from './AppModal';
import ContactForm from './ContactForm';
import Main from './Main';
import RadialMenu from './RadialMenu';

export default function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <>
      <Routes location={background || location}>
        <Route path={APP_ROUTES.Main} element={<Main />} />
      </Routes>
      {background && (
        <Routes>
          <Route
            path={APP_ROUTES.CreateContact}
            element={
              <AppModal>
                <ContactForm />
              </AppModal>
            }
          />
          <Route
            path={`${APP_ROUTES.EditContact}/:id`}
            element={
              <AppModal>
                <ContactForm />
              </AppModal>
            }
          />
          <Route
            path={APP_ROUTES.Menu}
            element={
              <AppModal>
                <RadialMenu />
              </AppModal>
            }
          />
        </Routes>
      )}
    </>
  );
}
