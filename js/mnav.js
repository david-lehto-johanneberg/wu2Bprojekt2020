(function() {

	var hamburger = {
		mnavToggle: document.querySelector('.mnav-toggle'),
		mnav: document.querySelector('nav.mnav'),

		doToggle: function(e) {
			e.preventDefault();
			this.mnavToggle.classList.toggle('expanded');
			this.mnav.classList.toggle('expanded');
		}
	};

	hamburger.mnavToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });

}());
