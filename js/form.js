$(function() {
	var form = $('#ajax-contact');
	var formMessages = $('#form-messages');
	function fr() { return (document.documentElement.getAttribute('lang') || 'fr') !== 'en'; }

	$(form).submit(function(e) {
		e.preventDefault();
		$.ajax({ type: 'POST', url: $(form).attr('action'), data: $(form).serialize() })
		.done(function() {
			$(formMessages).removeClass('bg-danger').addClass('bg-success')
				.text(fr() ? 'Merci, votre message a bien été envoyé.' : 'Thank you, your message has been sent.');
			$('#name, #email, #message').val('');
		})
		.fail(function() {
			$(formMessages).removeClass('bg-success').addClass('bg-danger')
				.text(fr() ? 'L’envoi a échoué. Vous pouvez écrire directement à contact@fml.capital.'
				           : 'Sending failed. You can write directly to contact@fml.capital.');
		});
	});
});
