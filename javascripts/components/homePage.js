import { renderToDOM } from '../helpers/helpers.js';

const createHomePage = () => {
  let domString = `
    <div class="profile-pic">
      <img
        src="/images/profile-pic-circular.png"
        alt="profile picture of chris calhoun"
      />
  </div>
  `;
  renderToDOM('main', domString);
};

export { createHomePage };
