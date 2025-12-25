export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'WAY TRUTH AND LIFE TABERNACLE';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'WTLT';
  const bodyText = process.env.BLOG_BODY_TEXT
    ? decodeURI(process.env.BLOG_BODY_TEXT)
    : 'this is paragraph where everything is written';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'All rights reserved. WTLT';

  return {
    name,
    blogTitle,
    bodyText,
    footerText,
  };
};
