let options = {
	root: null,
	rootMargin: '5px',
	threshold: 0.5,
}

let callback = function (entries, observer) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			console.log('find', entry)
			entry.target.classList.add('element-show')
		} else {
			entry.target.classList.remove('element-show')
		}
	})
}

let observer = new IntersectionObserver(callback, options)

let targets = document.querySelectorAll('.element-animation')
targets.forEach(target => {
	observer.observe(target)
})

let lefts = document.querySelectorAll('.element-left')
lefts.forEach(left => {
	observer.observe(left)
})
let rights = document.querySelectorAll('.element-right')
rights.forEach(right => {
	observer.observe(right)
})
