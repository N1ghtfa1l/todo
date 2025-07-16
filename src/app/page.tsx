import { Container } from "@mui/material";
import { MainProviders } from "./providers";
import { TodoList } from "@/widgets/todoList";

export default function Home() {
  return (
    <MainProviders>
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <TodoList />
      </Container>
    </MainProviders>
  );
}
