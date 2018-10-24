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
	respPost.forEach(id => {
		divpost = document.querySelector("main>section>div:last-child")
		let titulo = document.querySelector("main>section>div:last-child>div:first-child").innerHTML=(id.titulo)
		let texto = document.querySelector("main>section>div:last-child>div:last-child").innerHTML=(id.texto)
	})
	console.log(respPost)
}

pegarPosts()
pegarDadosCategoria()


