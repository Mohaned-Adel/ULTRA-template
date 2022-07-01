import {
  NavbarSection,
  Logo,
  LogoText,
  NavInput,
  NavLabel,
  UlList,
  ListItem,
  Anchor,
  StyledLink,
} from "./NavbarStyle";

const Navbar = () => {
  return (
    <NavbarSection>
      <div className="container">
        <Logo>
          <LogoText>Ultra Profile</LogoText>
        </Logo>

        <NavInput id="nav" type="checkbox"></NavInput>
        <NavLabel for="nav"></NavLabel>

        <UlList>
          <ListItem>
            <StyledLink to={"/"}>Home</StyledLink>
          </ListItem>
          <ListItem>
            <Anchor href="#">Work</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="#">Portfolio</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="#">Resume</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="#">About</Anchor>
          </ListItem>
          <ListItem>
            <StyledLink to={"/contact"}>Contact</StyledLink>
          </ListItem>
        </UlList>
      </div>
    </NavbarSection>
  );
};

export default Navbar;
