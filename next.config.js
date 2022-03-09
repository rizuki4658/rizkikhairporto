/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  trailingSlash: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')]
	},
	env: {
		url: process.env.HOST
	}
}

module.exports = nextConfig
