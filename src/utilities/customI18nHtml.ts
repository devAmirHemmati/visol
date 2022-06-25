const handleGetCustomI18nHtml = (source: string): string => {
  return source.replace(/\n/g, '<br />');
};

export default handleGetCustomI18nHtml;
