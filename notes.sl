+   to create the project, (this assumes vite is installed)
    `npm create vite@4.1.0 .`

    `.` uses the cwd as the project root

    * framework, select `React`
    * variant, select `TypeScript`

+   `git init`


+   install dependencies
    `npm i`

+   chakra ui:
    `npm i @chakra-ui/react@2.10.3`


+   zustand state management
    `npm i zustand`

+   converts time strings to milliseconds, allows me do ms("10s"):
    `npm i ms@2.1.3`
    `npm i -D @types/ms`
    
    `-D` means it's only available in the development environment


+   change default port number, 
    go to `vite.config.ts`, add:

`
export default defineConfig({
    ...,
    server: {
        port: 5179
    },
})
`

+   run server with:
    `npm run dev`