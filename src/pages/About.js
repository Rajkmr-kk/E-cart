import React from 'react';
import Layout from '../components/Layout';
import { GitHubIcon} from '../components/icons'
// npm install --save-dev @iconify/react @iconify/icons-logos
import { Icon, InlineIcon } from '@iconify/react';
import netlifyIcon from '@iconify/icons-logos/netlify';

const About = () => {
    
    return ( 
        <Layout title="About" description="This is the About page" >
            <div className="text-center mt-5">
                <h1>About</h1>
                <p>This project was built by <strong>Rajkumar K K</strong> using React.</p>

                <a className="btn btn-primary" href="https://rajkmr.netlify.app/">
                <Icon icon={netlifyIcon} /> <span className="ml-2 mr-4">Visit Admin page</span></a>
            </div>
        </Layout>
     );
}
 
export default About;