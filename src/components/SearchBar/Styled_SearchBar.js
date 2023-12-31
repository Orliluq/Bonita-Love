import styled from 'styled-components';

export const FormSearchBar = styled.form`
	background: var(--clr-white);
	border: 2px solid var(--clr-primary); 
	border-radius: 99em;
	min-width: 200px;
	max-width: 400px;
	display: flex;
	justify-content: space-between;
	padding: 0 .7em;
	
	&:hover, &:focus-within  {
		box-shadow: inset 0 0 7px rgba(0,0,0,.15);
	}

    button {
		width: 20px;
		background: transparent;    
		border: none;
		margin-left: .5em;
		transition: transform .2s cubic-bezier(.25,.1,.75,2);
		transform-origin: center;
		text-align: right;
		&:hover, &:focus {
			filter: brightness(75%);
			transform: rotateZ(15deg);
		}

		img {
			height: 20px;
    	}
    }

    input {
		background: transparent;
		border: none;
		font-family: Poppins, sans-serif;
		font-size: 12px;
		padding: .7em 1em;
		width: 90%;
	}
	
    button:focus, input:focus{
        outline: none;
    }
`