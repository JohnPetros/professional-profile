import { StatusBar } from 'react-native';
import Container from "./components/Container/index"
import ProfileCard from "./components/ProfileCard/index"

export default function App() {

  return (
    <Container>
    <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      />
      <ProfileCard />
    </Container>
  );
}
