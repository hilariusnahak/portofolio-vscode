import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'hilariusnahak.me',
    href: 'https://hilariusnahak.me',
  },
  {
    social: 'email',
    link: 'codedev.malaka@gmail.com',
    href: 'mailto:codedev.malaka@gmail.com',
  },
  {
    social: 'github',
    link: 'hilariusnahak',
    href: 'https://github.com/hilariusnahak',
  },
  {
    social: 'linkedin',
    link: 'hilariusnahak',
    href: 'https://www.linkedin.com/in/hilariusnahak/',
  },
  {
    social: 'instagram',
    link: 'codedev.malaka',
    href: 'https://www.instagram.com/codedev.malaka',
  },
  // {
  //   social: "telegram",
  //   link: "iamnitinr",
  //   href: "https://t.me/iamnitinr",
  // },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener noreferrer">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
