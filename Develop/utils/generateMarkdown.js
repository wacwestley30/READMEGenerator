// Needed a function to work better with the shields site. After selecting a license this function changes the dashes '-' to underscores '_' because opensource.org uses dashes for each of the github licenses you could select from github new repo. 
function underscoreLicense(license) {
  if (!license) {
    return '';
  }

  return license.replace(/-/g, '_')
}

// This is the only place underscoreLicense function is needed because shields.io mentions how to make a license badge dashes '-' seperate how the badge is created so the underscore '_' is used for spaces. Opensource.org has a short identifier
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  return `[![License](https://img.shields.io/badge/License-${underscoreLicense(license)}-green.svg)](https://opensource.org/licenses/${license})`;
}

// found shields.io and opensource.org from inspecting microsoft's READMEs referenced from the professional readme guide
// https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  return `[${license} License](https://opensource.org/licenses/${license})`;
}

// simple render for the actual section for the license
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `Licensed under the ${license} license.`
}

// This function takes in both username and email to generate the question's section for the README file.
function renderQuestionSection(username, email) {
  if (!username) {
    return '';
  }
  if (!email) {
    return '';
  }

  return `For any questions, please contact ${email}. Visit [${username}](https://github.com/${username}) for more projects.`
}

// This function starts by saving any previous functions to variables for later then generating how the actual readme will look once generated.
function generateMarkdown(data) {

  const questionSection = renderQuestionSection(data.username, data.email)
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

${licenseBadge}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${licenseSection}

${licenseLink}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

${questionSection}
`;
}

module.exports = generateMarkdown;
