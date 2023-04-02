import { Form, Formik, FormikValues } from 'formik';
import styled from 'styled-components';
import * as yup from 'yup';
import { useModal } from '../hooks/useModal';
import {
  useAddContactMutation,
  useUpdateContactMutation,
} from '../store/contactApi';
import { IContact } from '../types/contact';
import AppButton from './AppButton';
import AppInput from './AppInput';
import Userpic from './Userpic';

const validationSchema = yup.object({
  userpic: yup.string(),
  name: yup.string().required(),
  phone: yup.string().min(8).required(),
  email: yup.string().email().required(),
  address: yup.string().required(),
});

interface IContactFormProps {
  data?: IContact;
}

export default function ContactForm({ data }: IContactFormProps) {
  const { closeModal } = useModal();
  const [addConctact] = useAddContactMutation();
  const [updateContact] = useUpdateContactMutation();

  const handleSubmit = async (values: FormikValues) => {
    if (data) {
      await updateContact({
        id: data.id,
        userpic: values.userpic ?? null,
        first_name: values.name.split(' ')[0],
        last_name: values.name.split(' ')[1],
        phone: values.phone,
        email: values.email,
        address: values.address,
      });
    } else {
      await addConctact({
        userpic: values.userpic ?? null,
        first_name: values.name.split(' ')[0],
        last_name: values.name.split(' ')[1],
        phone: values.phone,
        email: values.email,
        address: values.address,
      });
    }
    closeModal();
  };

  return (
    <Root>
      {
        <Formik
          initialValues={{
            userpic: data?.userpic ?? '',
            name:
              data?.first_name || data?.last_name
                ? `${data?.first_name && `${data?.first_name}`} ${
                    data?.last_name && `${data?.last_name}`
                  }`.trim()
                : '',
            phone: data?.phone ?? '',
            email: data?.email ?? '',
            address: data?.address ?? '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {({ values }) => {
            return (
              <>
                <Title>
                  {data
                    ? 'Редактировать пользователя'
                    : 'Добавить пользователя'}
                </Title>

                <StyledForm>
                  <StyledUserpic src={values.userpic} />
                  <StyledAppInput
                    type="text"
                    name="name"
                    id="contact-name-field"
                    placeholder="Имя"
                  />
                  <StyledAppInput
                    type="text"
                    name="phone"
                    id="contact-phone-field"
                    placeholder="Телефон"
                  />
                  <StyledAppInput
                    type="text"
                    name="email"
                    id="contact-email-field"
                    placeholder="E-mail"
                  />
                  <StyledAppInput
                    type="text"
                    name="address"
                    id="contact-address-field"
                    placeholder="Адрес"
                  />
                  <ButtonWrapper>
                    <StyledAppButton type="submit">Сохранить</StyledAppButton>
                    <StyledAppButton type="button" onClick={closeModal}>
                      Отмена
                    </StyledAppButton>
                  </ButtonWrapper>
                </StyledForm>
              </>
            );
          }}
        </Formik>
      }
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 30px;
  padding-bottom: 20px;
  padding-left: 66px;
  padding-right: 66px;

  background-color: #ffffff;
  border-radius: 10px;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 24px;

  font-weight: 600;
  color: var(--color-accent);
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledAppInput = styled(AppInput)`
  width: 252px;
  margin-bottom: 14px;

  &:last-of-type {
    margin-bottom: 26px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: stretch;
`;

const StyledAppButton = styled(AppButton)`
  text-transform: uppercase;
`;

const StyledUserpic = styled(Userpic)`
  width: 106px;
  height: 106px;

  margin-bottom: 26px;
`;
