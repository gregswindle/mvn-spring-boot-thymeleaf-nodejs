class PageUpdater {
		constructor(options) {
		this.input = {
			name: document.getElementById(options.name.input.id),
			title: document.getElementById(options.title.input.id)
		}
		
		this.button = {
			name: document.getElementById(options.name.button.id),
			title: document.getElementById(options.title.button.id)
		}
		
		this.button.name.addEventListener('click', () => this.updateName(this))
		this.button.title.addEventListener('click', () => this.updateTitle(this))
	}
	
	updateName(self) {
		const title = encodeURIComponent(self.input.title.value || self.input.title.placeholder)
		const name = encodeURIComponent(self.input.name.value)
		location.href = '/home?name=' + name + '&title=' + title
	}
	
	updateTitle(self) {
		const name = encodeURIComponent(self.input.name.value || self.input.name.placeholder)
		const title = encodeURIComponent(self.input.title.value)
		location.href = `/home?title=${title}&name=${name}`;
	}
}