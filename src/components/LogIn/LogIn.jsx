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
} from "./LogIn";
import { UsersContext } from "../../contexts/UsersContext.jsx";
import { useContext } from "react";

export const LogIn = () => {
  const { closeModalL, logInUser } = useContext(UsersContext);
  return (
    <Backdrop className="is-hidden" id="backdropL">
      <Modal>
        <Form onSubmit={logInUser}>
          <Title>Log in</Title>
          <Wrap>
            <Label>
              <Input placeholder="Email" type="text" required />
            </Label>
            <Label>
              <Input placeholder="Password" type="text" required />
            </Label>
          </Wrap>
          <Cont>
            <Button>Log in</Button>
            <Text>You don’t have an account? Sing up.</Text>
          </Cont>
        </Form>
        <CLose onClick={closeModalL}>✖</CLose>
      </Modal>
    </Backdrop>
  );
};
