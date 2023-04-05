
// TODO: Create a function that returns the license badge & link
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'ISC') {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  } if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } if (license === `Mozilla Public License 2.0`) {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`

  } else {
    return ` `;
  }
 
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#Usage)
* [Contributors](#contributors)
* [Testing](#testing)
* [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## Contributors
${data.contribution}
## Testing
${data.testinstructions}
## Questions
Please send your questions to ${data.email} or visit [github/${data.github}](https://github.com/${data.github}).


`;
}

module.exports = generateMarkdown;
