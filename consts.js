const LINKS = {
  twitter: "https://twitter.com/TrillCyborg",
  github: "https://github.com/TrillCyborg",
  linkedin: "https://www.linkedin.com/in/jasonwerner/",
  medium: "https://medium.com/@TrillCyborg/"
};

const CONTACT = {
  name: "Jason Werner",
  username: "@trillcyborg",
  website: "https://trxrg.com",
  email: "jason@trxrg.com",
  photo: "/static/images/me.jpg",
  jobTitle: "Full-Stack Developer",
  telegram: "t.me/trillcyborg",
  twitter: LINKS.twitter,
  github: LINKS.github,
  linkedin: LINKS.linkedin,
  medium: LINKS.medium
};

const SITE_METADATA = {
  title: CONTACT.name,
  description: CONTACT.jobTitle,
  author: "@trillcyborg"
};

const PROJECTS = [
  {
    name: "super",
    pic: "/static/images/super.png",
    link: "https://super.so"
  },
  {
    name: "swish",
    pic: "/static/images/swish.png",
    link: "https://swish.is"
  },
  {
    name: "cosmo",
    pic: "/static/images/cosmo.png",
    link: "https://cosmoapp.io"
  },
  {
    name: "cryptofighters",
    pic: "/static/images/cryptofighters.png",
    link: "https://cryptofighters.io"
  }
];

module.exports = {
  LINKS,
  CONTACT,
  SITE_METADATA,
  PROJECTS,
}