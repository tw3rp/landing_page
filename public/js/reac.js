 var Navbar = ReactBootstrap.Navbar,
        Nav = ReactBootstrap.Nav,
        NavItem = ReactBootstrap.NavItem,
        DropdownButton = ReactBootstrap.DropdownButton,
        MenuItem = ReactBootstrap.MenuItem,
        Button= ReactBootstrap.Button,
        Input= ReactBootstrap.Input,
        ButtonToolbar=ReactBootstrap.ButtonToolbar;
 var dropdown_style={
	width:300
	};
const innerButton = <Button>Email</Button>; 
const innerButton1 = <Button>Password</Button>; 
        const navbarInstance = (
                <Navbar brand='Flicture' inverse toggleNavKey={0}>
                        <Nav right eventKey={0}> {/* This is the eventKey referenced */}
                        
                                <DropdownButton eventKey={1} title='login'>
                                        <MenuItem eventKey='1' style={dropdown_style} > <Input type='text' buttonBefore={innerButton} /></MenuItem>
                                        <MenuItem eventKey='2'style={dropdown_style} > <Input type='password' buttonBefore={innerButton1} /></MenuItem>
                                        <MenuItem divider style={dropdown_style}  />
                                        <MenuItem eventKey='3'style={dropdown_style} ><ButtonToolbar><Button bsStyle='primary' href="/login_new">Login</Button></ButtonToolbar></MenuItem>
                                </DropdownButton>
                                <NavItem eventKey={2} href='/pic_webapp/signup'>Signup</NavItem>
                                <DropdownButton eventKey={3} title='Options'>
                                        <MenuItem eventKey='1' href='http://www.rdprocks.com' >About me</MenuItem>
                                        <MenuItem divider />
                                        <MenuItem eventKey='2' href="http://www.twitter.com/tw3rp">contact me</MenuItem>
                                </DropdownButton>
                        </Nav>
                </Navbar>
	
);

        
        React.render(navbarInstance, 
                document.getElementById('content')
                );

