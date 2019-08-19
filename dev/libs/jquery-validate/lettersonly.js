$.validator.addMethod( "lettersonly", function( value, element ) {
	return this.optional( element ) || /^[а-яА-ЯёЁa-zA-Z]+$/i.test( value );
}, "Letters only please" );
