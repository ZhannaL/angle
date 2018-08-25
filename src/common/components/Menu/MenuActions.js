import CONTENT_SELECTED from './MenuConstants';

export default (content) => {
  console.log('action=', content);
  return {
    type: CONTENT_SELECTED,
    payload: {
      content,
    },
  };
};
