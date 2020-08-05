import React, { useState } from "react";
import PropTypes from "prop-types";

//la destructuracion que hacía por this.props en render ahora va a venir en props
const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
	const [text, setText] = useState("");

	//ya no es class así que tienen que tener el const delante. Ya no necesita los this en el return
	//onchange solamente necesita la funcion setter y el valor, ya no tengo que pasarle el target name
	const onChange = e => setText(e.target.value);

	const onSubmit = e => {
		e.preventDefault();
		if (text === "") {
			setAlert("Input some text!", "light");
		} else {
			searchUsers(text);
			setText("");
		}
	};

	return (
		<div>
			<form onSubmit={onSubmit} className="form">
				<input
					type="text"
					name="text"
					placeholder="search users"
					value={text}
					onChange={onChange}
				/>
				<input
					type="submit"
					value="Search"
					className="btn btn-dark btn-block"
				/>
			</form>
			{showClear && (
				<button className="btn btn-light btn-block" onClick={clearUsers}>
					Clear all
				</button>
			)}
		</div>
	);
};

//si es class son static y van dentro de la class, si es function van afuera y con el nombre de la funcion
Search.propTypes = {
	searchUsers: PropTypes.func.isRequired,
	clearUsers: PropTypes.func.isRequired,
	setAlert: PropTypes.func.isRequired,
	showClear: PropTypes.bool.isRequired
};

export default Search;
