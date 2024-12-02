$0.innerText.split`\n`.slice(0,-1).map(x=>(y=x.split` `.map(x=>+x),z=y[0]-y[1]<0,y.slice(1).every((e,i)=>(w=y[i],q=z?e-w:w-e,q<4&&0<q)))).reduce((a,v)=>a+v,0)
