import { defineConfig } from  'vite' 

// https://vitejs.dev/config/ 
export  default  defineConfig ( ( { command } ) => { 
  const config = { 
    complementos : [ reaccionar ()], 
    base : 'https://github.com/ConnaP/Proyecto-Restaurant-App.github.io/' , 
  } 

  if (comando !== 'serve' ) { 
    config. base = '/react-vite-gh-pages/'
   } 

  return config 
})
