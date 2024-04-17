function generateMarkdown(data){
return`
    # ${data.title}
    
    ### Description
    
    ${data.description}
    
    ### Table of Contents
    * Installation
    * Usage
    * Test
    * Inspiration
    * Questions
    
    ## Installation
    To install, follow the following commands:
    \`\`\`
    ${data.installation}
    \`\`\`
    
    ## Usage
    ${data.license}

    ## Test
    ${data.test}

    ## Inspiration
    ${data.motivation}
    ${data.enjoyment}

    ## Questions
    ${data.email}
    ${data.github}
`
}

module.exports = generateMarkdown;