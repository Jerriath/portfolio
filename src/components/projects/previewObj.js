import blogPreview from './images/blogPreview.png';
import visualizerPreview from './images/visualizerPreview.png';
import builderPreview from './images/builderPreview.png';
import twitterPreview from './images/twitterPreview.png';

const previewObj = {
    blog: {
        title: "Personal Blog",
        imgSrc: blogPreview,
        description: 'Full stack MERN application for sharing cool things. Uses a backend, Express api to perform CRUD operations on a MongoDB database. There are two associated frontend applications; one for general users and one for admins.',
        repo: 'https://github.com/Jerriath/blog-api',
        demo: 'https://blog-client-jerriath.vercel.app/'
    },
    visualizer: {
        title: "Sorting Visualizer",
        imgSrc: visualizerPreview,
        description: '',
        repo: 'https://github.com/Jerriath/sorting-visualizer',
        demo: 'https://sorting-visualizer-five-rho.vercel.app/'
    },
    twitter: {
        title: "Twitter Clone",
        imgSrc: twitterPreview,
        description: '',
        repo: 'https://github.com/Jerriath/twitter-clone',
        demo: 'https://jerriath.github.io/twitter-clone/'
    },
    builder: {
        title: "PC-Builder",
        imgSrc: builderPreview,
        description: '',
        repo: 'https://github.com/Jerriath/pc-builder',
        demo: 'https://hidden-savannah-47457.herokuapp.com/catalog'
    }
};

export default previewObj;