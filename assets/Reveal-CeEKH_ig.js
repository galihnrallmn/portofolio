import{D as e,c as t,f as n,l as r,r as i,u as a}from"./index-CkWzu2j0.js";var o=e(),s=r(`
    rounded-3xl
    border
    transition-all
    duration-300
  `,{variants:{variant:{default:`
          border-slate-200
          bg-white
          shadow-lg
          hover:-translate-y-1
          hover:shadow-2xl
          dark:border-slate-800
          dark:bg-slate-900
          dark:shadow-black/30
        `,glass:`
          border-white/20
          bg-white/10
          backdrop-blur-xl
          dark:border-white/10
          dark:bg-white/5
        `}},defaultVariants:{variant:`default`}});function c({className:e,variant:n,...r}){return(0,o.jsx)(`div`,{className:t(s({variant:n}),e),...r})}function l({id:e,children:t,className:n}){return(0,o.jsx)(`section`,{id:e,className:a(`py-28`,n),children:t})}function u({title:e,subtitle:t}){return(0,o.jsxs)(`div`,{className:`mb-16 text-center`,children:[(0,o.jsx)(`p`,{className:`font-semibold tracking-[5px] text-blue-600 uppercase`,children:t}),(0,o.jsx)(`h2`,{className:`mt-4 text-4xl font-black lg:text-5xl`,children:e})]})}function d({children:e}){return(0,o.jsx)(n.div,{variants:i,initial:`hidden`,whileInView:`visible`,viewport:{once:!0,amount:.15},children:e})}export{c as i,u as n,l as r,d as t};