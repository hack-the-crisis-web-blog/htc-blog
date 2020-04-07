const checkIfInternalLink = (link) => {
  if (!link) {
    return false;
  }
  const trimmedLink = link.trim();
  if (!trimmedLink.length) {
    return false;
  }

  const expression = /^\/(?!\/)/;

  return expression.test(link);
};

export default checkIfInternalLink;
