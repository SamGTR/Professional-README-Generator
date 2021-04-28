// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license == ''){
    return '';
  } else{
  return `![Badge](`+ renderLicenseLink(license)+ `)`;
  }
}

// Function that returns the license link
function renderLicenseLink(license) {
  if (license == ''){
    return '';
  } else{
  return `https://img.shields.io/badge/license-${license}-orange`;
  }
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  if (license == ''){
    return '';
  } else{
  return `\n\n## License\n\n${license}`;
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n`
  + renderLicenseBadge(data.license) +
  `\n## Description\n
  ${data.description}
  \n## Table of Contents\n
  1. [Installation](#installation)\n
  2. [Usage](#usage)\n
  3. [Contributing](#contributing)\n
  4. [Tests](#tests)\n
  5. [Questions](#questions)\n
  6. [License](#license)
  \n## Installation\n
  ${data.installation}
  \n## Usage\n
  ${data.usage}
  \n## Contributing\n
  ${data.contributing}
  \n## Tests\n
  ${data.tests}
  \n## Questions\n
  Follow me on Github [@${data.github}](https://github.com/${data.github})\n
  For any questions, reach out to ${data.email}`
  + renderLicenseSection(data.license)
;
}

module.exports = generateMarkdown;