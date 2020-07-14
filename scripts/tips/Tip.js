import escape from '../escapeHTML.js';

export const Tip = tip => {
  const { content } = tip;

  return `
    <li class="tip">${escape(content)}</li>
  `;
};