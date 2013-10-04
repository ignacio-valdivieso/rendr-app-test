var BaseView = require('../base');

module.exports = BaseView.extend({
  className: 'categories_show_view',

  getTemplateData: function() {
    var data = BaseView.prototype.getTemplateData.call(this);
    data.category_name = this.options.category_name;
    return data;
  }
});
module.exports.id = 'categories/show';
