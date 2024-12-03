[...$0.innerText.matchAll(/mul\((\d+),(\d+)\)/g)].map(([,a,b])=>a*b).reduce((a,v)=>a+v,0)
