## Install and config eslint/airbnb/prettier in projects (locally)

### Needed

Node > 12 & Prettier/Eslint extensions

### Install

- In the project directory, run npm install eslint --save-dev<br />
- Init eslint with ./node_modules/.bin/eslint --init<br />

Now, you shoud have .eslintrc.json in your project

### Pluggins

You need to install pluggins to run prettier as eslint rule

npm install --save-dev eslint-plugin-prettier
npm install --save-dev --save-exact prettier
npm install --save-dev eslint-config-prettier

Then add: "extends": ["airbnb", "plugin:prettier/recommended"] in .eslintrc.json

### Config

All rules can be dissalowed or modified in .eslintrc.json

```json
"rules": {
    "react/jsx-no-bind": [1, { "allowArrowFunctions": true }],
    "class-methods-use-this": "off"
  }
```

Create .prettierrc
Add:

```json
{
  "singleQuote": true,
  "trailingComma": "es5"
}
```

**_Make sure all dev dependencies are in package.json_**
