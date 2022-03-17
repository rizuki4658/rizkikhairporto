/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  trailingSlash: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')]
	},
	env: {
		url: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://rizkikhair.netlify.app'
	}
}

module.exports = nextConfig
