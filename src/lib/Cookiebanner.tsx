import styled from "styled-components";

const Container = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 30px;
  background-color: rgb(200, 200, 200);
  padding: 30px;
  font-family: sans-serif;
`;

const CookieBanner = () => {
  return (
    <Container>
      <h3>We are using cookies on this site to improve your user experience</h3>
      <p>blablabla</p>
    </Container>
  );
};

export default CookieBanner;
