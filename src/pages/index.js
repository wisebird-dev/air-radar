import React from 'react';
import {createGlobalStyle} from 'styled-components';
import emoji from 'react-easy-emoji';

// Import components
import Container from '../components/container';
import Header from '../components/header';
import Image from '../components/image';
import Details from '../components/details';
import Description from '../components/description';
import Projects from '../components/projects';
import Link from '../components/link';
import Seo from '../components/seo';

// Load modern-normalize
import '../../node_modules/modern-normalize/modern-normalize.css';

// Global Style
const GlobalStyle = createGlobalStyle`
  body {
    background: #212121;
		color: #fff;
    padding: 1em;
    line-height: 1.5em;
    font-family: Roboto Mono, monospace !important;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeSpeed;
    word-wrap: break-word
  }
	
  :focus {
    outline: none
  }
  
  ::selection {
    background-color: #9E9E9E
  }
`;

const IndexPage = () => (
	<Container>
		<Seo title="Home" keywords={['Antoni Kepinski', 'developer', 'kepinski.me']}/>
		<Image/>
		<Header>Antoni Kepinski {emoji('⚡')}</Header>
		<Details>
			<summary>
				<Description>About me</Description>
			</summary>
			<p>I&apos;m 16 years old Node.js Developer, currently living in Poland.</p>
			<p>I love making websites, CLI tools & modules.</p>
		</Details>
		<Details>
			<summary>
				<Description>Projects</Description>
			</summary>
			<Projects/>
		</Details>
		<Details>
			<summary>
				<Description>Social Media & Contact</Description>
			</summary>
			<p>I write code on <Link href="https://github.com/xxczaki" target="_blank" rel="noopener">GitHub</Link>, post short thoughts on <Link href="https://twitter.com/dokwadratu" target="_blank" rel="noopener">Twitter</Link> & the longer ones on my <Link href="https://medium.com/kepinski-dev-blog" target="_blank" rel="noopener">Blog</Link>.</p>
			<Link href="mailto:a@kepinski.me?Subject=Hello" target="_blank" rel="noopener">Get in touch {emoji('👋')}</Link>
		</Details>
		<GlobalStyle/>
	</Container>
);

export default IndexPage;
