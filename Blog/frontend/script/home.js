barraCat = document.querySelector('.barraDasCategorias')
console.log(barraCat)

async function pegarDadosCategoria(){
	let req = await fetch('../api/categoria/read.php', {
        method: "GET"
    })
	let resp = await req.json()
	resp.forEach(id => {
		let div = document.createElement('div')
		div.addEventListener("click",ev=>{
			alert(div.id);
			pegarPosts(div.id)
			// let nomecat = ev.target.innerHTML
			// let reqPost = await fetch('../api/post/read.php?id'+div.id+'', {
			// 	method: "GET"
			// })
		})
		div.setAttribute('id', id.id)
		barraCat.appendChild(div)
		div.innerHTML=(id.nome)
	})
	console.log(resp)
}

async function pegarPosts(idcat=null){
	if(idcat==null || idcat == ""){
		let reqPost = await fetch('../api/post/read.php', {
			method: "GET"
		})
		divdosposts = document.querySelector("main > section > div:last-child")
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
	}else{
		let reqPost = await fetch('../api/post/read.php?id_categoria='+idcat+'', {
			method: "GET"
		})
		divdosposts = document.querySelector("main > section > div:last-child")
		
		let respPost = await reqPost.json()
		console.log(respPost)
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
	}
	
}

pegarPosts()
pegarDadosCategoria()


