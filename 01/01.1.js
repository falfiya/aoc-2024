[A,B]=$0.innerText.split`\n`.slice(0,-1).map(x=>x.split`   `).reduce(([A,B],[a,b])=>[[...A,+a],[...B,+b]],[[],[]]).map(X=>X.sort());A.reduce((a,v,i)=>a+Math.abs(v-B[i]),0)
