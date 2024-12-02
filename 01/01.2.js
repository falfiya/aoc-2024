[A,B]=$0.innerText.split`\n`.slice(0,-1).map(x=>x.split`   `).reduce(([A,B],[a,b])=>[[...A,+a],(B[b]=1+~~B[b],B)],[[],{}]);A.reduce((a,v)=>a+v*~~B[v],0)
