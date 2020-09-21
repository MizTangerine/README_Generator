// function to generate markdown for README
function generateMarkdown(data) {
  console.log('data', data)
  return `# Title ${data.title}
just checking
`;
}

module.exports = generateMarkdown;
