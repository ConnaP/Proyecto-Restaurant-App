import { defineConfig } from  'vite' 

// https://vitejs.dev/config/ 
export  default  defineConfig ( ( { command } ) => { 
  const config = { 
    complementos : [ reaccionar ()], 
    base : 'https://github.com/ConnaP.github.io/Proyecto-Restaurant-App/' , 
  } 

  if (comando !== 'serve' ) { 
    config. base = '/react-vite-gh-pages/'
   } 

  return config 
})
