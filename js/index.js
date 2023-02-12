const viewCenter = (id)=>{
	for(let i=0;i<document.getElementById('mainPanel').children.length;i++){
		document.getElementById('mainPanel').children[i].style.display = 'none'
	}
	document.getElementById(id).style.display = 'block'
}

const closeAll = ()=>{
	window.open('https://lib.cnvtn.com/temp/index.html', 'self', '');
    window.close();
}