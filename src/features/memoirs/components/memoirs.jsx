import { Container } from "@chakra-ui/react";
import Memoir from "./memoir";

const Memoirs = (props) => {
  const { memoirs } = props;

  return (
    <Container>
      {memoirs.map((memoir) => {
        return (
          <Memoir
            key={memoir.id}
            image={memoir.image}
            content={memoir.content}
          />
        );
      })}
    </Container>
  );
};

export default Memoirs;
