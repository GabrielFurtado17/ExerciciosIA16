barraCat = document.querySelector('.barraDasCategorias')
divdosposts = document.querySelector("main > section > div:last-child")
console.log(barraCat)
divFurtaBlog = document.querySelector('header>div:first-child')
divFurtaBlog.addEventListener("click", ev =>pegarPosts())

async function pegarDadosCategoria(){
	let req = await fetch('../api/categoria/read.php', {
        method: "GET"
    })
	let resp = await req.json()
	resp.forEach(id => {
		let div = document.createElement('div')
		div.addEventListener("click", async function() {
			// alert(div.id)
			divdosposts.innerHTML = ""
			let reqPost = await fetch('../api/post/read.php?id_categoria='+div.id+'', {
				method: "GET"
			})
			let respPost = await reqPost.json()
			respPost.forEach(id => {
				let post = document.createElement('div')
				post.setAttribute('class','post')
		
				let titulo = document.createElement('div')
				titulo.innerHTML = (id.titulo)
				post.appendChild(titulo)
		
				let texto = document.createElement('div')
				texto.innerHTML = (id.texto)
				post.appendChild(texto)
				divdosposts.appendChild(post)
			})
			console.log(respPost)
		})
		div.setAttribute('id', id.id)
		barraCat.appendChild(div)
		div.innerHTML=(id.nome)
	})
	console.log(resp)
}

async function pegarPosts(idcat=null){
	let reqPost = await fetch('../api/post/read.php', {
		method: "GET"
	})
	divdosposts.innerHTML = ""
	let respPost = await reqPost.json()
	respPost.forEach(id => {
		let post = document.createElement('div')
		post.setAttribute('class','post')

		let titulo = document.createElement('div')
		titulo.innerHTML = (id.titulo)
		post.appendChild(titulo)

		let texto = document.createElement('div')
		texto.innerHTML = (id.texto)
		post.appendChild(texto)
		divdosposts.appendChild(post)
	})
	console.log(respPost)
}

pegarPosts()
pegarDadosCategoria()


