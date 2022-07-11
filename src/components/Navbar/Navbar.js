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
          <LogoText>ULTRA Profile</LogoText>
        </Logo>

        <NavInput id="nav" type="checkbox"></NavInput>
        <NavLabel for="nav"></NavLabel>

        <UlList>
          <ListItem>
            <StyledLink to={"/"}>Home</StyledLink>
          </ListItem>
          <ListItem>
            <Anchor href="#work">Work</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="#portfolio">Portfolio</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="#socialmedia">Resume</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="#about">About</Anchor>
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
