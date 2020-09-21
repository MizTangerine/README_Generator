// function to generate markdown for README
function generateMarkdown(data) {
  console.log('data', data)

  let required = `# ${data.title}

  ![languages](https://img.shields.io/github/languages/count/${data.user}/${data.repo}) ![top_language](https://img.shields.io/github/languages/top/${data.user}/${data.repo}) ![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-blue.svg)

  ## Description

  ${data.description}

  ![Landing Page](${data.screenshot})









  `




  return required
  //    `# Title ${data.title}
  // just checking
  // `;
}

module.exports = generateMarkdown;
