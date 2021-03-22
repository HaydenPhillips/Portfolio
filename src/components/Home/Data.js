import roy_logo_white from '../../assets/images/project_roy/logo_tree_white.png';
// import chiffon_macro from '../../assets/images/project_roy/chiffon_macro.jpg';
import CHQ from '../../assets/icons/education/CHQ.svg';
import NUS from '../../assets/icons/education/NUS.svg';
import VIC from '../../assets/icons/education/VIC.svg';
import NZFT from '../../assets/icons/education/NZFT.jpg';
import github from '../../assets/icons/contact/github.svg';
import linkedin from '../../assets/icons/contact/linkedin.png';


export default [
  {
    componentName: 'Roy',
    name: 'Roy Apparel',
    css: 'linear-gradient(to top, #d1e6ff 0%, #99c7ff 100%)',
    area: 'area-roy',
    height: 400,
    tags: '+product-design +photography +videography +packaging +clothing',
    image: [roy_logo_white],
  },
  {
    componentName: 'AM',
    name: 'Action Motorsport',
    css: 'linear-gradient(to top, #f0d5ff 0%, #b490ca 100%)',
    height: 300,
    area: 'area-action',
    tags: '+web-development +HTML +CSS +JS +PHP',
  },
  {
    componentName: 'About',
    name: 'About',
    css: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    height: 200,
    area: 'area-about',
    tags: '+interests +contact',
    image: [github, linkedin]
  },
  {
    name: 'Education',
    description: '#e0c3fc → #8ec5fc',
    css: 'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)',
    height: 300,
    area: 'area-education',
    tags: '+computer-science +engineering +design +business',
    componentName: 'Education',
    image: [VIC, NUS, CHQ, NZFT]
  },
  {
    componentName: 'Zap',
    name: 'Zap',
    css: 'linear-gradient(to top, #b2e0ff 0%, #68a2c9 100%)',
    area: 'area-zap',
    height: 200,
    tags: '+prototype +Ui +Ux +mobile-application',
  },
  {
    componentName: 'Whitepaper',
    name: 'Planter Project',
    area: 'area-action',
    css: 'linear-gradient(-225deg, #f1e1ff 0%, #ebd3ff 100%)',
    height: 100,
    tags: '+whitepaper +DAO +blockchain',
    // image: [ whitepaperPDF ]
  },
  // {
  //   componentName: 'Gallery',
  //   name: 'Gallery',
  //   description: '#f093fb → #f5576c',
  //   css: 'linear-gradient(120deg, #97e7ff 0%, #cdf3ff 100%)',
  //   height: 300,
  // },

  // {
  //   componentName: 'Random',
  //   name: 'Random',
  //   description: '#d299c2 → #fef9d7',
  //   css: 'linear-gradient(to top, #d1e6ff 0%, #869cff 100%)',
  //   height: 100,
  // },
  // {
  //   name: 'New York',
  //   description: ' #fff1eb → #ace0f9',
  //   css: 'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)',
  //   height: 200,
  // },
  // {
  //   name: 'Soft Grass',
  //   description: ' #c1dfc4 → #deecdd',
  //   css: 'linear-gradient(to top, #c1dfc4 0%, #deecdd 100%)',
  //   height: 200,
  // },
  // {
  //   name: 'Japan Blush',
  //   description: ' #ddd6f3 → #faaca8',
  //   css: 'linear-gradient(-20deg, #ddd6f3 0%, #faaca8 100%, #faaca8 100%)',
  //   height: 100,
  // },
]