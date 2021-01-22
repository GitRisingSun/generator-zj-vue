const Generator = require("yeoman-generator");

module.exports = class extends Generator {
    prompting() {
        return this.prompt([{
            type: 'input',
            name: 'name',
            message: 'Your project name',
            default: this.appname
        }]).then(answers => {
            this.answers = answers
        })
    }

    writing() {
        const templates = [
            'src/app.vue',
            'components/index.vue',
            'index.html',
            'package.json',
            'product.env',
            'testing.env'
        ]
        templates.forEach(item => {
            this.fs.copyTpl(
                this.templatePath(item),
                this.destinationPath(item),
                this.answers
            )
        })
    }

}