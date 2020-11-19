// function to generate markdown for README
//Uses template literals to get data from the inquirer prompts and insert it into the markdown.
function generateMarkdown(answers) {
  return `# ${answers.name}
  ![](https://img.shields.io/badge/License-${answers.license}-blue)
  ## Description 
  ${answers.description}
  ## Installation
  ${answers.installation}
  ## Table of Contents:
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)
  ## Usage
  ${answers.usage}
  ## License
  ${answers.license}
  ## Thumbnail
  ${answers.thumbnail}
  ## Contributing
  ${answers.contributing}
  ## Questions
  For any questions, [mailto:${answers.email}], or visit my [GitHub] (https://github.com/${answers.github}) 
 `;
}

module.exports = generateMarkdown;
