import AppModal from './AppModal';
import ContactForm from './ContactForm';
import ContactTable from './ContactTable';
import Header from './Header';
import RadialMenu from './RadialMenu';

export default function App() {
  return (
    <>
      <Header />
      <ContactTable />
      <AppModal name="contact">
        <ContactForm />
      </AppModal>
      <AppModal name="radial-menu">
        <RadialMenu />
      </AppModal>
    </>
  );
}
