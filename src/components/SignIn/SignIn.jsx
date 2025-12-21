import {
  Backdrop,
  Modal,
  Form,
  Title,
  Wrap,
  Label,
  Input,
  Cont,
  Button,
  Text,
  CLose,
} from "./SignIn";
import { UsersContext } from "../../contexts/UsersContext.jsx";
import { useContext } from "react";

export const SignIn = () => {
  const { closeModalS, setNewUser } = useContext(UsersContext);

  return (
    <Backdrop className="is-hidden" id="backdropS">
      <Modal>
        <Form onSubmit={setNewUser}>
          <Title>Sing Up</Title>
          <Wrap>
            <Label>
              <Input placeholder="Name" type="text" required />
            </Label>
            <Label>
              <Input placeholder="Email" type="text" required />
            </Label>
            <Label>
              <Input placeholder="Password" type="text" required />
            </Label>
            <Label>
              <Input placeholder="Again password" type="text" required />
            </Label>
          </Wrap>
          <Cont>
            <Button>Sing Up</Button>
            <Text>You have an account? Log in.</Text>
          </Cont>
        </Form>
        <CLose onClick={closeModalS}>✖</CLose>
      </Modal>
    </Backdrop>
  );
};
