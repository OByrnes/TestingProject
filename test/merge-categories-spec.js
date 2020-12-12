const { expect } = require('chai');
const { mergeCategories } = require('../merge-categories');

describe("mergeCategories()", () => {
  context("Using <li> tags", () => {

      const template = `
        <div>
          <ul>
            {{#each categories}}
              <li>{{ this }}</li>
            {{/each}}
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
      {{#each categories}}
        <option>{{ this }}</option>
      {{/each}}
    </select>
  </div>
`;

    it("should return no <option>s for no categories", () => {
      let categories = [];
      let result = mergeCategories(template, categories, 'option');
      expect(result).to.not.contain('<option>');
      expect(result).to.not.contain('</option>');
      expect(result).to.contain('<div>');
      expect(result).to.contain('</div>');
      expect(result).to.contain('<select>');
      expect(result).to.contain('</select>');
    });

    it("should return a single <option> for one category", () => {
      let categories = ['puppy'];
      let result = mergeCategories(template, categories, 'option');
      expect(result).to.contain('<option>puppy</option>');
      expect(result).to.contain('<div>');
      expect(result).to.contain('</div>');
      expect(result).to.contain('<select>');
      expect(result).to.contain('</select>');
    });

    it("should return an <option> for each category", () => {
      let categories = ['puppy', 'mongoose'];
      let result = mergeCategories(template, categories, 'option');
      expect(result).to.contain('<option>puppy</option>');
      expect(result).to.contain('<option>mongoose</option>')
      expect(result).to.contain('<div>');
      expect(result).to.contain('</div>');
      expect(result).to.contain('<select>');
      expect(result).to.contain('</select>');
    });
  });
});
