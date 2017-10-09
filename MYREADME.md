#Linter

##Linters have two categories of rules:

1. Formatting rules: eg: max-len, no-mixed-spaces-and-tabs, keyword-spacing, comma-style...

- Prettier alleviates the need for this whole category of rules! Prettier is going to reprint the entire program from scratch in a consistent way, so it's not possible for the programmer to make a mistake there anymore :)

- You can find options for Prettier at <https://github.com/prettier/prettier#options>. Currently, the rules are listed in .eslintrc file as rules. The rules are configured such that the linter throws an error when the rules are not applied. Do take note that the overwrite of prettier does not use this rules but follow the cli options provided in our npm run prettier script in package.json file.

- The browser currently only reports Code-quality rules configured by create-react-app and not Formatting rules which are defined by us under rules.

2. Code-quality rules: eg no-unused-vars, no-extra-bind, no-implicit-globals, prefer-promise-reject-errors...

- Prettier does nothing to help with those kind of rules. They are also the most important ones provided by linters as they are likely to catch real bugs with your code!

- Homi-app is currently following Create-react-app's Linter rules which only provide a minimal set of rules that find common mistakes. It is activated on the editor with extends "react-app" in .eslintrc file.

##Quick Explanation of .eslintrc

- .eslintrc file is used to configure the atom editor linter package which then highlights the linter errors in the editor.

- Adding 'prettier' as a plugin in the .eslintrc file (eslint-plugin-prettier) simply configures eslint to work with the prettier package. This allows us to set the rules in the .eslintrc file which allows us to configure the eslint rules based on prettier options which can be found at <https://github.com/prettier/prettier#option>

- Two npm packages are needed to configure .eslintrc: prettier & eslint-plugin-prettier

- Currently, my understanding of extends is that it allows us to use use other linter rules that have been defined by others. In our case, we are using the rules set by create-react-app by using the value 'react-app'

- Collectively, these settings allow us to have both react-app minimal code-quality linter rules and our own defined prettier formatting rules as defined under rules

#React Router

- Currently referencing <https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf> for project's routing

- Only install npm package react-router-dom and not react-router. Read above link to find out why

#Colors
