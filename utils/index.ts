export const sortByDate = (
  a: { frontmatter: { date?: string | number | Date } },
  b: { frontmatter: { date?: string | number | Date } }
) => {
  const dateA = a.frontmatter.date ? new Date(a.frontmatter.date).getTime() : 0;
  const dateB = b.frontmatter.date ? new Date(b.frontmatter.date).getTime() : 0;

  return dateB - dateA;
};
