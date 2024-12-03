[...$0.innerText.matchAll(/mul\((\d+),(\d+)\)|do(n't)?\(\)/g)].map(([i,a,b])=>i=="do()"?(e=1,0):i=="don't()"?e=0:e*a*b,e=1).reduce((a,v)=>a+v,0)
