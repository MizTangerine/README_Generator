// function to generate markdown for README
function generateMarkdown(data) {
  console.log('data', data);

  // ***Table of Contents
  let toc = `
## Table of Contents
`; //closing

  if (data.installation !== '') {
    toc += `
* [Installation](#installation)` };

  if (data.usage !== '') {
    toc += `
* [Usage](#usage)` };

  if (data.contributing !== '') {
    toc += `
* [Contributing](#contributing)` };

  if (data.tests !== '') {
    toc += `
* [Tests](#tests)` };

  toc += `
* [License](#license)
* [Questions](#questions)
`;//closing

  // ***Required Section
  let required = `# ${data.title}

![languages](https://img.shields.io/github/languages/count/${data.user}/${data.repo}) ![top_language](https://img.shields.io/github/languages/top/${data.user}/${data.repo}) ![License: ${data.license}](https://img.shields.io/badge/License-${(data.license).replace(/\s/g, "%20")}-blue.svg)

## Description

${data.description}

![Landing Page](${data.screenshot})
`;//closing

  // ****Optional Section
  let optional = `
`;//closing

  if (data.installation !== '') {
    optional += `## Installation

${data.installation}

`  };

  if (data.usage !== '') {
    optional += `## Usage

${data.usage}

`  };

  optional += `## License

${data.license}

Copyright (c) 2020 ${data.author}

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owner(s) of this repository before making a change.

`;//closing

  if (data.tests !== '') {
    optional += `## Tests

${data.tests}

`  };

  optional += `## Questions

For any questions the author can be contacted at:

GitHub: @[${data.user}](https://github.com/${data.user})

Email: ${data.email}
`;//closing

  return required += toc += optional
}

module.exports = generateMarkdown;
