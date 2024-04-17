function generateMarkdown(data) {
    return `
    # ${data.title}
    ${data.license}
    
    ### Description
    
    ${data.description}
    
    ### Table of Contents
    * Installation
    
    ## Installation
    To install, follow the following commands:
    \`\`\`
    ${data.installation}
    \`\`\`
    
    ## Usage
    ${data.license}

    ## Test
    ${data.test}

    ## Questions
    ${data.email}
    ${data.github}
   
    `
}

module.exports = generateMarkdown;