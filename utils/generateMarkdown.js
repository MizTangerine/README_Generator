// function to generate markdown for README
function generateMarkdown(data) {
  console.log('sanity check', data)
  return `# ${data.title}
just checking
`;
}

module.exports = generateMarkdown;
