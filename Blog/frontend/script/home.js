barraCat = document.querySelector('.barraDasCategorias')
console.log(barraCat)

async function pegarDadosCategoria(){
	let req = await fetch('../api/categoria/read.php', {
        method: "GET"
    })
	let resp = await req.json()
	resp.forEach(id => {
		let div = document.createElement('div')
		barraCat.appendChild(div)
		div.innerHTML=(id.nome)
	})
	console.log(resp)
}

posts = document.querySelector("main>section>div:last-child")
async function pegarPosts(){
	let reqPost = await fetch('../api/post/read.php', {
        method: "GET"
    })
	let respPost = await reqPost.json()
	let divPosts = document.querySelector('#posts');
	respPost.forEach(post => {
		divPost = document.createElement('div');
		divPost.setAttribute('class', 'post');

		divtitulo = document.createElement('div');
		divtitulo.setAttribute('class', 'titulo-post');
		divtitulo.innerHTML = post.titulo;

		divtexto = document.createElement('div');
		divtexto.setAttribute('class', 'texto-post');
		txtTexto = document.createTextNode(post.texto);
		divtexto.appendChild(txtTexto);
		
		divPost.appendChild(divtitulo);
		divPost.appendChild(divtexto);
		
		divPosts.appendChild(divPost);
		// divpost = document.querySelector("main>section>div:last-child")
		// let titulo = document.querySelector("main>section>div:last-child>div:first-child").innerHTML=(post.titulo)
		// let texto = document.querySelector("main>section>div:last-child>div:last-child").innerHTML=(post.texto)
	})
	console.log(respPost)
}

pegarPosts()
pegarDadosCategoria()


