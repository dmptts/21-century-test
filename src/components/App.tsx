import AppModal from './AppModal';
import ContactTable from './ContactTable';
import Header from './Header';

export default function App() {
  return (
    <>
      <Header />
      <ContactTable />
      <AppModal name="contact"></AppModal>
    </>
  );
}
