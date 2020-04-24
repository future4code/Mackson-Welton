import { readFile } from 'fs';


  const text1 = new Promise((resolve: any, reject: any) => {
    
    const handleFileRead = (err: Error, data: Buffer) => {
      try {
        const fileContent: string = data.toString();
        resolve(fileContent);
      }catch(e) {
        reject(err)
      }
    }
  
      readFile(`./textos/1.txt`, handleFileRead)
  
  })

  
  const text2 = new Promise((resolve: any, reject: any) => {
    
    const handleFileRead = (err: Error, data: Buffer) => {
      try {
        const fileContent: string = data.toString();
        resolve(fileContent);
      }catch(e) {
        reject(err)
      }
    }
  
      readFile(`./textos/2.txt`, handleFileRead)
  
  })

  
  const text3 = new Promise((resolve: any, reject: any) => {
    
    const handleFileRead = (err: Error, data: Buffer) => {
      try {
        const fileContent: string = data.toString();
        resolve(fileContent);
      }catch(e) {
        reject(err)
      }
    }
  
      readFile(`./textos/3.txt`, handleFileRead)
  
  })

  const text4 = new Promise((resolve: any, reject: any) => {
    
    const handleFileRead = (err: Error, data: Buffer) => {
      try {
        const content: string = data.toString();
        resolve(content);
      }catch(e) {
        reject(err)
      }
    }
  
      readFile(`./textos/4.txt`, handleFileRead)
  
  })

  const text5 = new Promise((resolve: any, reject: any) => {
    
    const handleFileRead = (err: Error, data: Buffer) => {
      try {
        const fileContent: string = data.toString();
        resolve(fileContent);
      }catch(e) {
        reject(err)
      }
    }
  
      readFile(`./textos/5.txt`, handleFileRead)
  
  })

  Promise.all([text1, text2, text3, text4, text5]).then((values) => {
    console.log(values.join(" "))
  }).catch(err => {
    console.log(err)
  })