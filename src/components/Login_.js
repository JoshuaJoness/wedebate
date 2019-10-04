<>
	<div className="wrap grid image">
	<div></div>
	<div>
		<form className="form" onSubmit={this.submit}>
		<span className="title">Login</span>
			<div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
				<Input
					className="formInput"
					label="Please enter your username:"
					placeholder="username"
					type="text"
					onChange={(e)=>this.changeField(e,'email')} />
				<Input
					className="formInput"
					label="Please enter your password:"
					placeholder="password"
					type="password"
					onChange={(e)=>this.changeField(e,'password')} />
				<div className="rainbow-p-vertical_large rainbow-p-left_xx-large">
					<button className="primary">Login</button>
				</div>
				<div className="rainbow-p-vertical_large rainbow-p-left_xx-large">
					<p className="footer">
						Don't have an account? <a href="/signup">Sign Up!</a>
					</p>
				</div>
			</div>
		</form>
		</div>
	</div>
</>
