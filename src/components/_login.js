render() {
	return (
		<body>
			<div class="grid center middle tall image">
				<div class="card small">
					<div class="content">
						<div className="content">
							<div
								class="logo"
								style={{backgroundImage: `url('/logo-airbnb.png')`}}
							></div>
							<form onSubmit={this.signup}>
								<div class="group">
									<label>Email</label>

									<input
										type="text"
										value={this.state.user.email}
										onChange={e => this.changeField(e, "email")}
									/>

								</div>
								<div class="group">
									<label>Password</label>

									<input
										type="text"
										value={this.state.user.password}
										onChange={e => this.changeField(e, "password")}
									/>
								</div>
								<button class="primary">Login</button>
							</form>
							<p class="footer">
								Already have an account? <a href=" ">Sign up</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</body>
	);
}
}
