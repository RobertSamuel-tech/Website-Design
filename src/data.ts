export type navLinkType = {
  label: string;
  url: string;
};

const navLinks: navLinkType[] = [
  { label: 'Mission', url: '#mission' },
  { label: 'Vision 2030', url: '#vision' },
  { label: 'Network', url: '#network' },
  { label: 'Seminary', url: '#seminary' },
  { label: 'Contact', url: '#contact' },
];

const navbarLinks: navLinkType[] = [
  { label: 'Home', url: '#app' },
  ...navLinks,
];

const missionOrgs = [
  {
    abbr: 'NBMS',
    name: 'New Blessing Messiah Synagogue',
    category: 'Churches',
    description:
      'Establishing vibrant worshipping communities that proclaim Yeshua as Lord and Saviour, rooted in the Word and empowered by the Spirit.',
    headings: ['Worship Communities', 'Biblical Teaching', 'Spiritual Growth'],
  },
  {
    abbr: 'ETS',
    name: 'Elijah Theological Seminary',
    category: 'Bible College & Ministerial Training',
    description:
      'Equipping the next generation of pastors, evangelists and church leaders through rigorous theological education and practical ministry training.',
    headings: ['Biblical Studies', 'Theology', 'Leadership Development'],
  },
  {
    abbr: 'FNPF',
    name: 'Fellowship of National Prayer Federation',
    category: 'National Prayer Network',
    description:
      'Mobilizing believers across India into a unified prayer movement, interceding for national revival and spiritual awakening.',
    headings: ['Intercessory Prayer', 'National Mobilization', 'Revival Prayer'],
  },
  {
    abbr: 'HoZ',
    name: 'House of Zion',
    category: 'House Prayer Fellowship Movement',
    description:
      'Nurturing intimate house prayer fellowships that serve as the foundation of community-based discipleship and spiritual formation.',
    headings: ['House Fellowships', 'Community Discipleship', 'Prayer Cells'],
  },
  {
    abbr: 'GRM',
    name: 'GoForth Reforming Mission',
    category: 'Youth & Student Movement',
    description:
      'Igniting a generation of young reformers through campus outreach, leadership development and missional training.',
    headings: ['Campus Ministry', 'Youth Leadership', 'Student Outreach'],
  },
  {
    abbr: 'RRC',
    name: 'Rehoboth Revival Center',
    category: 'Counseling, Restoration & Reformation',
    description:
      'Providing Spirit-led counseling, inner healing and restoration for individuals and families seeking wholeness in Christ.',
    headings: ['Counseling', 'Inner Healing', 'Restoration'],
  },
  {
    abbr: 'IEMM',
    name: 'Individual Evangelical Missionary Movement',
    category: 'Evangelism & Mission Outreach',
    description:
      'Sending and supporting individual missionaries to unreached communities, proclaiming the Gospel and making disciples.',
    headings: ['Gospel Outreach', 'Missionary Support', 'Unreached Communities'],
  },
];

const priorityStates = [
  'Tamil Nadu',
  'Kerala',
  'Karnataka',
  'Andhra Pradesh',
  'Uttar Pradesh',
];

const timelinePhases = [
  { year: '2016', label: 'Foundation (Est. 2024)', description: 'Establishing core infrastructure and initial church plants' },
  { year: '2027', label: 'Expansion', description: 'Growing into new communities and training leaders' },
  { year: '2028', label: 'Multiplication', description: 'Church plants birthing new congregations' },
  { year: '2029', label: 'Regional Coverage', description: 'Reaching all priority states with multiple plants' },
  { year: '2030', label: '100 Church Network', description: 'A fully connected network spanning India' },
];

const seminaryPrograms = [
  { title: 'Biblical Studies', description: 'Deep study of Old and New Testament scriptures' },
  { title: 'Theology', description: 'Systematic and practical theology, divinity, and trinity for ministry' },
  { title: 'Leadership Development', description: 'Building servant leaders for the church' },
  { title: 'Mission Training', description: 'Cross-cultural and domestic mission preparation' },
];

export {
  navLinks,
  navbarLinks,
  missionOrgs,
  priorityStates,
  timelinePhases,
  seminaryPrograms,
};
