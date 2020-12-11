const { expect } = require('chai');
const { mergeCategories } = require('../merge-categories');

describe("mergeCategories()", () => {
  context("Using <li> tags", () => {
    const template = `
      <div>
        <ul>
          <!-- Content here -->
        </ul>
      </div>
    `;

    it("should return no <li>s for no categories", () => {
      let catagories = [];
      let result = mergeCategories(template,catagories,'li')
      expect(result).to.not.contain('<li>')
      expect(result).to.not.contain('</li>')
      expect(result).to.contain('<div>')
      expect(result).to.contain('</div>')
      expect(result).to.contain('<ul>')
      expect(result).to.contain('</ul>')
    });

    it("should return a single <li> for one category", () => {
      let categories = ['hello']
      let result = mergeCategories(template,categories,'li')
      expect(result).to.contain('<div>')
      expect(result).to.contain('</div>')
      expect(result).to.contain('<ul>')
      expect(result).to.contain('</ul>')
      expect(result).to.contain('<li>hello</li>')
      expect(result).to.not.contain('<!-- Content here -->')
    });

    it("should return an <li> for each category", () => {
      let categories = ['hello','goodbye']
      let result = mergeCategories(template,categories,'li')
      expect(result).to.contain('<div>')
      expect(result).to.contain('</div>')
      expect(result).to.contain('<ul>')
      expect(result).to.contain('</ul>')
      expect(result).to.contain('<li>hello</li>')
      expect(result).to.contain('<li>goodbye</li>')
      expect(result).to.not.contain('<!-- Content here -->')
    });
  });

  context("using <option> tags", () => {
    const template = `
      <div>
        <select>
          <!-- Content here -->
        </select>
      </div>
    `;

    it("should return no <option>s for no categories", () => {
      
    });

    it("should return a single <option> for one category", () => {
      expect.fail('please write this test');
    });

    it("should return an <option> for each category", () => {
      expect.fail('please write this test');
    });
  });
});
