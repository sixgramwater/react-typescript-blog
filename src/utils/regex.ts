export const extractH2 = (str: string) => {
  let matches = str.match(/^#{2}.*/mg);
  let h2s = [];
  if(matches) {
    h2s = matches.map((match)=>{
      return match.replace(/^#{2}\s?/i, "")
    }) as any;
  }
  return h2s;
}

export interface ISyntaxTreeItem {
  value: string,
  h3s: Array<any>,
} 

export const generateSyntaxTree = (str:string) => {
  let matches = str.match(/^#{2}.*/mg);
  let syntaxTree: Array<ISyntaxTreeItem> = [];
  if(!matches) return [];
  for(let i=0;i<matches.length; i++) {
    const h2 = matches[i].match(/^#{2}[^#].*/);
    const h3 = matches[i].match(/^#{3}[^#].*/);
    if(h2){
      const elem = {
        value: h2[0].replace(/^#{2}\s?/i, ""),
        h3s: [],
      } as any;
      syntaxTree.push(elem);
    } else if(h3) {
      const elem = {
        value: h3[0].replace(/^#{3}\s?/i,""),
      }
      if(syntaxTree.length>0) {
        syntaxTree[syntaxTree.length-1].h3s.push(elem);
      }
      else {
        console.log('cant resolve syntax, you should have h2 before your h3!');
        break;
      }
    }

  }
  return syntaxTree;
}