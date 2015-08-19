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
	
	
	var DisplayAll= React.createClass ({
	
	render: function(){
		return(
		<div className="displayAll">
			<NavbarInstance />
		</div>
		);
		}
	});
		


	var NavbarInstance = React.createClass ({

	handleSubmit: function(e){
		console.log("im here");
		e.preventDefault();
		var email = React.findDOMNode(this.refs.email).value.trim();
		var password = React.findDOMNode(this.refs.password).value.trim();
		if(!email && !password){
			return;
		}
		this.props.onLogin({email:email, password:password});
		React.findDOMNode(this.refs.email).value= '';
		React.findDOMNode(this.refs.password).value = '';
		},
	render: function(){
			return(
			<Navbar brand='Flicture' inverse toggleNavKey={0}>
				<Nav right eventKey={0}> {/* This is the eventKey referenced */}
					<DropdownButton eventKey={1} title='login' onSubmit={this.handleSubmit}>
						<form className="loginForm" >
							<MenuItem eventKey='1' style={dropdown_style} > <Input type='text'  buttonBefore={innerButton} name="email" ref="email" /></MenuItem>
							<MenuItem eventKey='2'style={dropdown_style} > <Input type='password'  buttonBefore={innerButton1} name="password" ref="password"/></MenuItem>
							<MenuItem divider style={dropdown_style}  />
							<MenuItem eventKey='3'style={dropdown_style} ><ButtonToolbar><Button type="submit" bsStyle='primary'>Login</Button></ButtonToolbar></MenuItem>
						</form>
					</DropdownButton>
			
				<NavItem eventKey={2} href="/pic_webapp/signup" >Signup</NavItem>
					<DropdownButton eventKey={3} title='Options'>
						<MenuItem eventKey='1' href='http://www.rdprocks.com' >About me</MenuItem>
						<MenuItem divider />
						<MenuItem eventKey='2' href="http://www.twitter.com/tw3rp">contact me</MenuItem>
					</DropdownButton>
				</Nav>
			</Navbar>
			);
		    
}
});
	React.render(<DisplayAll />, document.getElementById('content'));

